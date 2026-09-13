import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { MusicPlayerWindow } from "@/components/os/windows/MusicPlayerWindow";

export default function MusicPage() {
  return (
    <MobileAppScreen title="Music">
      <MusicPlayerWindow />
    </MobileAppScreen>
  );
}
