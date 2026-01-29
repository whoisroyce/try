import { useEffect } from "react";
import { BookOpen, Snowflake } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrustStrip } from "@/components/site/TrustStrip";

const posts = [
  {
    title: "R‑134a vs R‑1234yf: what’s the difference?",
    excerpt: "How modern refrigerants work, what your vehicle uses, and why recharge-by-weight matters.",
  },
  {
    title: "How A/C compressors work (and why they fail)",
    excerpt: "Symptoms of compressor issues, clutch problems, and what we check before replacement.",
  },
  {
    title: "Why you should avoid A/C stop-leak products",
    excerpt: "Stop‑leak can contaminate equipment and damage components—here’s a safer approach.",
  },
  {
    title: "Warm at idle, cold while driving?",
    excerpt: "A classic Miami heat complaint—often linked to condenser fans and airflow.",
  },
  {
    title: "How to recharge a car’s A/C the right way",
    excerpt: "Evacuation, vacuum, leak check, and charge by weight—why shortcuts cause problems.",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Auto A/C Repair LLC";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Stay Cool Miami</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Car A/C Solutions</h1>
              <p className="mt-4 text-muted-foreground">
                Practical education on automotive A/C systems—common failures, refrigerants, and smarter maintenance.
              </p>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Card key={p.title} className="shadow-elev">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" /> {p.title}
                  </CardTitle>
                  <CardDescription>{p.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-xl border bg-background/70 p-4 text-sm text-muted-foreground">
                    This first version lists topics only. Want full articles with categories, search, and share links?
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container pb-16">
          <Card className="shadow-elev">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Need help now?</div>
                  <div className="mt-1 text-2xl font-semibold tracking-tight">Book mobile A/C service today.</div>
                </div>
                <a
                  href="tel:17864839406"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary/90"
                >
                  <Snowflake className="h-4 w-4" /> Call (786) 483‑9406
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </PageShell>
  );
}
