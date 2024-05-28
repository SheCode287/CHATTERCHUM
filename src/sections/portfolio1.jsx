import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
function Portfolio1() {
  return (
    <> 
       <div id="section1">
       <h2 className='font-bold text-purple-900 text-6xl m-10'>Learning Activities</h2>
       <p className='text-2xl m-10 bg- '>Offers a variety of interactive learning activities, such as puzzles, quizzes and <br /> games to engage children and enhance their knowledge and skills.</p>
       </div>
       <div className='flex row mt-20 mb-10 flex-wrap'>
            <div className='flex-col'>
              <div style={{marginRight:'0px'}} className='flex row ml-0'>
                  <div className=''><PiNumberCircleOneFill size={80} style={{ fill: '#590E87'}} /></div>
                  <div><div style={{ width: '478px', height:'7px' }} className='bg-purple-900 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:"12px" }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 1: Choose an Activity</h3>
                <p className='text-2xl m-10'>Browse through a collection of <br /> educational activitities and select the <br /> one that interest your child the most.</p>
                        </div>
            </div>

            {/* second div */}
            <div className='flex-col'>
              <div className='flex row'>
                  <div className=''><PiNumberCircleTwoFill size={80} style={{ fill: '#590E87' }} /></div>
                  <div><div style={{ width: '478px' , height:'7px' }} className='bg-purple-900  h-3 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:'12px'  }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 2: Engage and Learn</h3>
                <p className='text-2xl m-10'>Let your child dive into the activity <br /> and start learning in a fun and <br /> interactive way.</p>
                        </div>
            </div>

            {/* third div */}
            <div className='flex-col'>
              <div className='flex row'>
                  <div className=''><PiNumberCircleThreeFill size={80} style={{ fill: '#590E87' }} /></div>
                  <div><div style={{ width: '478px' , height:'7px' }} className='bg-purple-900  h-3 mt-10 pt-0 text-white' >.</div></div>
              </div>
                        
              
                         <div style={{ background: '#FDFDC5', height:'260px', width:'536px', margin:'12px'   }} >
                <h3 className='font-bold text-gray-500 text-4xl m-10'>Step 3: Track Progress</h3>
                <p className='text-2xl m-10'> Monitor your child's progress and <br /> how they are improving their <br />knowledge and skills over time. </p>
                        </div>
            </div>

            
        </div>
        
    </>
  )
}

export default Portfolio1
