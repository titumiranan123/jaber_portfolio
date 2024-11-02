import React from 'react';
interface props{
    work1:string
}
import arrow from "./../assets/arrow.png"
import arrow1 from "./../assets/arrow1.png"

const Workcard:React.FC<props> = ({work1}) => {
    return (
        <div className="w-[1200px] h-[430px] flex items-center justify-between py-[32px] px-[30px] rounded-[36px] bg-[#fff]  gap-[62px]">
            <img className="" src={work1} alt="work1" />
            <div className="flex w-[552px] flex-col gap-2">
                <h1 className="poppins font-[600] text-[24px]">Lorem ipsum dolor sit amet, consectetur adlplsing elit. Curabltur feugiat leo sit amet egestas viverra.</h1>
                <p className='poppins font-[400] text-[20px]'>I am a passionate UI/UX designer with a knack for turning concepts into seamless digital experiences. Armed with akeen eye for aesthetics.</p>
                <div className="flex items-center gap-10 mt-5">
                    <button className="py-4 px-7 bg-[#2C4250] text-white rounded-[12px] h-[68px] w-[302px] flex items-center poppins gap-2 text-[20px] font-[600] justify-center"> VIEW CASE STUDY <img className='w-[36px] h-[36px]' src={arrow} alt="case study" /> </button>
                    <button className="py-4 px-7 border-[#2C4250] border  text-[#2C4250] rounded-[12px] h-[68px] w-[193px] flex items-center poppins gap-3 text-[20px] font-[600] justify-center ">LIVE SITE <img className='w-[36px] h-[36px]' src={arrow1} alt="case study" /></button>
                </div>
            </div>
          </div>
    );
};

export default Workcard;