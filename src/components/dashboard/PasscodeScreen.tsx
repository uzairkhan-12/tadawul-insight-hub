import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasscodeScreenProps {
  onSuccess: () => void;
}

const VALID_PASSCODE = "SDB@2026";

const PasscodeScreen = ({ onSuccess }: PasscodeScreenProps) => {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === VALID_PASSCODE) {
      sessionStorage.setItem("dashboard_authenticated", "true");
      onSuccess();
    } else {
      setError(true);
      setPasscode("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              SDB
            </h1>
            <p className="text-muted-foreground mt-2 text-center">
              Competitor Landscape Dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="passcode" className="text-sm font-medium text-foreground">
                Enter Passcode
              </label>
              <div className="relative">
                <Input
                  id="passcode"
                  type={showPasscode ? "text" : "password"}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter passcode to access"
                  className={`pr-10 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="text-sm text-destructive">
                  Invalid passcode. Please try again.
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Access Dashboard
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Protected content. Authorized access only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasscodeScreen;
