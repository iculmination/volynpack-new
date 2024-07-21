import AdBlock from "@/components/blocks/ad-block";
import DescriptionBlock from "@/components/blocks/description-block";
import DescriptionSecondBlock from "@/components/blocks/description-second-block";
import SheetBlock from "@/components/blocks/sheet-block";
import WelcomeBlock from "@/components/blocks/welcome-block";

export default function Home() {
  return (
    <main>
      <WelcomeBlock />
      <DescriptionBlock />
      <AdBlock />
      <SheetBlock />
      <DescriptionSecondBlock />
    </main>
  );
}
