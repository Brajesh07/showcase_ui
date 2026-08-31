import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { ContactWindow } from "@/components/os/windows/ContactWindow";

export default function ContactPage() {
  return (
    <MobileAppScreen title="Contact">
      <ContactWindow />
    </MobileAppScreen>
  );
}
