import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

function Footer() {
   return (
      <footer className="container mx-auto py-16 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">

            {/* Logo & About */}
            <div className="flex flex-col gap-6">
               <div className="flex items-center justify-center md:justify-start gap-3">
                  <img className="w-8 h-8" src="/Vector.png" alt="Logo" />
                  <h3 className="text-2xl font-semibold">LaslesVPN</h3>
               </div>
               <p className="text-gray-500 text-lg">
                  LaslesVPN is a private virtual network that has unique features and high security.
               </p>

               {/* Social Icons */}
               <div className="flex justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-white bg-red-500 rounded-full shadow-lg">
                     <FaFacebookF />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-white bg-red-500 rounded-full shadow-lg">
                     <IoLogoTwitter />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-white bg-red-500 rounded-full shadow-lg">
                     <FaAddressCard />
                  </div>
               </div>

               <h2 className="text-gray-500 text-md">©2020 LaslesVPN</h2>
            </div>

            {/* Product Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Product</h3>
               <ul className="flex flex-col gap-2 text-gray-500 font-medium">
                  <li>Download</li>
                  <li>Pricing</li>
                  <li>Locations</li>
                  <li>Server</li>
                  <li>Countries</li>
                  <li>Blog</li>
               </ul>
            </div>

            {/* Engage Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Engage</h3>
               <ul className="flex flex-col gap-2 text-gray-500 font-medium">
                  <li>LaslesVPN?</li>
                  <li>FAQ</li>
                  <li>Tutorials</li>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
               </ul>
            </div>

            {/* Earn Money Section */}
            <div>
               <h3 className="text-xl font-semibold mb-4">Earn Money</h3>
               <ul className="flex flex-col gap-2 text-gray-500 font-medium">
                  <li>Become Partner</li>
                  <li>Affiliate</li>
               </ul>
            </div>

         </div>
      </footer>
   );
}

export default Footer;
