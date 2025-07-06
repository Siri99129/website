"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { getItinerary } from "@/app/search/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bot, Sparkles } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90">
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Itinerary
        </>
      )}
    </Button>
  );
}

export function ItineraryForm() {
  const initialState = { message: null };
  const [state, formAction] = useActionState(getItinerary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== "Itinerary generated successfully.") {
        if (!state.errors) {
             toast({
                variant: "destructive",
                title: "Error",
                description: state.message,
            });
        }
    }
  }, [state, toast]);

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          <span>Your Travel Assistant</span>
        </CardTitle>
        <CardDescription>
          Tell us where you want to go and what you love to do.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              name="destination"
              placeholder="e.g., Paris, France"
              required
            />
            {state?.errors?.destination && (
                <p className="text-sm font-medium text-destructive">
                    {state.errors.destination[0]}
                </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Preferences & Interests</Label>
            <Textarea
              id="preferences"
              name="preferences"
              placeholder="e.g., historical sites, nature, budget-friendly food, art museums"
              required
              rows={4}
            />
            {state?.errors?.preferences && (
                <p className="text-sm font-medium text-destructive">
                    {state.errors.preferences[0]}
                </p>
            )}
          </div>
          <SubmitButton />
        </form>

        {useFormStatus().pending && (
           <div className="mt-8 space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
           </div>
        )}

        {state.itinerary && (
            <div className="mt-8">
                <Separator className="my-6"/>
                <h3 className="text-2xl font-bold font-headline mb-4">Your Custom Itinerary</h3>
                <Card className="bg-muted/50">
                    <CardContent className="p-6">
                        <pre className="whitespace-pre-wrap font-body text-sm leading-relaxed">{state.itinerary}</pre>
                    </CardContent>
                </Card>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
// Separator is not defined - I will define a simple separator component.
const Separator = ({ className }: { className?: string }) => <hr className={`border-border ${className}`} />;

