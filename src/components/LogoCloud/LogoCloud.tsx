import Image from "next/image";
const LogoClouds = () => {
  return (
    <div className="py-10 flex items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-xl space-y-4 sm:space-y-6 mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Sponsors</h2>
          <p className="text-sm sm:text-base">
            Meet the supports who made AWS Student Community Day 2025 happen.
          </p>
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-10 max-w-screen-lg">
            <Image 
              src="/aws.png" 
              alt="AWS Logo" 
              width={200} 
              height={200} 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
