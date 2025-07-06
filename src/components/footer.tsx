import Link from "next/link";
import { MountainIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6 text-primary" />
            <p className="text-lg font-semibold font-headline">Roam Ready</p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Roam Ready. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link
            href="/#destinations"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Destinations
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Itinerary Planner
          </Link>
        </nav>
      </div>
    </footer>
  );
}
