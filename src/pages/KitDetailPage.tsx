import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, TrendingUp, CheckCircle2, Lightbulb, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getKitById } from "@/data/kits";
import { useState } from "react";

export default function KitDetailPage() {
  const { id } = useParams();
  const kit = getKitById(id || "");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  if (!kit) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl mb-4">Kit not found</h1>
        <Button asChild variant="outline">
          <Link to="/kits"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Kits</Link>
        </Button>
      </div>
    );
  }

  const toggleItem = (name: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const progress = kit.items.length > 0
    ? Math.round((checkedItems.size / kit.items.length) * 100)
    : 0;

  const handleCopyList = () => {
    const text = kit.items.map((item) => `• ${item.name} — ${item.purpose}`).join("\n");
    navigator.clipboard.writeText(`${kit.name}\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/kits"><ArrowLeft className="mr-2 h-4 w-4" /> All Kits</Link>
      </Button>

      {/* Header */}
      <div className="grid lg:grid-cols-3 gap-10 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{kit.icon}</span>
            <Badge variant="secondary">{kit.category}</Badge>
            <Badge variant="outline">{kit.difficulty}</Badge>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl mb-4">{kit.name}</h1>
          <p className="text-muted-foreground text-lg mb-6">{kit.description}</p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {kit.setupTime} setup</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {kit.userCount.toLocaleString()} users</span>
            <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4" /> {kit.successRate}% success rate</span>
          </div>
        </div>

        {/* Progress card */}
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Your Progress</p>
          <p className="font-serif text-3xl mb-2">{progress}%</p>
          <div className="w-full bg-muted rounded-full h-2 mb-3">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mb-6">
            {checkedItems.size} of {kit.items.length} items checked off
          </p>
          <Button onClick={handleCopyList} variant="outline" className="w-full" size="sm">
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Copy Item List"}
          </Button>
        </div>
      </div>

      {/* Items */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">What You'll Need</h2>
        <div className="space-y-4">
          {kit.items.map((item, i) => {
            const isChecked = checkedItems.has(item.name);
            return (
              <div
                key={item.name}
                className={`rounded-lg border p-5 animate-fade-in cursor-pointer transition-colors ${
                  isChecked ? "bg-primary/5 border-primary/30" : "bg-card"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => toggleItem(item.name)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 mt-0.5 shrink-0 transition-colors ${
                        isChecked ? "text-primary" : "text-muted-foreground/30"
                      }`}
                    />
                    <div>
                      <h3 className={`font-medium ${isChecked ? "line-through text-muted-foreground" : ""}`}>
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.purpose}</p>
                    </div>
                  </div>
                </div>
                <div className="ml-8 mt-3 flex items-start gap-2 p-3 rounded-md bg-primary/5">
                  <Lightbulb className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-primary mb-0.5">Why This Works</p>
                    <p className="text-xs text-muted-foreground">{item.behavioralPrinciple}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research */}
      <section className="rounded-lg border bg-card p-6 mb-12">
        <h2 className="font-serif text-xl mb-3">Research Backing</h2>
        <p className="text-sm text-muted-foreground">{kit.researchBacking}</p>
      </section>
    </div>
  );
}
