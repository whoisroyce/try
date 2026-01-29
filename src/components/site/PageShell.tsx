import { ReactNode } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
