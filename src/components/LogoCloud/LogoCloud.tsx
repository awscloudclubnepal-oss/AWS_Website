import Image from "next/image"
import Link from "next/link"
import { SponsorCardProps } from "@/interface/ISponsers"
import { sponsorcardprops } from "@/data/sponsers"


const title_data = sponsorcardprops[0]
const second_level_data = sponsorcardprops.slice(1,3)
const normal_partner_data = sponsorcardprops.slice(3,5)




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
              <div className="flex items-center justify-center">
                <SponserCard
                  id ={title_data.id}
                  title={title_data.title}
                  imageUrl={title_data.imageUrl}
                   src = {title_data.src}
                  alttext={title_data.imageUrl}
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {second_level_data.map( (partner) => (
                <SponserCard 
                key ={partner.id}
                id={partner.id}
                title = {partner.title}
                imageUrl = {partner.imageUrl}
                 src = {partner.src}
                alttext ={partner.alttext}
                />
              ))}  
              </div>
            </div>
            <div className="border m-6 border-blue-50"></div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {normal_partner_data.map( (partner) => (
                <SponserCard 
                key ={partner.id}
                id={partner.id}
                title = {partner.title}
                imageUrl = {partner.imageUrl}
                src = {partner.src}
                alttext ={partner.alttext}
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

function SponserCard({ id, title,imageUrl,src, alttext }:SponsorCardProps) {
  return (
    <>
      <div className="flex aspect-video flex-col text-center items-center justify-center border-0 gap-3 m-3">
        <div className=" border border-[#ecb45b] rounded-lg p-2">
          <p>{title}</p>
        </div>
        <div>
          <Link href={src} rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt={alttext ?? title}
            height={200}
            width={500}  
            className="object-contain h-full max-w-48"
          />
            </Link>
        </div>
      </div>
    </>
  );
}
