import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Destination } from "@/lib/data";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <Image
          src={destination.image}
          alt={`Image of ${destination.name}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint="travel destination"
        />
        <CardHeader>
          <CardTitle className="font-headline">{destination.name}</CardTitle>
          <CardDescription>{destination.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{destination.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
