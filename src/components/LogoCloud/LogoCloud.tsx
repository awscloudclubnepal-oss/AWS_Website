import Image from "next/image";
import Link from "next/link";
import { SponsorCardProps } from "@/interface/ISponsers";
import { sponsorcardprops } from "@/data/sponsers";
import { communitycardprops } from "@/data/community";

const title_data = sponsorcardprops.slice(0, 2);
const second_level_data = sponsorcardprops.slice(2, 4);
const third_level_data = sponsorcardprops.slice(4, 6);
const normal_partner_data = sponsorcardprops.slice(6, 12);

const LogoClouds = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl space-y-4 sm:space-y-6 mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Sponsors
          </h2>
          <p className="text-sm sm:text-base">
            Meet the supports who made AWS Student Community Day 2025 happen.
          </p>
        </div>
        <div className="w-auto text-center mt-8 sm:mt-10">
          <div>
            <div>
              <div>
                <p className="text-center text-3xl sm:text-4xl lg:text-[38px] font-bold font-sans">
                  TITLE SPONSER
                </p>
                <div className="flex  flex-col sm:flex-row items-center justify-center gap-8">
                  {title_data.map((partner) => (
                    <SponserCard
                      key={partner.id}
                      id={partner.id}
                      title={partner.title}
                      imageUrl={partner.imageUrl}
                      src={partner.src}
                      size={partner.size}
                      font_size={[""]}
                      alttext={partner.alttext}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-col pl-5 sm:flex-row items-center justify-center gap-4">
                  {second_level_data.map((partner) => (
                    <SponserCard
                      key={partner.id}
                      id={partner.id}
                      title={partner.title}
                      imageUrl={partner.imageUrl}
                      src={partner.src}
                      size={partner.size}
                      font_size={partner.font_size}
                      alttext={partner.alttext}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {third_level_data.map((partner) => (
                  <SponserCard
                    key={partner.id}
                    id={partner.id}
                    title={partner.title}
                    imageUrl={partner.imageUrl}
                    src={partner.src}
                    size={partner.size}
                    font_size={partner.font_size}
                    alttext={partner.alttext}
                  />
                ))}
              </div>
            </div>
            <div className="border m-6 border-blue-50"></div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4">
                {normal_partner_data.map((partner) => (
                  <SponserCard
                    key={partner.id}
                    id={partner.id}
                    title={partner.title}
                    imageUrl={partner.imageUrl}
                    src={partner.src}
                    size={partner.size}
                    font_size={partner.font_size}
                    alttext={partner.alttext}
                  />
                ))}
              </div>
            </div>
            <div className="m-8">
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl leading-tight">Community Partners</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-4">
                {communitycardprops.map((partner) => (
                  <SponserCard
                    key={partner.id}
                    id={partner.id}
                    title={partner.title}
                    imageUrl={partner.imageUrl}
                    src={partner.src}
                    size={partner.size}
                    font_size={partner.font_size}
                    alttext={partner.alttext}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;

function SponserCard({
  id,
  title,
  imageUrl,
  src,
  size,
  font_size,
  alttext,
}: SponsorCardProps) {
  const sizeClass = {
    64: "max-w-80",
    60: "max-w-73",
    48: "max-w-66",
    32: "max-w-62",
  }[size];

  const textClass = title === "title" ? "hidden" : font_size.join(" ");

  return (
    <div className="flex aspect-video flex-col text-center items-center justify-center border-0 gap-3 m-3">
      <p
        className={`font-bold text-center tracking-tighter font-sans ${textClass}`}
      >
        {title}
      </p>
      <div>
        <Link href={src} rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={alttext ?? title}
            height={200}
            width={500}
            className={`object-contain h-full ${sizeClass} rounded-lg`}
          />
        </Link>
      </div>
    </div>
  );
}
