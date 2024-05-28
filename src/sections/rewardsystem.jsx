import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";

function Rewardsystem() {
  return (
    <>
      
      <div>
       <h2 className='font-bold text-purple-900 text-6xl m-10'>Reward System</h2>
       <p className='text-2xl m-10 bg- '> Motivates children to continue learning by implementing a reward system, <br /> where they canearn badges or points for completing activities and achieving <br /> milestones.</p>
       </div>
       <div className='flex row mt-20 mb-10 flex-wrap'>
            <div className='flex-col'>
              <div style={{marginRight:'0px'}} className='flex row ml-0'>
                  <div className=''><PiNumberCircleOneFill size={80} style={{ fill: '#590E87'}} /></div>
                  <div><div style={{ width: '478px', height:'7px' }} className='bg-purple-900 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:"12px" }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 1: Engage in Fun <br />Activities</h3>
                <p className='text-2xl m-10'>Children can engage in a variety of<br /> fun and educational activities, such as <br /> puzzles, and interactive lessons.</p>
                        </div>
            </div>

            {/* second div */}
            <div className='flex-col'>
              <div className='flex row'>
                  <div className=''><PiNumberCircleTwoFill size={80} style={{ fill: '#590E87' }} /></div>
                  <div><div style={{ width: '478px' , height:'7px' }} className='bg-purple-900  h-3 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:'12px'  }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 2: Earn Badges and <br /> Points</h3>
                <p className='text-2xl m-10'> By completing activities and achieving <br /> mileststones, children can earn badges <br /> and points to track their progress and <br /> accomplishments.</p>
                        </div>
            </div>

            {/* third div */}
            <div className='flex-col'>
              <div className='flex row'>
                  <div className=''><PiNumberCircleThreeFill size={80} style={{ fill: '#590E87' }} /></div>
                  <div><div style={{ width: '478px' , height:'7px' }} className='bg-purple-900  h-3 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:'12px'   }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 3: Unlock Rewards</h3>
                <p className='text-2xl m-10'> As children accumulate badges and <br /> points, they can unlock exciting <br /> rewards, such as new levels, virtual <br /> items , or special privileges. </p>
                        </div>
            </div>

            
        </div>
        





    </>
  )
}

export default Rewardsystem
