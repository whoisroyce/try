import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TrustItem = {
  title: string;
  desc: string;
  Icon: typeof BadgeCheck;
};

const items: TrustItem[] = [
  {
    title: "ASE‑certified",
    desc: "Qualified technicians",
    Icon: BadgeCheck,
  },
  {
    title: "1‑year warranty",
    desc: "On services",
    Icon: ShieldCheck,
  },
  {
    title: "Same‑day service",
    desc: "In most areas",
    Icon: Clock,
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Service trust indicators" className="border-b bg-background/70">
      <div className="container py-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <Card key={title} className="shadow-elev">
              <CardContent className="flex items-center gap-3 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/70 shadow-elev">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
