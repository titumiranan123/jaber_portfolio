import React from "react";
interface prop {
  title: string;
}
const Heading: React.FC<prop> = ({ title }) => {
  return (
    <div className="poppins text-center lg:text-[64px] text-[24px] font-[600] lg:leading-[96px] leading-[36px] text-white">
      {title}
    </div>
  );
};

export default Heading;
