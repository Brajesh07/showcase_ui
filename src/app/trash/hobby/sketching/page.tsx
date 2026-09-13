import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { HobbyImageWindow } from "@/components/os/windows/HobbyImageWindow";

export default function SketchingPage() {
  return (
    <MobileAppScreen title="sketch.PNG">
      <HobbyImageWindow slug="sketching" />
    </MobileAppScreen>
  );
}
