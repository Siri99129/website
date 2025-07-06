import { notFound } from "next/navigation";
import Image from "next/image";
import { destinations, reviews as allReviews } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ReviewCard } from "@/components/review-card";
import { ReviewForm } from "@/components/review-form";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const reviews = allReviews.filter(
    (r) => r.destinationSlug === params.slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <article>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {destination.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {destination.location}
          </p>
        </div>

        <Card className="my-8 md:my-12 overflow-hidden shadow-xl">
           <Carousel className="w-full">
            <CarouselContent>
              {destination.gallery.map((img) => (
                <CarouselItem key={img.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1200}
                          height={675}
                          className="rounded-lg object-cover w-full h-full"
                          data-ai-hint={img.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </Card>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About {destination.name}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {destination.longDescription}
          </p>
        </div>

        <Separator className="my-12" />

        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Traveler Reviews</h2>
            <div className="space-y-6 mb-12">
                {reviews.length > 0 ? (
                    reviews.map((review) => <ReviewCard key={review.id} review={review} />)
                ) : (
                    <p className="text-center text-muted-foreground">No reviews yet for {destination.name}. Be the first to share your experience!</p>
                )}
            </div>
            <ReviewForm />
        </div>
      </article>
    </div>
  );
}
