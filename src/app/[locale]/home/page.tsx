import Header2 from "@/components/extra";
import Hero from "@/components/Home/Hero";
import Perks from "@/components/Home/perks";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import TimeLine from "@/components/Home/timeline";
import Upgrade from "@/components/Home/upgrade";
import Work from "@/components/Home/work";
import React from "react";
// import Hero from "@/components/Home/Hero";
// import Work from "@/components/Home/work";
// import TimeLine from "@/components/Home/timeline";
// import Platform from "@/components/Home/platform";
// import Portfolio from "@/components/Home/portfolio";
// import Upgrade from "@/components/Home/upgrade";
// import Perks from "@/components/Home/perks";

// import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';
// export const metadata: Metadata = {
//   title: "BemorUz",
// };

export default function Home() {
  // const t = useTranslations('');

  return (
    <div>
      {/* <h1>{t('title')}</h1> */}

     <Header2/>
     <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
    </div>
  );
}