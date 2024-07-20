import AdBlock from "@/components/blocks/ad-block";
import DescriptionBlock from "@/components/blocks/description-block";
import WelcomeBlock from "@/components/blocks/welcome-block";

export default function Home() {
  return (
    <main>
      <WelcomeBlock />
      <DescriptionBlock />
      <AdBlock />
    </main>
  );
}
