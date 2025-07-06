"use client";

import Link from "next/link";
import { Menu, MountainIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Roam Ready
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/#destinations"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Destinations
            </Link>
            <Link
              href="/search"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Plan a Trip
            </Link>
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <div className="flex md:hidden flex-1 items-center justify-start">
             <Link href="/" className="mr-6 flex items-center space-x-2">
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Roam Ready</span>
            </Link>
          </div>

          <SheetContent side="left" className="pr-0 bg-background w-[240px]">
            <div className="flex items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <MountainIcon className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Roam Ready</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                </Button>
            </div>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-foreground/60 transition-colors hover:text-foreground/80">Home</Link>
                <Link href="/#destinations" onClick={() => setIsOpen(false)} className="text-foreground/60 transition-colors hover:text-foreground/80">Destinations</Link>
                <Link href="/search" onClick={() => setIsOpen(false)} className="text-foreground/60 transition-colors hover:text-foreground/80">Plan a Trip</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/search">Get Started</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
