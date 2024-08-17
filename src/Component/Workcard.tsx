import React from 'react';

const Workcard:React.FC = ({work1}) => {
    return (
        <div className="w-[1280px] h-[525px] flex items-center justify-between p-10 rounded-[20px] bg-[#BACF8C] ">
            <div>
            <img className="w-[508px] h-[381px]" src={work1} alt="work1" />
            </div>
            <div className="flex w-[552px] flex-col gap-2">
                <h1 className="poppins font-bold text-[20px]">Lorem ipsum dolor sit amet, consectetur adlplsing elit. Curabltur feugiat leo sit amet egestas viverra.</h1>
                <p>I am a passionate UI/UX designer with a knack for turning concepts into seamless digital experiences. Armed with akeen eye for aesthetics.</p>
                <div className="flex items-center gap-10 mt-5">
                    <button className="py-2 px-4 bg-slate-600"> VIEW CASE STUDY </button>
                    <button className="py-2 px-4 bg-slate-600">LIVE SITE</button>
                </div>
            </div>
          </div>
    );
};

export default Workcard;