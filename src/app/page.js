import Services from "@/components/Services";
import Media from "@/components/Media";
import Cases from "@/components/Cases";
import Discuss from "@/components/Discuss";
import Stages from "@/components/Stages";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
  <div>
      <Services/>
      {/* ********** */}
      <Media/>
      {/* ********** */}
      <Cases/>
      {/* ********** */}
      <Discuss/>
      {/* ********** */}
      <Stages/>
      {/* ********** */}
      <Team/>
      {/* ********** */}
      <Faq/>
      {/* ********** */}
      <Contacts/>
  </div>
  );
}
