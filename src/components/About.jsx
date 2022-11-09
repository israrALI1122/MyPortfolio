import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-signature font-bold inline border-b-4 border-gray-500y'>About</p>

            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dignissimos voluptatibus possimus quia quisquam quaerat, numquam reiciendis iusto quidem soluta deserunt similique consequuntur est unde commodi optio beatae voluptate voluptates sapiente blanditiis aperiam placeat eaque fugit. Officia hic at voluptatem vero atque enim cum deserunt, quas debitis porro eum excepturi.</p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae aspernatur veniam delectus iusto excepturi consectetur harum perferendis quae, sint fuga voluptas provident commodi ut accusamus illo neque autem tempora beatae? Quam minima aspernatur repudiandae quae, cum beatae praesentium iure vero dolorem suscipit corporis asperiores? Corporis, saepe! Quam, eos expedita.
            </p>
        </div>
    </div>
  )
}

export default About