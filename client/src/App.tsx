import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import StructuredData from "./structuredData";

// Lazy load only the NotFound component
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <Suspense
            fallback={<div className="min-h-screen bg-background"></div>}
          >
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      <StructuredData />
      <Router />
      <Toaster />
    </>
  );
}

export default App;
