import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { OsNavLink } from "@/components/os/OsNavLink";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <MobileAppScreen title="Not found">
      <p className="text-body">That screen does not exist.</p>
      <div className="mt-6">
        <Button asChild>
          <OsNavLink href="/">Back to Home</OsNavLink>
        </Button>
      </div>
    </MobileAppScreen>
  );
}
