import { useEffect } from "react";
import { MapPin, Phone, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrustStrip } from "@/components/site/TrustStrip";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Auto A/C Repair LLC";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Call or request service</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Contact</h1>
              <p className="mt-4 text-muted-foreground">
                We’re a mobile service—tell us where the vehicle is located and your preferred time.
              </p>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-elev">
              <CardContent className="p-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border bg-background/70 p-3 shadow-elev">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <a className="mt-1 block text-lg font-semibold text-primary hover:underline" href="tel:17864839406">
                      (786) 483‑9406
                    </a>
                    <p className="mt-2 text-sm text-muted-foreground">Fastest way to confirm same‑day availability.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elev">
              <CardContent className="p-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border bg-background/70 p-3 shadow-elev">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Service address listed</div>
                    <div className="mt-1 text-muted-foreground">334 E 21 ST, Miami, FL 33010</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Service area: Miami‑Dade County including Hialeah, Miami Lakes, Doral, Coral Gables, Miami Beach,
                      and surrounding areas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-2xl border bg-card p-8 shadow-elev md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Prefer online?</h2>
                <p className="mt-2 text-muted-foreground">Use the estimate form to share vehicle details and symptoms.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link to="/get-estimate">
                    <ClipboardCheck /> Get estimate
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://autoacrepair1.com" target="_blank" rel="noreferrer">
                    Visit current site
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
