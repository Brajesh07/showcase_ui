import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { DocumentsWindow } from "@/components/os/windows/DocumentsWindow";

export default function DocumentsPage() {
  return (
    <MobileAppScreen title="Documents">
      <DocumentsWindow />
    </MobileAppScreen>
  );
}
