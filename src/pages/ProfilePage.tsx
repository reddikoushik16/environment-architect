import { Link } from "react-router-dom";
import { useProfile } from "@/context/ProfileContext";
import { kits } from "@/data/kits";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Trophy, CheckCircle2, Clock, RotateCcw, ArrowRight } from "lucide-react";

export default function ProfilePage() {
  const {
    profile,
    setName,
    getKitProgress,
    getKitCheckedItems,
    resetKit,
    totalKitsStarted,
    totalItemsChecked,
  } = useProfile();

  const activeKitData = kits.filter((k) => profile.activeKits.includes(k.id));
  const allItemsTotal = kits.reduce((sum, k) => sum + k.items.length, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Profile header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <User className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <Input
              placeholder="Enter your name..."
              value={profile.name}
              onChange={(e) => setName(e.target.value)}
              className="text-lg font-serif border-none shadow-none px-0 focus-visible:ring-0 bg-transparent"
            />
            <p className="text-sm text-muted-foreground">Your progress is saved locally on this device.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-lg border bg-card p-5 text-center">
            <Trophy className="h-5 w-5 text-accent mx-auto mb-2" />
            <p className="font-serif text-2xl">{totalKitsStarted}</p>
            <p className="text-xs text-muted-foreground">Kits Started</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-center">
            <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="font-serif text-2xl">{totalItemsChecked}</p>
            <p className="text-xs text-muted-foreground">Items Gathered</p>
          </div>
          <div className="rounded-lg border bg-card p-5 text-center">
            <Clock className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
            <p className="font-serif text-2xl">{allItemsTotal - totalItemsChecked}</p>
            <p className="text-xs text-muted-foreground">Items Remaining</p>
          </div>
        </div>

        {/* Active kits */}
        <div className="mb-10">
          <h2 className="font-serif text-2xl mb-6">Your Active Kits</h2>
          {activeKitData.length === 0 ? (
            <div className="rounded-lg border bg-card p-8 text-center">
              <p className="text-muted-foreground mb-4">You haven't started any kits yet.</p>
              <Button asChild>
                <Link to="/kits">Browse Kits <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {activeKitData.map((kit) => {
                const progress = getKitProgress(kit.id, kit.items.length);
                const checked = getKitCheckedItems(kit.id);
                const startedDate = profile.startedAt[kit.id];

                return (
                  <div key={kit.id} className="rounded-lg border bg-card p-5">
                    <div className="flex items-start justify-between mb-3">
                      <Link
                        to={`/kits/${kit.id}`}
                        className="flex items-center gap-3 hover:text-primary transition-colors"
                      >
                        <span className="text-2xl">{kit.icon}</span>
                        <div>
                          <h3 className="font-serif text-lg">{kit.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {startedDate && `Started ${new Date(startedDate).toLocaleDateString()}`}
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-center gap-2">
                        {progress === 100 && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">Complete!</Badge>
                        )}
                        <button
                          onClick={() => resetKit(kit.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          title="Reset kit progress"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-10 text-right">{progress}%</span>
                    </div>

                    {/* Checked items */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {kit.items.map((item) => {
                        const done = checked.includes(item.name);
                        return (
                          <span
                            key={item.name}
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              done
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {done && "✓ "}{item.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* All kits overview */}
        <div>
          <h2 className="font-serif text-2xl mb-6">All Kits Overview</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {kits.map((kit) => {
              const progress = getKitProgress(kit.id, kit.items.length);
              const isActive = profile.activeKits.includes(kit.id);
              return (
                <Link
                  key={kit.id}
                  to={`/kits/${kit.id}`}
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 card-hover"
                >
                  <span className="text-xl">{kit.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{kit.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-muted rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-8 text-right">
                        {isActive ? `${progress}%` : "—"}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
