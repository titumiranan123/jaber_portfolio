import React from "react";
interface props {
  img: string;
  name: string;
  designation: string;
  description: string;
}
const Testimonialcard: React.FC<props> = ({
  img,
  name,
  designation,
  description,
}) => {
  return (
    <div className="w-[373px] h-[490px] rounded-[24px] bg-[#E7F0D5] hover:bg-[#BACF8C] p-8">
      <div className="flex items-center gap-[20px]">
        <img className="w-16 h-16" src={img} alt="img-1" />
        <div>
          <h1 className="text-[24px] font-[700] ">{name}</h1>
          <p className="text-[20px] font-[600]">{designation}</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="font-[400] poppins lg:text-[20px] lg:leading-[30px] text-[18px] leading-[24.5px]">
          {" "}
          &apos;&apos;
          {description}
          &apos;&apos;
        </p>
      </div>
    </div>
  );
};

export default Testimonialcard;
