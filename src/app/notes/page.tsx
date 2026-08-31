import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { NotesWindow } from "@/components/os/windows/NotesWindow";

export default function NotesPage() {
  return (
    <MobileAppScreen title="Notes">
      <NotesWindow />
    </MobileAppScreen>
  );
}
