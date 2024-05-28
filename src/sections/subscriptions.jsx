

function Subscriptions() {
  return (
    <>
      
      <div className='flex col mt-20 mb-10 flex-wrap items-center justify-center '>
            
       <div style={{background: '#FDFDC5', margin:'60px', width:'98%'}}>
           <h2 className='font-extrabold text-purple-900 text-6xl m-10'>Subscription Plans</h2>
           <p className='text-2xl m-10 '>The app has different subscription plans for accessing premium content <br /> and additional features, providing options for users to choose the <br /> plans that suits their needs.</p>
       </div>          
              
            <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'186px', width:'417px', borderRadius:'14px', margin:"4px", padding:'14px', gap:'16px' }} >
              
        
                  <div>
                    <h5 className='font-extrabold text-purple-900 text-5xl m-2'>Basic Plan</h5>
                    <p className='text-2xl m-4'>Unlock limited access to premium content and features</p>
                  </div>

             </div>


            <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'186px', width:'417px', borderRadius:'14px', margin:"4px", padding:'14px', gap:'16px' }} >
              
        
                  <div>
                    <h5 className='font-extrabold text-purple-900 text-5xl m-2'>Standard Plan</h5>
                    <p className='text-2xl m-2'>Get Full acess to premium content and features.</p>
                  </div>

             </div>
            <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'186px', width:'417px', borderRadius:'14px', margin:"4px", padding:'14px', gap:'16px' }} >
              
        
                  <div>
                    <h5 className='font-extrabold text-purple-900 text-5xl m-2'>Premium Plan</h5>
                    <p className='text-2xl m-2'>Emjoy exclusive acess to premium content and features</p>
                  </div>

             </div>
            <div style={{ display:'flex', flexDirection:'row', background: '#FDFDC5', height:'186px', width:'417px', borderRadius:'14px', margin:"4px", padding:'14px', gap:'16px' }} >
              
        
                  <div>
                    <h5 className='font-extrabold text-purple-900 text-5xl m-2'>Family Plan</h5>
                    <p className='text-2xl m-2'>Share the app with your family members and enjoy premium content and features together.</p>
                  </div>

             </div>


            


        </div>
    </>
  )
}

export default Subscriptions
