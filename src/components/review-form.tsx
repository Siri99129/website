"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const comment = formData.get("comment");
    
    // In a real app, you would submit this data to a server.
    console.log({ name, rating, comment });
    
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your feedback.",
    });

    event.currentTarget.reset();
    setRating(0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave a Review</CardTitle>
        <CardDescription>Share your experience with other travelers.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label>Your Rating</Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <Star
                    className={cn(
                      "h-8 w-8 transition-colors",
                      rating >= star
                        ? "text-primary fill-primary"
                        : "text-muted-foreground/50"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Your Review</Label>
            <Textarea
              id="comment"
              name="comment"
              placeholder="It was an amazing trip..."
              required
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90">Submit Review</Button>
        </form>
      </CardContent>
    </Card>
  );
}
