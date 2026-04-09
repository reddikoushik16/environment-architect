import { useState } from "react";
import { KitCard } from "@/components/KitCard";
import { kits, categories } from "@/data/kits";

export default function BrowseKitsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? kits
    : kits.filter((k) => k.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Browse</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Environment Kits</h1>
        <p className="text-muted-foreground max-w-lg">
          Curated collections of tools designed to reshape your space and build better habits automatically.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((kit) => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No kits found in this category.</p>
      )}
    </div>
  );
}
