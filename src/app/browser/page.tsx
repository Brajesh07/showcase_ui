import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { BrowserWindow } from "@/components/os/windows/BrowserWindow";

export default function BrowserPage() {
  return (
    <MobileAppScreen title="Browser" flush>
      <BrowserWindow />
    </MobileAppScreen>
  );
}
