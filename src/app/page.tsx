import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { destinations, reviews, galleryImages } from "@/lib/data";
import { DestinationCard } from "@/components/destination-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Hero background"
            fill
            className="object-cover"
            data-ai-hint="travel background"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50 p-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Explore Your Next Adventure
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              Discover breathtaking destinations and create unforgettable memories.
              Your journey begins here.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/search">Plan Your Trip</Link>
            </Button>
          </div>
        </section>

        <section id="destinations" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Destinations
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our handpicked selection of must-visit locations around
                  the globe.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {destinations.slice(0, 4).map((destination) => (
                <DestinationCard
                  key={destination.slug}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              What Our Travelers Say
            </h2>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(0, 3).map((review) => (
                <Card key={review.id} className="bg-background">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>
                        {review.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground italic">
                      "{review.comment}"
                    </p>
                    <div className="flex mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? "text-primary" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    <cite className="mt-4 font-semibold not-italic">{review.name}</cite>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Gallery
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the stunning landscapes and vibrant cultures our travelers have experienced.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {galleryImages.map((img) => (
                    <div key={img.id} className="overflow-hidden rounded-lg">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                            data-ai-hint={img.hint}
                        />
                    </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
