import Image from "next/image";
import bandataglance from "@/assets/images/BANDATAGLANCE.png"
import band from "@/assets/images/download3.png"
//import revolution from "@/assets/images/fd.png"



const Band = ()=>{
    return(
        <div className="items-center justify-center">
            <div className="absolute w-full items-center justify-center right-[-21%]">
                <div className="bg-gray-200 w-[30%] h-[100%] absolute bottom-1 right-[8%]" />
                <Image src={bandataglance} alt="" className="w-[60%]"/>
                <div className="bg-gray-200 w-[30%] h-[100%] absolute bottom-1 right-[102%]" />
            </div>
            <div className="mt-10 md:mt-50 relative">
                    <Image src={band} alt="" className="w-full pt-55" />
                    {/* <Image src={revolution} alt="" className="absolute -bottom-10 md:-bottom-15 left-[50%] translate-x-[-50%] w-full " /> */}
                    <div className="bg-red-600 w-full h-[30%] absolute bottom-0 z-[-1]" />
                  </div>
        </div>
    )
}

export default Band;