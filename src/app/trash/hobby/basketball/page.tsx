import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { HobbyImageWindow } from "@/components/os/windows/HobbyImageWindow";

export default function BasketballPage() {
  return (
    <MobileAppScreen title="basketball.PNG">
      <HobbyImageWindow slug="basketball" />
    </MobileAppScreen>
  );
}
