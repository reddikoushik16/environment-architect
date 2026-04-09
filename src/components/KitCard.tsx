import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Kit } from "@/data/kits";

interface KitCardProps {
  kit: Kit;
}

export function KitCard({ kit }: KitCardProps) {
  return (
    <Link
      to={`/kits/${kit.id}`}
      className="group block rounded-lg border bg-card p-6 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{kit.icon}</span>
        <Badge variant="secondary" className="text-xs">
          {kit.difficulty}
        </Badge>
      </div>

      <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">
        {kit.name}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {kit.shortDescription}
      </p>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {kit.setupTime}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" /> {kit.userCount.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3" /> {kit.successRate}%
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">${kit.totalCost}</span>
        <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          View Kit <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}
