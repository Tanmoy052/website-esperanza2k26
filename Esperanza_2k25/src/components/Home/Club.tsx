import Image from 'next/image';
import img1 from '@/assets/clubs/capture.png';
import img2 from '@/assets/clubs/creativepen.png';
import img3 from '@/assets/clubs/gdsc.png';
import img4 from '@/assets/clubs/dance.png';
import img5 from '@/assets/clubs/debate.png';
import img6 from '@/assets/clubs/game.png';
import img7 from '@/assets/clubs/doubthub.jpg';
import img8 from '@/assets/clubs/melody.png';
import img9 from '@/assets/clubs/pep.png';
import img10 from '@/assets/clubs/quilaxy.png';
import img11 from '@/assets/clubs/rongmilanti.png';
import img12 from '@/assets/clubs/sports.png';
import img13 from '@/assets/clubs/techonicks.png';
import img14 from '@/assets/clubs/theatre.png';
import img15 from '@/assets/clubs/ct.png';
import ourclubs from '@/assets/clubs/OURCLUBS.png';
import ellipse8 from "@/assets/images/Ellipse8.png";

const ClubGrid = () => {
    return (
      <div className="min-h-screen flex items-center justify-center overflow-x-hidden">

      <div>
      <Image 
          src={ellipse8}
          alt=""
          width={700}
          className='absolute z-[-1] left-[10%] md:left-[60%]'
          />
      </div>
        <div className="absolute w-[60%] items-center justify-center ">
                <div className="bg-gray-200 w-[60%] h-[100%] absolute bottom-1 right-[-65%] md:right-[-40%]" />
                <Image src={ourclubs} alt="" className="w-[100%] md:w-[50%] ml-2 md:ml-30 lg:ml-60"/>
                <div className="bg-gray-200 w-[60%] h-[100%] absolute bottom-1 right-[100%] md:right-[80%] " />
            </div>

        <div className="absolute w-[800px] h-[800px] mx-auto
                        scale-[0.4] sm:scale-[0.5] md:scale-[0.8] lg:scale-100
                        mt-140 md:mt-300 ">

<a href="https://www.instagram.com/cgec_capture_crew?igsh=YzVyN3hsNzh6dmJx" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[50px] left-[180px]
                border-[1.5px] border-cyan-300/20 rounded-[8px]
                hover:border-cyan-300/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                active:shadow-[0_0_30px_rgba(103,232,249,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-cyan-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img1} 
    alt="Tech Portal" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Cyan gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,145,178,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-cyan-100 to-cyan-300 bg-clip-text text-transparent">
      Freezing moments and memories through the lens of passion.
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-cyan-200/40 transition-all duration-1000" />

  {/* Cyan corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-cyan-300/0 group-hover:border-cyan-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-cyan-300/0 group-hover:border-cyan-300/50
                 transition-all duration-500 delay-100" />

  {/* Cyan particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-cyan-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-cyan-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>


<a href="https://www.instagram.com/creativepenscgec?igsh=cWlweG13dGNzNXBo" target="_blank" rel="noopener noreferrer">
          <div className="relative w-[100px] h-[100px] top-[50px] left-[290px] 
                border-[1.5px] border-red-300/20 rounded-[8px] 
                hover:border-red-300/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]
                active:shadow-[0_0_30px_rgba(248,113,113,0.6)]
                hover:scale-[1.6] hover:z-[2] transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)] 
                overflow-hidden group cursor-pointer shadow-xl shadow-red-900/20
                will-change-transform katibeh-regular">
  
  
  <Image 
    src={img2} 
    alt="Technical Workshop Card" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-600 ease-out 
               group-hover:scale-[1.5] group-hover:brightness-[0.85]" 
    priority
  />
  
  
  <div className="absolute inset-0 
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(136,19,55,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
  
  <div className="absolute inset-0 flex items-center justify-center p-3 
                 translate-y-3 opacity-0 
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-[13px] leading-tight font-medium text-center 
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-red-100 to-red-300 bg-clip-text text-transparent">
      Letting imaginations run wild through words, poetry, and storytelling.
    </p>
  </div>
  
 
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0 
                 group-hover:border-white/30 transition-all duration-1000" />
  
  
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px] 
                 border-red-300/0 group-hover:border-red-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px] 
                 border-red-300/0 group-hover:border-red-300/50
                 transition-all duration-500 delay-100" />
  
  
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-red-400/80 
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-red-300/60 
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.linkedin.com/company/gdsc-cgec/" target="_blank" rel="noopener noreferrer">
<div className="absolute w-[210px] h-[200px] top-[165px] left-[180px] 
                border-[3px] border-emerald-300/20 rounded-[8px] 
                hover:border-emerald-300/60 hover:shadow-[0_0_20px_rgba(110,231,183,0.4)]
                active:shadow-[0_0_30px_rgba(167,243,208,0.6)]
                hover:scale-[1.2] hover:z-[2] transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)] 
                overflow-hidden group cursor-pointer shadow-xl shadow-emerald-900/20
                will-change-transform katibeh-regular">

  <Image 
    src={img3} 
    alt="Technical Demo Card" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-600 ease-out 
               group-hover:scale-[1.3] group-hover:brightness-[0.85]" 
    priority
  />
  
  <div className="absolute inset-0 
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,150,105,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
  <div className="absolute inset-0 flex items-center justify-center p-3 
                 translate-y-3 opacity-0 
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-[15px] leading-tight font-medium text-center 
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-emerald-100 to-emerald-300 bg-clip-text text-transparent">
      Empowering students to grow and innovate through real-world tech solutions.
    </p>
  </div>
  
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0 
                 group-hover:border-white/30 transition-all duration-1000" />
  <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] 
                 border-emerald-300/0 group-hover:border-emerald-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] 
                 border-emerald-300/0 group-hover:border-emerald-300/50
                 transition-all duration-500 delay-100" />
  
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400/80 
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-300/60 
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/nrityanirvana.cgec?igsh=MWRhdjdienBza2I5bA%3D%3D" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[375px] left-[180px]
                border-[1.5px] border-pink-300/20 rounded-[8px]
                hover:border-pink-300/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
                active:shadow-[0_0_30px_rgba(249,168,212,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-pink-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img4} 
    alt="Design Hub" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Pink gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(190,24,93,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-pink-100 to-pink-300 bg-clip-text text-transparent">
      Expressing emotions through graceful moves and vibrant dance forms
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-pink-200/40 transition-all duration-1000" />

  
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-pink-300/0 group-hover:border-pink-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-pink-300/0 group-hover:border-pink-300/50
                 transition-all duration-500 delay-100" />

  
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-pink-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-pink-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/cgecdebateclub?igsh=MWd0djFpcDY2YnJrOQ%3D%3D" target="_blank" rel="noopener noreferrer">
<div className="absolute w-[100px] h-[100px] top-[580px] left-[399px]
                border-[1.5px] border-blue-300/20 rounded-[8px]
                hover:border-blue-300/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                active:shadow-[0_0_30px_rgba(147,197,253,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-blue-900/20
                will-change-transform z-[1] katibeh-regular">

  
  <Image 
    src={img5} 
    alt="Tech Portal" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    gorup-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Blue gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(29,78,216,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
      Sharpening minds with the art of argument, logic, and reasoning
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-blue-200/40 transition-all duration-1000" />

  {/* Blue corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-blue-300/0 group-hover:border-blue-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-blue-300/0 group-hover:border-blue-300/50
                 transition-all duration-500 delay-100" />

  {/* Blue particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-blue-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>


<a href="https://www.instagram.com/gamers_creed_cgec_?igsh=MTdwZWdsZXliOXhnZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[470px] left-[510px]
                border-[1.5px] border-amber-300/20 rounded-[8px]
                hover:border-amber-300/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]
                active:shadow-[0_0_30px_rgba(252,211,77,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-amber-900/20
                will-change-transform z-[1] katibeh-regular">

  
  <Image 
    src={img6} 
    alt="Creative Studio" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Amber gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(146,64,14,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-amber-100 to-amber-300 bg-clip-text text-transparent">
      Uniting gaming enthusiasts for epic virtual battles and strategy showdowns
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-amber-200/40 transition-all duration-1000" />

  {/* Amber corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-amber-300/0 group-hover:border-amber-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-amber-300/0 group-hover:border-amber-300/50
                 transition-all duration-500 delay-100" />

  {/* Amber particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-amber-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-amber-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>


<a href="https://www.linkedin.com/company/cgec-doubthub/" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[200px] h-[200px] top-[376px] left-[300px]
                border-[1.5px] border-indigo-300/20 rounded-[10px]
                hover:border-indigo-300/60 hover:shadow-[0_0_25px_rgba(129,140,248,0.5)]
                active:shadow-[0_0_35px_rgba(165,180,252,0.7)]
                hover:scale-[1.2] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-indigo-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img7} 
    alt="Digital Studio" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[8px] transition-all duration-500 ease-out
    group-hover:scale-[1.4]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Indigo gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(67,56,202,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-4
                 translate-y-4 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-sm font-medium text-center
                 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-indigo-100 to-indigo-300 bg-clip-text text-transparent">
      A collaborative space where queries meet clarity and concepts become crystal clear
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[8px] border-[1.5px] border-white/0
                 group-hover:border-indigo-200/40 transition-all duration-1000" />

  {/* Indigo corner accents */}
  <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px]
                 border-indigo-300/0 group-hover:border-indigo-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px]
                 border-indigo-300/0 group-hover:border-indigo-300/50
                 transition-all duration-500 delay-100" />

  {/* Indigo particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-indigo-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-indigo-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>


<a href="https://www.instagram.com/melodies_of_cgec?igsh=OHAwbjByZ3l1ejIz" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[165px] left-[70px]
                border-[1.5px] border-teal-300/20 rounded-[8px]
                hover:border-teal-300/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]
                active:shadow-[0_0_30px_rgba(94,234,212,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-teal-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img8} 
    alt="Tech Lab" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Teal gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(15,118,110,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-teal-100 to-teal-300 bg-clip-text text-transparent">
      Weaving magic with music, one soulful note at a time
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-teal-200/40 transition-all duration-1000" />

  {/* Teal corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-teal-300/0 group-hover:border-teal-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-teal-300/0 group-hover:border-teal-300/50
                 transition-all duration-500 delay-100" />

  {/* Teal particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-teal-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-teal-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/cgec_pep_talks?igsh=MXg4YWhmdXA3c3kwNw%3D%3D" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[270px] left-[70px]
                border-[1.5px] border-fuchsia-300/20 rounded-[8px]
                hover:border-fuchsia-300/60 hover:shadow-[0_0_20px_rgba(232,121,249,0.5)]
                active:shadow-[0_0_30px_rgba(240,171,252,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-fuchsia-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img9} 
    alt="Design Studio" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Fuchsia gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(162,28,175,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-fuchsia-100 to-fuchsia-300 bg-clip-text text-transparent">
      Igniting minds through powerful speeches and thought-provoking discussions
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-fuchsia-200/40 transition-all duration-1000" />

  {/* Fuchsia corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-fuchsia-300/0 group-hover:border-fuchsia-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-fuchsia-300/0 group-hover:border-fuchsia-300/50
                 transition-all duration-500 delay-100" />

  {/* Fuchsia particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-fuchsia-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-fuchsia-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/quilaxycgec?igsh=MXNoMGF3YjR4anl5aA%3D%3D" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[200px] h-[200px] top-[260px] left-[510px]
                border-[1.5px] border-sky-300/20 rounded-[10px]
                hover:border-sky-300/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                active:shadow-[0_0_35px_rgba(125,211,252,0.7)]
                hover:scale-[1.2] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-sky-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img10} 
    alt="Innovation Lab" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[8px] transition-all duration-500 ease-out
    group-hover:scale-[1.3]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Sky gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,105,161,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-4
                 translate-y-4 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-sm font-medium text-center
                 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-sky-100 to-sky-300 bg-clip-text text-transparent">
      Exploring the cosmos of quizzing with curiosity and quick wit
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[8px] border-[1.5px] border-white/0
                 group-hover:border-sky-200/40 transition-all duration-1000" />

  {/* Sky corner accents */}
  <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px]
                 border-sky-300/0 group-hover:border-sky-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px]
                 border-sky-300/0 group-hover:border-sky-300/50
                 transition-all duration-500 delay-100" />

  {/* Sky particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-sky-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-sky-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/rongmilanti2024?igsh=MWk5ajNnZzNmdzhkMA%3D%3D" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[165px] left-[400px]
                border-[1.5px] border-rose-300/20 rounded-[8px]
                hover:border-rose-300/60 hover:shadow-[0_0_20px_rgba(251,113,133,0.5)]
                active:shadow-[0_0_30px_rgba(253,164,175,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-rose-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img11} 
    alt="Creative Hub" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Rose gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(190,18,60,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-rose-100 to-rose-300 bg-clip-text text-transparent">
      Celebrating diversity and creativity through colorful cultural fusions
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-rose-200/40 transition-all duration-1000" />

  {/* Rose corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-rose-300/0 group-hover:border-rose-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-rose-300/0 group-hover:border-rose-300/50
                 transition-all duration-500 delay-100" />

  {/* Rose particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-rose-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-rose-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/cgec_sport_club?igsh=MzRrdWdjNGU5N2ps" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[270px] left-[400px]
                border-[1.5px] border-lime-300/20 rounded-[8px]
                hover:border-lime-300/60 hover:shadow-[0_0_20px_rgba(190,242,100,0.5)]
                active:shadow-[0_0_30px_rgba(217,249,157,0.7)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-lime-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with brightness control */}
  <Image 
    src={img12} 
    alt="Eco Tech" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-500 ease-out
    group-hover:scale-[1.6]
               group-hover:brightness-[0.95]" 
  />

  {/* Lime gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(63,98,18,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-lime-100 to-lime-300 bg-clip-text text-transparent">
      Fueling passion, discipline, and teamwork through thrilling games and athletic spirit
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-lime-200/40 transition-all duration-1000" />

  {/* Lime corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-lime-300/0 group-hover:border-lime-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-lime-300/0 group-hover:border-lime-300/50
                 transition-all duration-500 delay-100" />

  {/* Lime particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-lime-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-lime-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.linkedin.com/company/techonicks/" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[200px] h-[200px] top-[50px] left-[510px]
                border-[1.5px] border-violet-300/20 rounded-[10px]
                hover:border-violet-300/60 hover:shadow-[0_0_25px_rgba(167,139,250,0.5)]
                active:shadow-[0_0_35px_rgba(196,181,253,0.7)]
                hover:scale-[1.2] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-violet-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with subtle brightness transition */}
  <Image 
    src={img13} 
    alt="Creative Lab" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[8px] transition-all duration-500 ease-out
              group-hover:scale-[1.3]
               group-hover:brightness-[0.95]" 
    priority
  />

  {/* Violet gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(109,40,217,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-4
                 translate-y-4 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-sm font-medium text-center
                 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-violet-100 to-violet-300 bg-clip-text text-transparent">
      Driving innovation and technical brilliance through teamwork and technical extravaganzas
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[8px] border-[1.5px] border-white/0
                 group-hover:border-violet-200/40 transition-all duration-1000" />

  {/* Violet corner accents */}
  <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px]
                 border-violet-300/0 group-hover:border-violet-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px]
                 border-violet-300/0 group-hover:border-violet-300/50
                 transition-all duration-500 delay-100" />

  {/* Violet particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-violet-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-violet-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/pratibimba.official__cgec?igsh=YzdxYzdxZ3ljdGpr" target="_blank" rel="noopener noreferrer">
                    <div className="absolute w-[100px] h-[100px] top-[150px] left-[720px]
                border-[1.5px] border-yellow-300/20 rounded-[8px]
                hover:border-yellow-300/60 hover:shadow-[0_0_20px_rgba(253,224,71,0.4)]
                active:shadow-[0_0_30px_rgba(254,249,195,0.6)]
                hover:scale-[1.6] hover:z-[2]
                transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-yellow-900/20
                will-change-transform z-[1] katibeh-regular">

  {/* Image with dual scaling */}
  <div className="w-full h-full scale-100 group-hover:scale-[0.714] /* 1/1.4 */
                 transition-transform duration-600 ease-out">
    <Image 
      src={img14} 
      alt="Innovation Card" 
      layout="fill" 
      objectFit="cover" 
      className="rounded-[6px] transition-all duration-500 ease-out
                 group-hover:scale-[1.6] /* Additional image zoom */
                 group-hover:brightness-[1]" 
      priority
    />
  </div>

  {/* Golden gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(180,83,9,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  mix-blend-overlay" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-yellow-100 to-yellow-300 bg-clip-text text-transparent">
      Bringing stories to life with powerful performances and theatrical excellence
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-yellow-200/40 transition-all duration-1000" />

  {/* Gold corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-yellow-300/0 group-hover:border-yellow-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-yellow-300/0 group-hover:border-yellow-300/50
                 transition-all duration-500 delay-100" />

  {/* Gold particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-yellow-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-yellow-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>

<a href="https://www.instagram.com/the_cgec_times?igsh=cnBrcGVmNzRxYWt6" target="_blank" rel="noopener noreferrer">
          <div className="absolute w-[100px] h-[100px] top-[260px] left-[720px]
                border-[1.5px] border-green-300/20 rounded-[8px]
                hover:border-green-300/60 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]
                active:shadow-[0_0_30px_rgba(134,239,172,0.6)]
                hover:scale-[1.6] hover:z-2 transition-all duration-450 ease-[cubic-bezier(0.33,1,0.68,1)]
                overflow-hidden group cursor-pointer shadow-xl shadow-green-900/20
                will-change-transform katibeh-regular">

  {/* Image with optimized transitions */}
  <Image 
    src={img15} 
    alt="Eco Tech Card" 
    layout="fill" 
    objectFit="cover" 
    className="rounded-[6px] transition-all duration-600 ease-out
               group-hover:scale-[1.5] group-hover:brightness-[1]" 
    priority
  />

  {/* Green gradient overlay */}
  <div className="absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(22,101,52,0.7)_120%)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center justify-center p-2
                 translate-y-3 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-550 ease-[cubic-bezier(0.64,0,0.78,0)]">
    <p className="text-white text-xs font-medium text-center
                 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide
                 bg-gradient-to-r from-green-100 to-green-300 bg-clip-text text-transparent">
      The heartbeat of campus news, capturing every moment, voice, and vibe of CGEC
    </p>
  </div>

  {/* Animated border */}
  <div className="absolute inset-0 rounded-[6px] border-[1px] border-white/0
                 group-hover:border-white/30 transition-all duration-1000" />

  {/* Green corner accents */}
  <div className="absolute top-0 right-0 w-2 h-2 border-t-[1px] border-r-[1px]
                 border-green-300/0 group-hover:border-green-300/50
                 transition-all duration-500 delay-100" />
  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1px] border-l-[1px]
                 border-green-300/0 group-hover:border-green-300/50
                 transition-all duration-500 delay-100" />

  {/* Green particle effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-green-400/80
                   animate-float" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-green-300/60
                   animate-float delay-200" />
  </div>
</div>
</a>
        </div>
        
      </div>
    );
};

export default ClubGrid;