// This is an autogenerated file from Firebase Studio.

'use server';

/**
 * @fileOverview AI-powered itinerary generator.
 *
 * - generateItinerary - A function that takes a destination and user preferences and returns a travel itinerary.
 * - GenerateItineraryInput - The input type for the generateItinerary function.
 * - GenerateItineraryOutput - The return type for the generateItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateItineraryInputSchema = z.object({
  destination: z.string().describe('The desired travel destination (e.g., city, country).'),
  preferences: z
    .string()
    .describe(
      'The user preferences for the trip, including interests (e.g., historical sites, nature, food), travel style (e.g., budget, luxury, adventure), and budget (e.g., low, medium, high).'
    ),
});

export type GenerateItineraryInput = z.infer<typeof GenerateItineraryInputSchema>;

const GenerateItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A detailed travel itinerary, including top attractions, estimated costs, and travel times.'),
});

export type GenerateItineraryOutput = z.infer<typeof GenerateItineraryOutputSchema>;

export async function generateItinerary(input: GenerateItineraryInput): Promise<GenerateItineraryOutput> {
  return generateItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItineraryPrompt',
  input: {schema: GenerateItineraryInputSchema},
  output: {schema: GenerateItineraryOutputSchema},
  prompt: `You are a travel expert specializing in creating personalized itineraries. Based on the user's destination and preferences, generate a detailed travel itinerary, including top attractions, estimated costs, and travel times. 

Destination: {{{destination}}}
Preferences: {{{preferences}}}

Itinerary:`,
});

const generateItineraryFlow = ai.defineFlow(
  {
    name: 'generateItineraryFlow',
    inputSchema: GenerateItineraryInputSchema,
    outputSchema: GenerateItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
