import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Snowflake } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const PHONE_LABEL = "(786) 483-9406";
const PHONE_TEL = "tel:17864839406";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/get-estimate", label: "Get Estimate" },
  { to: "/self-diagnostics", label: "Self‑Diagnostics" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(() => nav, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b backdrop-blur supports-[backdrop-filter]:bg-background/70",
          scrolled ? "bg-background/75" : "bg-background/50",
        )}
      >
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/70 shadow-elev">
              <Snowflake className="h-5 w-5 text-primary" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight">Auto A/C Repair LLC</span>
              <span className="block text-xs text-muted-foreground">Mobile service • Miami‑Dade</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {items.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeClassName="bg-secondary text-foreground"
              >
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex" variant="hero" size="sm">
              <a href={PHONE_TEL} aria-label={`Call ${PHONE_LABEL}`}>
                <Phone /> {PHONE_LABEL}
              </a>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b bg-background md:hidden">
          <div className="container py-4">
            <div className="grid gap-2">
              {items.map((i) => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md border bg-card px-4 py-3 text-sm text-foreground shadow-elev"
                  activeClassName="ring-2 ring-ring"
                >
                  {i.label}
                </NavLink>
              ))}
              <Button asChild variant="accent" className="justify-start">
                <a href={PHONE_TEL}>
                  <Phone /> Call {PHONE_LABEL}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
