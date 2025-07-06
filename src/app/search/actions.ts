"use server";

import { generateItinerary, GenerateItineraryInput } from "@/ai/flows/generate-itinerary";
import { z } from "zod";

const ItineraryRequestSchema = z.object({
  destination: z.string().min(3, "Destination must be at least 3 characters."),
  preferences: z.string().min(10, "Preferences must be at least 10 characters."),
});

type ItineraryState = {
  message: string | null;
  itinerary?: string;
  errors?: {
    destination?: string[];
    preferences?: string[];
  };
};

export async function getItinerary(
  prevState: ItineraryState,
  formData: FormData
): Promise<ItineraryState> {

  const validatedFields = ItineraryRequestSchema.safeParse({
    destination: formData.get("destination"),
    preferences: formData.get("preferences"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { destination, preferences } = validatedFields.data;

  try {
    const input: GenerateItineraryInput = { destination, preferences };
    const result = await generateItinerary(input);
    
    if (result.itinerary) {
      return { message: "Itinerary generated successfully.", itinerary: result.itinerary };
    } else {
      return { message: "The AI could not generate an itinerary. Please try again." };
    }
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return { message: "An unexpected error occurred. Please try again later." };
  }
}
