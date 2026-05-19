// import logo from "../../assets/logo.png";
// import Image from "next/image";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
// import { Sedgwick_Ave_Display } from "next/font/google";

// const sedgwick = Sedgwick_Ave_Display({
//   subsets: ["latin"],
//   weight: ["400"],
// })
// const Footer = () => {
//   const locationInfo =
//     "https://www.google.com/maps/place/Cooch+Behar+Government+Engineering+College/data=!4m2!3m1!1s0x0:0xe4952b5891bb2389?sa=X&ved=1t:2428&ictx=111";

//   return (
//     <footer className="bg-#242424 text-#DEDEDE py-3 px-2 sm:py-4 sm:px-3 border-t border-gray-200">
//       <div className="container mx-auto">
//         {/* Main Footer Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8">
//           {/* Logo and Title Section */}
//           <div className="flex flex-col items-center md:items-start gap-2">
//             <Image
//               src={logo}
//               alt="Esperanza Logo"
//               width={80}
//               height={80}
//               className="object-contain w-16 sm:w-20"
//             />
//             <div className="text-center md:text-left">
//               <div
//                 className="font-bold text-#DEDEDE"
//                 style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 800,
//                   fontSize: '1.5rem', // 24px
//                   lineHeight: '1.2'
//                 }}
//               >
//                 ESPERANZA'25
//               </div>
//               <div
//                 className="font-bold text-#DEDEDE"
//                 style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 800,
//                   fontSize: '1rem', // 16px
//                   lineHeight: '1.2'
//                 }}
//               >
//                 © Esperanza CGEC
//               </div>
//             </div>
//           </div>

//           {/* About Us Section */}
//           <div className="text-center md:text-left">
//             <h3
//               className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
//               style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 800,
//                 fontSize: '0.875rem', // 14px
//                 lineHeight: '1.2'
//               }}
//             >
//               ABOUT US
//             </h3>
//             <ul className="space-y-0.5">
//               <li className="text-xs sm:text-sm text-#DEDEDE">Teams Committee</li>
//             </ul>
//           </div>

//           {/* Address Section */}
//           <div className="text-center md:text-left">
//             <h3
//               className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
//               style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 800,
//                 fontSize: '0.875rem', // 14px
//                 lineHeight: '1.2'
//               }}
//             >
//               ADDRESS
//             </h3>
//             <address className="text-xs sm:text-sm text-#DEDEDE not-italic">
//               <a
//                 href={locationInfo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 Cooch Behar Government Engineering College
//                 <br /> Vill-Harinchowrah, P.O- Ghughumari
//                 <br /> Dist-Cooch Behar, West Bengal, PIN-736170
//               </a>
//             </address>
//           </div>

//           {/* Social Media Section */}
//           <div className="text-center md:text-left">
//             <h3
//               className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
//               style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 800,
//                 fontSize: '0.875rem', // 14px
//                 lineHeight: '1.2'
//               }}
//             >
//               SOCIAL
//             </h3>
//             <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
//               <a
//                 href="https://www.facebook.com/esperanza.cgec"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-#DEDEDE hover:text-blue-600 transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
//               </a>
//               <a
//                 href="https://www.instagram.com/esperanza_cgec/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-#DEDEDE hover:text-pink-600 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/esperanza-cgec/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-#DEDEDE hover:text-blue-700 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import logo from "../../assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Sedgwick_Ave_Display } from "next/font/google";
import Link from "next/link";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  const locationInfo =
    "https://www.google.com/maps/place/Cooch+Behar+Government+Engineering+College/data=!4m2!3m1!1s0x0:0xe4952b5891bb2389?sa=X&ved=1t:2428&ictx=111";

  return (
    <footer className="bg-black text-[#DEDEDE] py-3 px-2 sm:py-4 sm:px-3 border-t border-gray-200 relative z-10">
      <div className="container mx-auto">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={logo}
              alt="Esperanza Logo"
              width={80}
              height={80}
              className="object-contain w-16 sm:w-20"
            />
            <div className="text-center md:text-left">
              <div
                className="font-bold text-#DEDEDE"
                style={{
                  fontFamily: sedgwick.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                ESPERANZA'25
              </div>
              <div
                className="font-bold text-#DEDEDE"
                style={{
                  fontFamily: sedgwick.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: "1.2",
                }}
              >
                © Esperanza CGEC
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="text-center md:text-left">
            <h3
              className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
              style={{
                fontFamily: sedgwick.style.fontFamily,
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "1.2",
              }}
            >
              ABOUT US
            </h3>
            <ul className="space-y-0.5">
              <Link
                href={"/terms-condition/t&c.pdf"}
                className="text-xs sm:text-sm text-#DEDEDE"
                style={{ fontFamily: sedgwick.style.fontFamily }}
              >
                Terms & Conditions
              </Link>
              <br />
              <Link
                href={"/developers"}
                className="text-xs sm:text-sm text-#DEDEDE text-red-400 font-bold animate-pulse"
                style={{ fontFamily: sedgwick.style.fontFamily }}
              >
                Meet Our Developers
              </Link>
            </ul>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h3
              className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
              style={{
                fontFamily: sedgwick.style.fontFamily,
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "1.2",
              }}
            >
              ADDRESS
            </h3>
            <address
              className="text-xs sm:text-sm text-#DEDEDE not-italic"
              style={{ fontFamily: sedgwick.style.fontFamily }}
            >
              <a
                href={locationInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Cooch Behar Government Engineering College
                <br /> Vill-Harinchowrah, P.O- Ghughumari
                <br /> Dist-Cooch Behar, West Bengal, PIN-736170
              </a>
            </address>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3
              className="font-semibold mb-1 sm:mb-2 text-#DEDEDE underline"
              style={{
                fontFamily: sedgwick.style.fontFamily,
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: "1.2",
              }}
            >
              SOCIAL
            </h3>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/esperanza.cgec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#DEDEDE hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/esperanza_cgec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#DEDEDE hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/esperanza-cgec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#DEDEDE hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex justify-center items-center ${sedgwick.className} flex-col gap-2`}>
        <div>
          Made With {" "}
          <span className="text-red-500">&#x2764;</span>
          {" "}by Next JS
        </div>
        <div>
          Esperanza 2k25 | All Right Reserved 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
