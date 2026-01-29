import { useEffect } from "react";
import { BadgeCheck, Clock, ShieldCheck, Truck } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { TrustStrip } from "@/components/site/TrustStrip";

export default function About() {
  useEffect(() => {
    document.title = "About | Auto A/C Repair LLC";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Why choose us</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Mobile A/C specialists</h1>
              <p className="mt-4 text-muted-foreground">
                Auto A/C Repair LLC focuses on fast, professional mobile air conditioning diagnosis and repair across
                Miami‑Dade County.
              </p>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-elev">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
                <p className="mt-3 text-muted-foreground">
                  We diagnose and repair automotive A/C systems on-site—cars, trucks, heavy-duty trucks, and fleets.
                  Expect clear communication, honest recommendations, and verified results.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elev">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
                <p className="mt-3 text-muted-foreground">
                  Mobile service means we come to you. Many jobs can be completed the same day depending on parts and
                  scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container pb-16">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: <BadgeCheck className="h-5 w-5 text-primary" />, title: "ASE-certified", desc: "Qualified techs" },
              { icon: <Clock className="h-5 w-5 text-primary" />, title: "Same-day", desc: "In most areas" },
              { icon: <ShieldCheck className="h-5 w-5 text-primary" />, title: "1-year warranty", desc: "On services" },
              { icon: <Truck className="h-5 w-5 text-primary" />, title: "Fleets", desc: "Commercial support" },
            ].map((x) => (
              <Card key={x.title} className="shadow-elev">
                <CardContent className="p-6">
                  <div className="rounded-xl border bg-background/70 p-3 shadow-elev">{x.icon}</div>
                  <div className="mt-4 font-semibold">{x.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{x.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
