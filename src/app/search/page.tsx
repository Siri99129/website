import { ItineraryForm } from '@/components/itinerary-form';

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
          AI Itinerary Planner
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Let our AI craft the perfect travel plan for you. Just enter your destination and preferences, and we'll handle the rest!
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <ItineraryForm />
      </div>
    </div>
  );
}
