import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function NotFound() {
  // Update the document title for SEO
  useEffect(() => {
    document.title = "Page Not Found | Riccardo Rizzo";

    // Add meta description for 404 page
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "The page you are looking for could not be found. Return to Riccardo Rizzo's homepage.";
    document.head.appendChild(metaDescription);

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30">
      <Card className="w-full max-w-md mx-4 shadow-lg border-primary/10">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-primary mb-4" />
            <h1 className="text-3xl font-bold">404 Page Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Link href="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
