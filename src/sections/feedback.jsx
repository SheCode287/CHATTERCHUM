import { PiNumberCircleOneFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";

function Feedback() {
  return (
    <>
      

      <div id="testimonials">
       <h2 className='font-bold text-purple-900 text-6xl m-10'>What People Are Saying</h2>
       <p className='text-2xl m-10 bg- '> We value your feedback and strive to provide the best experience for your <br /> child. Here re some testimoials from our users.</p>
       </div>

       <div className='flex row mt-20 mb-10 flex-wrap items-center justify-center '>
            
                        
              
              <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'256px', width:'552px', borderRadius:'14px', margin:"4px", padding:'12px', gap:'16px' }} >
                
                    <div className='mt-o'><FaCircle size={60} style={{ fill: '#590E87'}} /></div>
          
                    <div>
                      <h5 className='font-bold text-purple-800 text-2xl m-2'>Emily Johnson</h5>
                      <p className='text-2xl m-2'> My daughter loves using this app! It's engaging and educational at the same time. She has learned so much since she started using it.</p>
                    </div>

               </div>


              <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'256px', width:'552px', borderRadius:'14px', margin:"4px", padding:'12px', gap:'16px' }} >

                    <div className='mt-o'><FaCircle size={60} style={{ fill: '#590E87'}} /></div>
          
                    <div>
                      <h5 className='font-bold text-purple-800 text-2xl m-2'>Michael Jackson</h5>
                      <p className='text-2xl m-2'>I highly recommend this app to all parents and teachers. It has a wide range of educational activities that are both fun and interactive. My students have shown great improvement in their learning</p>
                    </div>

               </div>

            
              <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'256px', width:'542px', borderRadius:'14px', margin:"4px", padding:'12px', gap:'16px' }} >

                    <div className='mt-o'><FaCircle size={60} style={{ fill: '#590E87'}} /></div>
          
                    <div>
                      <h5 className='font-bold text-purple-800 text-2xl m-2'>Beyonce Carter</h5>
                      <p className='text-2xl m-2'> I am amazed by the quality of this app. The content is well-designed and age-appropriate. It keeps my son entertained while he learns new concepts. Thank you for creating such a wonderful educational tool!</p>
                    </div>

              </div>


              <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'256px', width:'542px', borderRadius:'14px', margin:"4px", padding:'12px', gap:'16px' }} >

                    <div className='mt-o'><FaCircle size={60} style={{ fill: '#590E87'}} /></div>
          
                    <div>
                      <h5 className='font-bold text-purple-800 text-2xl m-2'>Idris Elba</h5>
                      <p className='text-2xl m-2'> The support team is excellent! They are always prompt in addressing any issues or concerns. I appreciate their dedication to providing a smooth user experience.</p>
                    </div>

              </div>


              <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'256px', width:'542px', borderRadius:'14px', margin:"4px", padding:'12px', gap:'16px' }} >

                    <div className='mt-o'><FaCircle size={60} style={{ fill: '#590E87'}} /></div>
          
                    <div>
                      <h5 className='font-bold text-purple-800 text-2xl m-2'>Mark Zuckerberg</h5>
                      <p className='text-2xl m-2'> This app has been a game-changer for my child's learning journey. The interactive lessons and quizzes have made learning enjoyable for him. I can see his progress and confidence growing every day.</p>
                    </div>

              </div>
            

            

            
        

            
        

        </div>


     
      
    </>
  )
}

export default Feedback
