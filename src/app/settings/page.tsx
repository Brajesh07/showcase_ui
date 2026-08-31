import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { SettingsWindow } from "@/components/os/windows/SettingsWindow";

export default function SettingsPage() {
  return (
    <MobileAppScreen title="Settings">
      <SettingsWindow />
    </MobileAppScreen>
  );
}
