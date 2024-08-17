import React from 'react';
import Heading from './Heading';

const About:React.FC = () => {
    return (
        <div className=' h-screen '>
            <div className='max-w-[1240px] mx-auto mt-[64px]'>
            <Heading title={"About"} />
            <div className='text-white font-[400] poppins text-[20px] leading-[30px]'>
                <p>I am a UI/UX Designer with the expertise of brand identity designa and video editing. Throughout my design journey I have created seamless and engaging user experiences. I am highly concerned about providing user-centric design solutions and meeting business goals.
                </p> <br />
                <p>My expertise lies in user & competitor research, interaction design, wireframing, user interface design, prototyping, testing, as well as cross-functional collaboration with project manager, developers and stakeholders. I have a thorough understanding of lean-agile methodologies to quickly build the MVP (Minimum Viable Product).
                </p> <br />
                <p>I always love learning about new trends in UI/UX design, tools and keeping myself updated. </p>
            </div>
        </div>
        </div>
    );
};

export default About;