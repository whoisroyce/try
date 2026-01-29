import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarClock, ClipboardCheck, MapPin, Phone, Snowflake } from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  serviceAddress: z.string().min(8, "Please enter the service address"),
  city: z.string().min(2, "Please enter the city"),
  vehicle: z.string().min(3, "Please enter year / make / model"),
  vin: z.string().optional().or(z.literal("")),
  preferredTime: z.string().min(2, "Please add a preferred date/time"),
  symptoms: z.string().min(5, "Please describe the A/C issue"),
});

type FormValues = z.infer<typeof schema>;

export default function Estimate() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  useEffect(() => {
    document.title = "Get Estimate | Auto A/C Repair LLC";
  }, []);

  const defaults = useMemo<FormValues>(
    () => ({
      fullName: "",
      phone: "",
      email: "",
      serviceAddress: "",
      city: "",
      vehicle: "",
      vin: "",
      preferredTime: "",
      symptoms: "",
    }),
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = async (values: FormValues) => {
    // No backend in this first version—confirm and provide a copy-friendly summary.
    setSubmitted(values);
    toast({
      title: "Request received",
      description: "Please call to confirm availability. You can also copy the request details below.",
    });
    reset(defaults);
  };

  return (
    <PageShell>
      <main>
        <header className="bg-hero">
          <div className="container py-12 md:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">Fast estimate • Mobile appointment</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Get a Free Estimate</h1>
              <p className="mt-4 text-muted-foreground">
                Fill this out and we’ll use it to prepare for your visit. For immediate scheduling, call
                <span className="font-medium text-foreground"> (786) 483‑9406</span>.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <a href="tel:17864839406">
                    <Phone /> Call now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#request">
                    <ClipboardCheck /> Fill the form
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <TrustStrip />

        <section id="request" className="container py-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="shadow-elev">
              <CardHeader>
                <CardTitle>Service request</CardTitle>
                <CardDescription>
                  Diagnostic fee (~$95/hr) may apply for detailed testing and is applied toward the final repair.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full name</Label>
                      <Input id="fullName" placeholder="Your name" {...register("fullName")} />
                      {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(786) 000-0000" {...register("phone")} />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred date/time</Label>
                      <Input id="preferredTime" placeholder="Today after 3pm" {...register("preferredTime")} />
                      {errors.preferredTime && <p className="text-sm text-destructive">{errors.preferredTime.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="serviceAddress">Service address</Label>
                      <Input id="serviceAddress" placeholder="Street address" {...register("serviceAddress")} />
                      {errors.serviceAddress && (
                        <p className="text-sm text-destructive">{errors.serviceAddress.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Miami" {...register("city")} />
                      {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle (year/make/model)</Label>
                      <Input id="vehicle" placeholder="2018 Toyota Camry" {...register("vehicle")} />
                      {errors.vehicle && <p className="text-sm text-destructive">{errors.vehicle.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vin">VIN (optional)</Label>
                      <Input id="vin" placeholder="17-character VIN" {...register("vin")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="symptoms">What’s the A/C doing?</Label>
                    <Textarea id="symptoms" placeholder="Example: blows warm at idle, cold while driving" {...register("symptoms")} />
                    {errors.symptoms && <p className="text-sm text-destructive">{errors.symptoms.message}</p>}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
                      <ClipboardCheck /> {isSubmitting ? "Submitting…" : "Submit request"}
                    </Button>
                    <Button type="button" variant="outline" size="lg" onClick={() => reset(defaults)}>
                      Clear
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <CalendarClock className="h-4 w-4" /> Same‑day service available in most areas
                      </span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-elev">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Snowflake className="h-5 w-5 text-primary" /> What to expect
                  </CardTitle>
                  <CardDescription>Clear steps so there are no surprises.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-lg border bg-background/70 p-3">
                    <div className="font-medium text-foreground">1) Quick check + estimate</div>
                    We assess cooling performance, pressures, and visible components.
                  </div>
                  <div className="rounded-lg border bg-background/70 p-3">
                    <div className="font-medium text-foreground">2) Detailed diagnostics (if needed)</div>
                    ~$95/hr diagnostic fee may apply and is applied toward your repair.
                  </div>
                  <div className="rounded-lg border bg-background/70 p-3">
                    <div className="font-medium text-foreground">3) Repair + testing</div>
                    Repairs are completed on‑site whenever possible, followed by system verification.
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elev">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" /> Service areas
                  </CardTitle>
                  <CardDescription>Miami‑Dade County, Florida</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Hialeah, Miami Lakes, Doral, Coral Gables, Miami Beach, and surrounding areas.
                </CardContent>
              </Card>

              {submitted && (
                <Card className="shadow-elev">
                  <CardHeader>
                    <CardTitle>Copy your request</CardTitle>
                    <CardDescription>Paste this into a text message or email if needed.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="max-h-72 overflow-auto rounded-lg border bg-secondary p-3 text-xs text-foreground">
{`Name: ${submitted.fullName}
Phone: ${submitted.phone}
Email: ${submitted.email || "(not provided)"}
Vehicle: ${submitted.vehicle}
VIN: ${submitted.vin || "(not provided)"}
Preferred: ${submitted.preferredTime}
Address: ${submitted.serviceAddress}, ${submitted.city}
Symptoms: ${submitted.symptoms}`}
                    </pre>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
