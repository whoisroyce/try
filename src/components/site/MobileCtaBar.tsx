import { Link } from "react-router-dom";
import { ClipboardCheck, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const PHONE_TEL = "tel:17864839406";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex gap-2 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
          <Button asChild variant="hero" className="flex-1">
            <a href={PHONE_TEL} aria-label="Call Auto A/C Repair LLC">
              <Phone /> Call
            </a>
          </Button>
          <Button asChild variant="accent" className="flex-1">
            <Link to="/get-estimate" aria-label="Get a free estimate">
              <ClipboardCheck /> Get Estimate
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
