import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { FinderWindow } from "@/components/os/windows/FinderWindow";

export default function FinderPage() {
  return (
    <MobileAppScreen title="Finder — Projects & Work">
      <FinderWindow />
    </MobileAppScreen>
  );
}
