import { MobileAppScreen } from "@/components/os/MobileAppScreen";
import { SocialPreviewCard } from "@/components/os/SocialPreviewCard";

export default function InstagramPage() {
  return (
    <MobileAppScreen title="Instagram" flush>
      <SocialPreviewCard id="instagram" />
    </MobileAppScreen>
  );
}
