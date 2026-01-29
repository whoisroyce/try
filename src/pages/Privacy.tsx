import { useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { TrustStrip } from "@/components/site/TrustStrip";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Auto A/C Repair LLC";
  }, []);

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Policy</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
              <p className="mt-4 text-muted-foreground">
                This is a simplified policy page for the website build. Replace with your official legal text if needed.
              </p>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section className="container py-12">
          <Card className="shadow-elev">
            <CardContent className="prose prose-sm max-w-none p-8 text-foreground dark:prose-invert md:p-10">
              <h2>Information we collect</h2>
              <p>
                When you submit a service request, you may provide contact details, vehicle information, and service
                location details.
              </p>

              <h2>How we use information</h2>
              <ul>
                <li>To contact you about scheduling and service availability</li>
                <li>To prepare for diagnostics and bring appropriate equipment/parts</li>
                <li>To improve our service and customer experience</li>
              </ul>

              <h2>Self‑diagnostics tool</h2>
              <p>
                Self‑diagnostics is for educational purposes and does not replace a professional inspection.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about this policy, call (786) 483‑9406.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </PageShell>
  );
}
