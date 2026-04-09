import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Eye, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KitCard } from "@/components/KitCard";
import { kits } from "@/data/kits";
import heroImage from "@/assets/hero-image.jpg";

const steps = [
  { icon: Eye, title: "Identify Your Goal", description: "Choose the habit you want to build — from better sleep to deeper focus." },
  { icon: Lightbulb, title: "Get Your Kit", description: "Each kit is a curated set of tools backed by behavioral science research." },
  { icon: Settings, title: "Set Up Your Space", description: "Follow our placement guides to arrange items for maximum impact." },
];

const principles = [
  { icon: "🔓", title: "Friction Design", description: "Make good habits easier, bad habits harder" },
  { icon: "👁️", title: "Visual Cues", description: "Put good choices in sight, hide bad ones" },
  { icon: "⚙️", title: "Defaults Matter", description: "Pre-set the right choice so it's automatic" },
  { icon: "🧠", title: "No Willpower Required", description: "Let your environment do the heavy lifting" },
];

const testimonials = [
  { name: "Sarah M.", kit: "Morning Momentum", quote: "I went from snoozing 5 alarms to waking up excited. The kit made mornings feel effortless." },
  { name: "James T.", kit: "Deep Work", quote: "My phone lockbox changed everything. I get more done in 2 hours than I used to in 8." },
  { name: "Priya K.", kit: "Better Sleep", quote: "Blackout curtains + no phone in bedroom = best sleep of my life. So simple." },
];

export default function HomePage() {
  const featuredKits = kits.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Environment Design</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Design Your Environment,{" "}
                <span className="text-gradient">Change Your Life</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Stop relying on willpower. Our science-backed kits reshape your physical space so good habits become automatic.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/kits">
                    Browse Kits <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn the Science</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt="Beautifully arranged habit-forming tools on a wooden surface"
                className="rounded-2xl shadow-2xl w-full"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">How It Works</p>
            <h2 className="font-serif text-3xl md:text-4xl">Three Steps to Better Habits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="text-center p-8 rounded-lg bg-card border animate-fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-5">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Featured</p>
              <h2 className="font-serif text-3xl md:text-4xl">Popular Kits</h2>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link to="/kits">View all <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredKits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">The Science</p>
            <h2 className="font-serif text-3xl md:text-4xl">Why Environment Beats Willpower</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-6 rounded-lg border bg-card text-center card-hover">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-serif text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Success Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl">Real Results, Real People</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-lg border bg-background">
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.kit} Kit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Redesign Your Space?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start with one kit. One small environmental change. Watch your habits transform.
          </p>
          <Button asChild size="lg">
            <Link to="/kits">
              Explore Kits <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
