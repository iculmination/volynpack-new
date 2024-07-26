import AdBlock from "@/components/blocks/ad-block";
import DescriptionBlock from "@/components/blocks/description-block";
import DescriptionSecondBlock from "@/components/blocks/description-second-block";
import FormBlock from "@/components/blocks/form-block";
import MobileReviewsBlock from "@/components/blocks/mobile-reviews-block";
import MobileSheetBlock from "@/components/blocks/mobile-sheet-block";
import ReviewsBlock from "@/components/blocks/reviews-block";
import SheetBlock from "@/components/blocks/sheet-block";
import SocialBlock from "@/components/blocks/social-block";
import WelcomeBlock from "@/components/blocks/welcome-block";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-20 lg:pt-0">
      <WelcomeBlock />
      <DescriptionBlock />
      <AdBlock />
      <SheetBlock />
      <MobileSheetBlock />
      <DescriptionSecondBlock />
      <ReviewsBlock />
      <MobileReviewsBlock />
      <FormBlock />
      <SocialBlock />
    </main>
  );
}
