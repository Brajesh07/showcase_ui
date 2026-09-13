import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { TrashWindow } from "@/components/os/windows/TrashWindow";

export default function TrashPage() {
  return (
    <MobileAppScreen title="Trash">
      <TrashWindow />
    </MobileAppScreen>
  );
}
