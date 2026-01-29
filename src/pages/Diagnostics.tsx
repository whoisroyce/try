import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Fan, Snowflake, ThermometerSun, Volume2, Wind, ClipboardCheck } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SymptomKey =
  | "warm_at_idle"
  | "no_cooling"
  | "weak_airflow"
  | "noise"
  | "intermittent";

export default function Diagnostics() {
  useEffect(() => {
    document.title = "Self‑Diagnostics | Auto A/C Repair LLC";
  }, []);

  const options = useMemo(
    () =>
      [
        { key: "no_cooling" as const, label: "No cold air", icon: <Snowflake className="h-5 w-5 text-primary" /> },
        {
          key: "warm_at_idle" as const,
          label: "Cold while driving, warm at idle",
          icon: <ThermometerSun className="h-5 w-5 text-primary" />,
        },
        {
          key: "weak_airflow" as const,
          label: "Weak airflow / not blowing hard",
          icon: <Wind className="h-5 w-5 text-primary" />,
        },
        { key: "noise" as const, label: "Noise when A/C is on", icon: <Volume2 className="h-5 w-5 text-primary" /> },
        { key: "intermittent" as const, label: "Intermittent cooling", icon: <Fan className="h-5 w-5 text-primary" /> },
      ] as const,
    [],
  );

  const [selected, setSelected] = useState<SymptomKey>("no_cooling");

  const guidance = useMemo(() => {
    const map: Record<SymptomKey, { title: string; bullets: string[]; note: string }>
      = {
        no_cooling: {
          title: "No cold air",
          bullets: [
            "Low refrigerant due to a leak",
            "Compressor not engaging (electrical or mechanical)",
            "Pressure switch / sensor issue",
            "Condenser fan problem",
          ],
          note: "We can run pressures, scan codes, and check for leaks on-site.",
        },
        warm_at_idle: {
          title: "Cold while driving, warm at idle",
          bullets: [
            "Condenser fan not working or restricted airflow",
            "Overheating / radiator fan issues affecting A/C",
            "Low refrigerant",
            "Dirty condenser",
          ],
          note: "This is common in Miami heat—fan operation is a quick check we can do on location.",
        },
        weak_airflow: {
          title: "Weak airflow",
          bullets: [
            "Cabin air filter clogged (if equipped)",
            "Blower motor or resistor failing",
            "Evaporator restriction / debris",
            "Blend door / HVAC control issue",
          ],
          note: "Airflow problems can feel like “no A/C” even when the system is cold.",
        },
        noise: {
          title: "Noise with A/C on",
          bullets: [
            "Compressor clutch / bearing noise",
            "Belt / pulley related noises",
            "Blower motor noise",
            "Debris in fan housing",
          ],
          note: "Turn A/C off if noise is severe to prevent additional damage, then call us.",
        },
        intermittent: {
          title: "Intermittent cooling",
          bullets: [
            "Refrigerant pressure is borderline",
            "Compressor control valve issue",
            "Electrical connection / relay problem",
            "System over/under pressure shutoff",
          ],
          note: "Intermittent issues are easiest to diagnose with live readings on-site.",
        },
      };
    return map[selected];
  }, [selected]);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Quick symptom checker</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Self‑Diagnostics</h1>
              <p className="mt-4 text-muted-foreground">
                This tool helps you describe the issue clearly. It’s not a replacement for professional diagnostics.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <Link to="/get-estimate">
                    <ClipboardCheck /> Request service
                  </Link>
                </Button>
                <Button asChild variant="hero" size="lg">
                  <a href="tel:17864839406">
                    <Snowflake /> Call (786) 483‑9406
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="shadow-elev">
              <CardHeader>
                <CardTitle>Pick a symptom</CardTitle>
                <CardDescription>Choose what best matches your A/C issue.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {options.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setSelected(o.key)}
                    className={
                      o.key === selected
                        ? "flex items-center gap-3 rounded-lg border bg-secondary px-4 py-3 text-left shadow-elev"
                        : "flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-left shadow-elev hover:bg-secondary"
                    }
                  >
                    <span className="rounded-xl border bg-background/70 p-2 shadow-elev">{o.icon}</span>
                    <span className="text-sm font-medium">{o.label}</span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-elev">
              <CardHeader>
                <CardTitle>{guidance.title}</CardTitle>
                <CardDescription>Common causes we check for on-site.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {guidance.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl border bg-background/70 p-4 text-sm">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Tip</div>
                      <div className="text-muted-foreground">{guidance.note}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
