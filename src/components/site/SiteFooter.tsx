import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Snowflake } from "lucide-react";

const PHONE_LABEL = "(786) 483-9406";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-background/70 shadow-elev">
                <Snowflake className="h-4 w-4 text-primary" />
              </span>
              <div className="text-sm font-semibold">Auto A/C Repair LLC</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Mobile automotive air conditioning diagnosis and repair across Miami‑Dade County.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  334 E 21 ST, Miami, FL 33010
                  <span className="block text-xs">(listed service address)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Same‑day available in most areas
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <div className="font-semibold">Quick links</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <Link className="hover:underline" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/get-estimate">
                    Get estimate
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/self-diagnostics">
                    Self‑diagnostics
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Company</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <Link className="hover:underline" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/privacy">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Book mobile A/C service</div>
            <p className="text-sm text-muted-foreground">
              Call for a quick quote or request an estimate online. We service Miami, Hialeah, Miami Lakes, Doral, Coral
              Gables, Miami Beach, and surrounding areas.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild variant="hero">
                <a href="tel:17864839406">
                  <Phone /> Call {PHONE_LABEL}
                </a>
              </Button>
              <Button asChild variant="accent">
                <Link to="/get-estimate">Request online</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Auto A/C Repair LLC. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:underline" to="/privacy">
              Privacy Policy
            </Link>
            <a className="hover:underline" href="https://autoacrepair1.com" target="_blank" rel="noreferrer">
              autoacrepair1.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
