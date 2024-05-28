import chatterImg1 from "../assets/Chatter img1.svg";


function Welcome() {
  return (
    <>
    <div className=" flex  flex-row items-center justify-evenly  mt-20 mb-10 ">
        <div className="">
            <h1 className="text-7xl font-bold text-purple-900 mt-20">WELCOME TO <br /> CHATTERCHUMS</h1>
         </div>
         <div className="">
             <img src={chatterImg1} alt="Chatter Welcome Image" className="w-305 h-auto space-x-20" />
         </div>
    </div>

    <button className=" text-4m bg-purple-800 text-white font-semibold  h-39 w-48 ml-80 p-4" type="primary">Start exploring</button>
    </>
  )
}

export default Welcome
