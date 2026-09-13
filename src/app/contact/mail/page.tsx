import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { MailComposeWindow } from "@/components/os/windows/MailComposeWindow";

export default function MailPage() {
  return (
    <MobileAppScreen title="Mail">
      <MailComposeWindow />
    </MobileAppScreen>
  );
}
