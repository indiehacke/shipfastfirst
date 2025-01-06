// import Image from "next/image";
// import TestimonialsAvatars from "./TestimonialsAvatars";
// import config from "@/config";
// import lead_png from "@/public/image/AIGirl.png"

// const Hero = () => {
//   return (
//     <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
//       <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">


//         <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
//         Unravel the Legends: Wukong Chat Explains the Mysteries of Black Myth and Journey to the West
//         </h1>
//         <p className="text-lg opacity-80 leading-relaxed">
//         Fine-tune GPT with Wukong Chat to unlock real-time insights into Black Myth and Journey to the West, enhancing your gaming experience
//         </p>
//         <button className="btn btn-primary btn-wide">
//           Get {config.appName}
//         </button>

//         <TestimonialsAvatars priority={true} />
//       </div>
//       <div className="lg:w-full">
//         <Image
//           src={lead_png}
//           alt="Black Myth: Wukong Chat"
//           className="w-full"
//           priority={true}
//           width={500}
//           height={500}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


'use client';

import Image from "next/image";
import {useTranslations} from 'next-intl';
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import lead_png from "@/public/image/zillow.png"

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
      {/* <a href="https://theresanaiforthat.com/ai/ai-pattern/?ref=featured&v=1423950" target="_blank" rel="nofollow"><img width="300" src="https://media.theresanaiforthat.com/featured-on-taaft.png?width=600"/></a> */}
        
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          {t('title')}
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          {t('description')}
        </p>
        <a href="#pricing">
          <button className="btn btn-primary btn-wide">
            {t('getButton', { appName: config.appName })}
          </button>
        </a>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={lead_png}
          alt={t('imageAlt')}
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
