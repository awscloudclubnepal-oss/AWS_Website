import Image from "next/image";
const LogoClouds = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-24 xl:py-32 flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Sponsors</h2>
          <p className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base md:text-lg">
            Meet the supports who made AWS Student Community Day 2025 happen.
          </p>
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#a166e8]">Powered By</h2>
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-10 max-w-screen-lg">
            <Image 
              src="/aws.png"  
              alt="AWS Logo" 
              width={150} 
              height={150}
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
