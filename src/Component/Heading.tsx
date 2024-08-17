import React from 'react';
interface prop{
    title:string
}
const Heading:React.FC<prop> = ({title}) => {
    return (
        <div className='poppins text-center text-[64px] font-[600] leading-[96px] text-[#A1AD77]'>
            {title}
        </div>
    );
};

export default Heading;