import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, TrendingUp, ExternalLink, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getKitById } from "@/data/kits";

export default function KitDetailPage() {
  const { id } = useParams();
  const kit = getKitById(id || "");

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

        {/* Price card */}
        <div className="rounded-lg border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Kit Cost</p>
          <p className="font-serif text-3xl mb-4">${kit.totalCost}</p>
          <p className="text-xs text-muted-foreground mb-6">{kit.items.length} items · Individual links below</p>
          <Button className="w-full mb-3" size="lg">
            Get This Kit <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground text-center">Links to recommended retailers</p>
        </div>
      </div>

      {/* Items */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">What's Included</h2>
        <div className="space-y-4">
          {kit.items.map((item, i) => (
            <div
              key={item.name}
              className="rounded-lg border bg-card p-5 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.purpose}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold shrink-0">${item.price}</span>
              </div>
              <div className="ml-8 mt-3 flex items-start gap-2 p-3 rounded-md bg-primary/5">
                <Lightbulb className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-primary mb-0.5">Why This Works</p>
                  <p className="text-xs text-muted-foreground">{item.behavioralPrinciple}</p>
                </div>
              </div>
            </div>
          ))}
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
