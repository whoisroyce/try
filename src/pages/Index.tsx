import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrench, Snowflake, Truck, ShieldCheck, Clock, Phone, MapPin, ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";

import heroImage from "@/assets/autoac-hero.jpg";

const PHONE = "(786) 483-9406";

const Index = () => {
  useEffect(() => {
    document.title = "Auto A/C Repair LLC | Mobile A/C Repair Miami-Dade";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-elev">
                  <Snowflake className="h-4 w-4 text-primary" /> Mobile automotive A/C diagnosis & repair in Miami‑Dade
                </p>

                <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                  Same‑day mobile
                  <span className="text-primary"> A/C repair</span> — we come to you.
                </h1>

                <p className="max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
                  Cars, trucks, heavy‑duty trucks & fleets. ASE‑certified technicians, honest diagnostics, and a 1‑year
                  warranty — serviced at your driveway, office, or parking lot.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild variant="accent" size="lg">
                    <Link to="/get-estimate">
                      <ClipboardCheck /> Get a free estimate
                    </Link>
                  </Button>
                  <Button asChild variant="hero" size="lg">
                    <a href="tel:17864839406">
                      <Phone /> Call {PHONE}
                    </a>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Miami", "Hialeah", "Doral"].map((area) => (
                    <div
                      key={area}
                      className="rounded-lg border bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-elev"
                    >
                      <span className="font-medium text-foreground">Service Area</span>
                      <div className="mt-1">{area} & nearby</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual + Signature moment: photo + floating module */}
              <div className="relative space-y-5">
                <div className="relative overflow-hidden rounded-2xl border bg-card shadow-elev">
                  <img
                    src={heroImage}
                    alt="Mobile auto A/C technician performing diagnostics on a vehicle in Miami"
                    className="h-[240px] w-full object-cover sm:h-[280px]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border bg-background/70 p-3 shadow-elev">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm">
                        <div className="font-semibold">Mobile A/C service</div>
                        <div className="text-muted-foreground">Miami‑Dade County</div>
                      </div>
                      <Button asChild size="sm" variant="accent">
                        <Link to="/get-estimate">Book now</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
                  <Card className="relative overflow-hidden shadow-glow">
                    <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Fast checks, clear answers</p>
                        <h2 className="mt-1 text-2xl font-semibold tracking-tight">A/C Diagnosis & Repair</h2>
                      </div>
                      <div className="rounded-xl border bg-background/70 p-3 shadow-elev">
                        <Snowflake className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div className="flex items-center gap-3 rounded-lg border bg-background/70 p-3">
                        <Wrench className="h-4 w-4 text-primary" />
                        <div className="text-sm">
                          <div className="font-medium">Leak detection & troubleshooting</div>
                          <div className="text-muted-foreground">Gauge + scan tool testing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg border bg-background/70 p-3">
                        <Truck className="h-4 w-4 text-primary" />
                        <div className="text-sm">
                          <div className="font-medium">Fleet & heavy‑duty support</div>
                          <div className="text-muted-foreground">Box trucks, vans, commercial</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-lg border bg-background/70 p-3">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <div className="text-sm">
                          <div className="font-medium">1‑year warranty</div>
                          <div className="text-muted-foreground">Professional & reliable service</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between rounded-xl border bg-secondary p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" /> Same‑day available in most areas
                      </div>
                      <Button asChild size="sm" variant="default">
                        <Link to="/services">See services</Link>
                      </Button>
                    </div>
                  </CardContent>

                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 animate-float-y rounded-full bg-primary/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-12 -left-10 h-52 w-52 animate-float-y rounded-full bg-accent/20 blur-3xl [animation-delay:-2s]"
                    aria-hidden="true"
                  />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <MapPin className="h-5 w-5 text-primary" />,
                title: "Mobile service",
                desc: "We come to you anywhere in Miami‑Dade County — driveway, office, parking lot.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-primary" />,
                title: "ASE‑certified",
                desc: "Fast, honest diagnosis and repairs with a 1‑year warranty on services.",
              },
              {
                icon: <Snowflake className="h-5 w-5 text-primary" />,
                title: "R‑134a & R‑1234yf",
                desc: "Evacuation, vacuum, recharge by weight, and leak checks to protect your system.",
              },
            ].map((f) => (
              <Card key={f.title} className="shadow-elev">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border bg-background/70 p-3 shadow-elev">{f.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pb-16">
          <div className="rounded-2xl border bg-card p-8 shadow-elev md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Need cold air today?</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Get a quick estimate and schedule a mobile appointment. Diagnostic fee (~$95/hr) applies to detailed
                  testing and is applied toward your repair.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link to="/get-estimate">
                    <ClipboardCheck /> Request service
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/self-diagnostics">
                    <Snowflake /> Try self‑diagnostics
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
};

export default Index;
