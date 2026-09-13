import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { GamesFolderWindow } from "@/components/os/windows/GamesFolderWindow";

export default function GamesPage() {
  return (
    <MobileAppScreen title="Games">
      <GamesFolderWindow />
    </MobileAppScreen>
  );
}
