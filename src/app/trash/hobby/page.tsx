import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { HobbyFolderWindow } from "@/components/os/windows/HobbyFolderWindow";

export default function HobbyPage() {
  return (
    <MobileAppScreen title="Hobby">
      <HobbyFolderWindow />
    </MobileAppScreen>
  );
}
