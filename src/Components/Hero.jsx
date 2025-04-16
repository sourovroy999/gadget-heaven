import React from 'react';
import bannerImg from '../assets/banner.jpg'

const Hero = () => {
    return (
        <>
        <div className="hero text-white bg-[#9538E2] pt-6  pb-36">
  <div className="hero-content text-center">
    <div className="max-w-6xl space-y-">
      <h1 className="text-3xl md:text-5xl font-bold ">Upgrade Your Tech Accessorize with <br/> Gadget Heaven Accessories</h1>
      <p className="py-6 max-w-2xl mx-auto">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-primary rounded-3xl bg-white text-[#9538E2]">Shop Now</button>
    </div>
  </div>

 
</div>
<img className='sm:w-[300px] md:w-xl lg:w-3xl md:h-[400px] outline-2 rounded-xl outline-white outline-offset-[16px]  object-cover  mx-auto -mt-28' src={bannerImg} alt="" />
</>


    );
};

export default Hero;