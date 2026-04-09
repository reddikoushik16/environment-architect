import { BookOpen, Heart, Users } from "lucide-react";

const researchers = [
  { name: "James Clear", work: "Atomic Habits", insight: "Small changes in environment lead to remarkable results over time." },
  { name: "BJ Fogg", work: "Tiny Habits", insight: "Make it easy. Reduce friction for desired behaviors to near zero." },
  { name: "Brian Wansink", work: "Slim by Design", insight: "Your kitchen layout predicts your eating habits better than willpower." },
  { name: "Wendy Wood", work: "Good Habits, Bad Habits", insight: "43% of daily behaviors are automatic, driven by environment, not intention." },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Our Mission</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-6">
          Better Habits Through Better Spaces
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          We believe environment design is the most overlooked — and most powerful — tool for behavior change. HabitKit makes it simple to transform your physical space so good habits become the path of least resistance.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, label: "Research-Backed", desc: "Every kit grounded in behavioral science" },
            { icon: Heart, label: "No Willpower", desc: "Your environment does the work for you" },
            { icon: Users, label: "Community Tested", desc: "Thousands of real success stories" },
          ].map((v) => (
            <div key={v.label} className="p-5 rounded-lg border bg-card text-center">
              <v.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <h3 className="font-serif text-lg mb-1">{v.label}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl mb-6">The Science Behind HabitKit</h2>
        <div className="space-y-4 mb-12">
          {researchers.map((r) => (
            <div key={r.name} className="p-5 rounded-lg border bg-card">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-medium">{r.name}</h3>
                <span className="text-sm text-muted-foreground italic">— {r.work}</span>
              </div>
              <p className="text-sm text-muted-foreground">"{r.insight}"</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <p className="font-serif text-xl mb-2">Your environment is your biggest advocate.</p>
          <p className="text-sm text-muted-foreground">Start with one kit. One small change. Watch what happens.</p>
        </div>
      </div>
    </div>
  );
}
