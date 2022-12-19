import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-signature font-bold inline border-b-4 border-gray-500y'>About</p>

            </div>
            <p className='text-xl mt-20'>I am passionate about Full Stack Development with MERN Stack in particular. I am a detail-oriented and dedicated fellow whom you can trust with the successful completion of tasks. Utilizing my abilities to the fullest, I am ready to provide value to the organization I will be working with in the near future. Also, I love to code and strive to add business-oriented features and solve problems with a business-oriented mindset in my applications.</p>
            <br/>
           
        </div>
    </div>
  )
}

export default About