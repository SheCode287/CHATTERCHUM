import React from 'react'

function Contactus() {
  return (
    <>
  <div  id='contacts' style={{backgroundColor:'#FDFDC5'}} className='maindiv flex flex-row alignItems-center justify-evenly p-10 m-10 '>
    <div style={{backgroundColor:'#FDFDC5'}} className=' contacts  flex flex-col h-40 '>
            <div className=' header mt-20  mb-30 font-extrabold text-purple-900 text-6xl '><h3>Contact Us</h3></div>
            <div className=' container flex flex-row justify-around m-8'>
              <div className='mr-8'>
                  <h5 className='font-semibold text-gray-400 text-xl '>Email</h5>
                  <a href="#">support@chatterchum.com</a>
              </div>
              <div className='ml-8'>
                  <h5 className='font-semibold text-gray-400 text-xl'> Phone</h5>
                  <a href="#">+1 123-456-7890</a>
              </div>
              <div className='ml-8'>
                  <h5 className='font-semibold text-gray-400 text-xl'>Address</h5>
                  <p>123 Main Street, City, State, Country</p>
              </div>
            </div>
    
    </div>
    
    
    
    <div className='form'>
      
    <form className='bg-gray-100 grid grid-cols-2 gap-2 p-8 rounded-md'>
    <h3 className='font-extrabold text-4xl text-purple-800 col-span-2'>Get in Touch</h3>
    <div  className='col-span-2 flex flex-wrap ' >
      <label className='w-1/2 font-semibold'>
        Name:
        <input type="text" name="name" placeholder='John' className='w-full border rounded-sm p-2 ' />
      </label>
    
      <label className='w-1/2 font-semibold'>
        Surname:
        <input type="text" name="surname" className='w-full border rounded-sm p-2 ' />
      </label>
    </div>
    
      <label className='col-span-2 font-semibold'>
        Mail:
        <input type="email" name="email" placeholder='johndoe@gmail.com 'className='w-full border rounded-sm p-2' />
      </label>
    
      <label className='col-span-2 font-semibold'>
        Address
        <input type="address" name="address" placeholder='Capital, WA' className='w-full border rounded-sm p-2' />
      </label>
    
    
      <label className='col-span-2 font-semibold'>
        Description:
        <textarea name="message" className='w-full border rounded-md p-4' />
      </label>
    
    <button type="submit" className='bg-purple-900 font-bold text-white font-bold py-4 px-4 col-span-2 rounded-md'>Submit</button>
    </form>
     
    
    </div>

  </div>

 
    





     
      






     





      
    </>
  )
}

export default Contactus
