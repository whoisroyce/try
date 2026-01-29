import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Wrench,
  Droplets,
  Scan,
  Truck,
  Fan,
  Thermometer,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrustStrip } from "@/components/site/TrustStrip";

import gaugesImage from "@/assets/autoac-gauges.jpg";
import fleetImage from "@/assets/autoac-fleet.jpg";

const PHONE = "(786) 483-9406";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Auto A/C Repair LLC";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Mobile A/C services in Miami‑Dade County</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Services</h1>
              <p className="mt-4 text-muted-foreground">
                We service cars, SUVs, pickup trucks, heavy‑duty trucks and commercial fleets. Free estimates are
                available. Detailed diagnostics may involve a ~$95/hr diagnostic fee that is applied toward your repair.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link to="/get-estimate">
                    <ClipboardCheck /> Get a free estimate
                  </Link>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <a href="tel:17864839406">
                    <Snowflake /> Call {PHONE}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <Scan className="h-5 w-5 text-primary" />,
                title: "Automotive A/C diagnostics & repair",
                points: [
                  "On‑site HVAC diagnostics and system repairs",
                  "Leak detection and troubleshooting",
                  "Gauge + scan tool testing",
                  "Free A/C checkups and estimates",
                ],
              },
              {
                icon: <Wrench className="h-5 w-5 text-primary" />,
                title: "Component replacement",
                points: [
                  "A/C compressor replacement (car & truck)",
                  "HVAC evaporator & condenser replacement",
                  "Compressor clutch coil replacement",
                  "Blower motor & resistor replacement",
                ],
              },
              {
                icon: <Droplets className="h-5 w-5 text-primary" />,
                title: "Evacuation, vacuum & refrigerant recharge",
                points: [
                  "Recharge by weight with leak checks",
                  "R‑134a systems",
                  "R‑1234yf systems",
                  "System testing after service",
                ],
              },
              {
                icon: <Truck className="h-5 w-5 text-primary" />,
                title: "Fleet & heavy‑duty A/C work",
                points: [
                  "Box trucks, vans, fleet vehicles",
                  "Heavy‑duty trucks",
                  "On‑site scheduling for businesses",
                  "Fast turnaround and clear communication",
                ],
              },
            ].map((s) => (
              <Card key={s.title} className="shadow-elev">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border bg-background/70 p-3 shadow-elev">{s.icon}</div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">{s.title}</h2>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pb-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden shadow-elev">
              <img
                src={gaugesImage}
                alt="A/C manifold gauges used for automotive air conditioning diagnostics"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight">Professional diagnostics</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We verify pressures, temperatures, and system behavior to pinpoint the real cause—then quote the repair
                  clearly.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-elev">
              <img
                src={fleetImage}
                alt="Fleet box truck supported by on-site mobile A/C service"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-tight">Fleet & heavy‑duty ready</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Commercial scheduling, on-site service, and dependable turnaround for work trucks and fleet vehicles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "1‑year warranty", desc: "On services." },
              { icon: <Thermometer className="h-5 w-5 text-primary" />, title: "Honest diagnosis", desc: "No surprise fees." },
              { icon: <Fan className="h-5 w-5 text-primary" />, title: "Done at your location", desc: "Home or work." },
            ].map((b) => (
              <Card key={b.title} className="shadow-elev">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl border bg-background/70 p-3 shadow-elev">{b.icon}</div>
                    <div>
                      <div className="font-semibold">{b.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{b.desc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
