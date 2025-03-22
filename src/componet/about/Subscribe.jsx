function Subscribe() {
   return (
      <>
         <div className="container mx-auto py-16 sm:py-28">
            <div className="py-16 sm:py-20 bg-white rounded-2xl shadow-2xl px-8 sm:px-16 flex flex-col sm:flex-row items-center justify-between">

               {/* Text Section */}
               <div className="text-center sm:text-left sm:w-1/2">
                  <h3 className="text-3xl sm:text-5xl font-medium">
                     Subscribe Now for <br /> Get Special Features!
                  </h3>
                  <p className="py-4 text-lg sm:text-xl text-gray-600">
                     Let's subscribe with us and find the fun.
                  </p>
               </div>

               {/* Button Section */}
               <div className="mt-6 sm:mt-0">
                  <button className="py-[12px] bg-[#F53855] shadow-2xl shadow-[#F53855] text-white hover:bg-[#F53855] hover:text-white font-bold px-12 rounded-lg border border-[#F53855]">
                     Subscribe Now
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Subscribe;
