import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-serif text-lg mb-3">
              <Leaf className="h-5 w-5 text-primary" />
              <span>HabitKit</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Design your environment, change your life. Science-backed kits that make good habits automatic.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm mb-3">Explore</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/kits" className="hover:text-primary transition-colors">Browse Kits</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-sm mb-3">Principles</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Friction Design</span>
              <span>Visual Cues</span>
              <span>Defaults Matter</span>
              <span>No Willpower Required</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} HabitKit. Your environment is your biggest advocate.
        </div>
      </div>
    </footer>
  );
}
