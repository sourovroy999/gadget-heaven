import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-200  md:pb-44">
        <div className="bg-[#9538E2] space-y-3 h-fit mx-auto pb-8 text-white text-center flex-grow">
          <h1 className="text-3xl pt-3">Dashboard</h1>

          <p className="p-4 md:w-2xl lg:w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

            <div className="flex justify-center  gap-6 text-white">
            <button class="btn rounded-3xl w-32 md:w-40  btn-outline text-white hover:bg-white hover:text-[#9538e2] hover:font-bold">Cart</button>
            <button class="btn rounded-3xl w-32 md:w-40 btn-outline text-white hover:bg-white hover:text-[#9538e2] hover:font-bold">Wish List</button>

            </div>
        </div>
        <p className="thickPurple">hii</p>

      </div>
    </>
  );
};

export default Dashboard;
