import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";

const testimonials = [
   {
      id: 1,
      name: "Viez Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      review:
         "Wow... I am very happy to use this VPN, it turned out to be more than my expectations ",
   },
   {
      id: 2,
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      review:
         "I like it because I like to travel far and still can connect with high speed.",
   },
   {
      id: 3,
      name: "John Doe",
      location: "New York, USA",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      review:
         "This VPN service is fantastic! Super fast and reliable connection, highly recommended!",
   },
];

function Toste() {
   const sliderRef = useRef(null);

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   };

   return (
      <div className="container mx-auto px-4 py-20 relative">
         {/* Prev & Next Buttons */}
         <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute z-50 top-1/2 left-0 transform -translate-y-1/2 bg-[#F53838] text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition"
         >
            <MdKeyboardArrowLeft size={24} />
         </button>

         <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute z-50 top-1/2 right-0 transform -translate-y-1/2 bg-[#F53838] text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition"
         >
            <MdKeyboardArrowRight size={24} />
         </button>

         <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item) => (
               <div key={item.id} className="px-4 sm:px-5 py-12 sm:py-20">
                  <div className="border rounded-lg shadow-md p-6 bg-white hover:border-red-400 transition flex flex-col justify-between h-full">
                     <div className="flex items-center gap-4">
                        <img
                           src={item.image}
                           alt={item.name}
                           className="w-14 h-14 rounded-full"
                        />
                        <div>
                           <h3 className="font-bold text-lg">{item.name}</h3>
                           <p className="text-sm text-gray-500">{item.location}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-1 mt-2 text-orange-500">
                        <span className="text-lg font-semibold">{item.rating}</span>
                        <FaStar />
                     </div>
                     <p className="text-gray-700 mt-4">{item.review}</p>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
}

export default Toste;
