"use client";
import Image from "next/image";
import e2 from "@/assets/images/e1.png";
import s2 from "@/assets/images/s1.png";
import p2 from "@/assets/images/p1.png";
import e3 from "@/assets/images/e4.png";
import r2 from "@/assets/images/r1.png";
import pyramid2 from "@/assets/images/pyramid1.png";
import n2 from "@/assets/images/n1.png";
import z2 from "@/assets/images/z1.png";
import a2 from "@/assets/images/a1.png";
import k25 from "@/assets/images/k251.png";

const EspAnimation = () => {
    return (
        <div className="flex items-center front">
            <div className="flex items-center box-border ">

                <span className="letter"><Image src={e2} alt="" /></span>
                <span className="letter"><Image src={s2} alt="" /></span>
                <span className="letter"><Image src={p2} alt="" /></span>
                <span className="letter"><Image src={e3} alt="" /></span>
                <span className="letter"><Image src={r2} alt="" /></span>
                <span className="letter"><Image src={pyramid2} alt="" /></span>
                <span className="letter"><Image src={n2} alt="" /></span>
                <span className="letter"><Image src={z2} alt="" /></span>
                <span className="letter"><Image src={a2} alt="" /></span>
                <span className="letter"><Image src={k25} alt="" /></span>
            </div>
            <style jsx>{`
        .letter{
            width: auto;
            height: max-content;
            position: relative;
            }
        .front span{
	text-shadow: #f22d2d 1px 0vh 10px;
	margin:4px;
	animation: amin 6.6s linear infinite;
}
@keyframes amin{
	0%{
		opacity: 1;
        
	}
	50%{
		opacity: 0;
       
	}
	100%{
		opacity: 1;
        
	}
}
            .front span:nth-child(1){
                animation-delay: 0.6s;
            }
.front span:nth-child(2){
  animation-delay: 1.2s;
  
}
.front span:nth-child(3){
  animation-delay: 1.8s;
  
}
.front span:nth-child(4){
  animation-delay: 2.4s;
  
}
.front span:nth-child(5){
  animation-delay: 3.0s;
  
}
.front span:nth-child(6){
  animation-delay: 3.6s;
  
}
.front span:nth-child(7){
  animation-delay: 4.2s;
  
}
.front span:nth-child(8){
  animation-delay: 4.8s;
  
}
.front span:nth-child(9){
  animation-delay: 5.4s;
  
}
  .front span:nth-child(10){
  animation-delay: 6s;
  
}

.front:hover{
	cursor:pointer;
}
.front span:hover{
	animation: step-end;
}
        `}</style>
        </div>
    )
}

export default EspAnimation;