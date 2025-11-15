"use client";
import { useEffect , useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function SponserUs() {
  const { theme , resolvedTheme } = useTheme();
  const [mounted ,setMounted ] = useState(false);
  useEffect(()=> setMounted(true),[]);

  const isDark = mounted ? (theme === "dark" || resolvedTheme === "dark"):false;
  
  const logo1 = isDark ? "/TU_AWSlogo_White.png":"/TU_AWSlogo_Blue.png";
  const logo2 = isDark ? "/AWS_SCD_2025_black_bg.png":"/AWS_SCD_2025_white_bg.png"; 
  
  return (
    <div className=" w-full bg-transparent  text-center px-8 pt-8 mx-8 mt-8">
      <div className="flex justify-center items-center mb-8">
      <div className="flex justify-center items-center gap-2  px-4 w-1/2">
        <div className="border-transparent">
          <Image
            src={logo1}
           width={300}
           height={80}
            alt="aws logo "
            className="h-full w-[300px]"
          />
        </div>
        <div className={`border-l-[1px] ${isDark ? "border-white":"border-black"} mx-2`}>
          <Image 
            src={logo2}
            width={300}
            height={80}            
            alt="aws-scd-logo"
            className="h-full w-[300px]"
          />
        </div>
      </div>
      </div>
      <div className="text-center flex justify-center items-center">
        <h1 className="mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight xl:[line-height:1.125]">
          BE THE SPONSER
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-center sm:items-center">

        <Button
          size="lg"
          className="text-white sm:w-auto text-sm sm:text-base bg-[#a166e8]"
          asChild
        >
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXtkoxGfT_CmEzBIxDF9GPogq2qHUTzbWBhmW7WALSTwtv4Q/viewform"
          >
            Sponser Form 
          </Link>
        </Button>
        <Button
          size="lg"
          className="text-white w-auto text-sm sm:text-base bg-[#a166e8]"
          asChild
        >
          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1NYBFC4a5FEacg2jV05ql-RazmTWR41N4"
          >
           Download Bronchure
          </Link>
        </Button>
        <Button
          size="lg"
          className="text-white sm:w-auto text-sm sm:text-base bg-[#a166e8]"
          asChild
        >
          <Link
            target="_blank"
            href="https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/events/310674609/"
          >
            Event Details
          </Link>
        </Button>
      </div>
      <div className="px-6 pt-6 text-center flex justify-center items-center">
        <p className="max-[418px]:flex max-[418px]:flex-col">
          Email us:
          <span>
            <a href="mailto:awscloudclub.tu@gmail.com">
              awscloudclub.tu@gmail.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SponserUs;