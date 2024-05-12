import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import p1 from '../assets/p1.jpg'
const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
        <h1 className="heading">
            My <span className="text-yellow-400" >BLOG</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto ">
        <div>
                <div className="w-[100%] relative h-[400px] ">
                    <img src={p1} alt="blog" className='object-cover' />
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09100a] relative  p-[1rem] 
                mt-[-1rem] ">
                        <div className=' px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] 
                            text-black font-semibold text-[18px] mx-auto' >
                            DECEMBER 10 , 2022
                        </div>
                        <div className='flex flex-col  item-center justify-between mt-[1rem] space-x-4'>
                            <div className='flex items-center  space-x-10'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto text-[#55e6a5] ' />
                                <p className='text-white'>By Rahul</p>
                            </div>
                            <div className='flex items-center jusitify-between space-x-3 '>
                                <ChatBubbleLeftRightIcon  className='w-[1.5rem] mx-auto text-[#55e6a5] '/>
                                <p className='text-white'>Comments (2)</p>
                            </div>
                        </div>
                                <p className=' flex font-semibold justify-center items-center  text-[18px] mt-[1rem] text-white'>Full Stack Developer</p>
                    </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px] ">
                    <img src={p1} alt="blog" className='object-cover' />
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09100a] relative  p-[1rem] 
                mt-[-1rem] ">
                        <div className=' px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] 
                            text-black font-semibold text-[18px] mx-auto' >
                            DECEMBER 10 , 2022
                        </div>
                        <div className='flex flex-col  item-center justify-between mt-[1rem] space-x-4'>
                            <div className='flex items-center  space-x-10'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto text-[#55e6a5] ' />
                                <p className='text-white'>By Rahul</p>
                            </div>
                            <div className='flex items-center jusitify-between space-x-3 '>
                                <ChatBubbleLeftRightIcon  className='w-[1.5rem] mx-auto text-[#55e6a5] '/>
                                <p className='text-white'>Comments (2)</p>
                            </div>
                        </div>
                                <p className=' flex font-semibold justify-center items-center  text-[18px] mt-[1rem] text-white'>Full Stack Developer</p>
                    </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px] ">
                    <img src={p1} alt="blog" className='object-cover' />
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09100a] relative  p-[1rem] 
                mt-[-1rem] ">
                        <div className=' px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] 
                            text-black font-semibold text-[18px] mx-auto' >
                            DECEMBER 10 , 2022
                        </div>
                        <div className='flex flex-col  item-center justify-between mt-[1rem] space-x-4'>
                            <div className='flex items-center  space-x-10'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto text-[#55e6a5] ' />
                                <p className='text-white'>By Rahul</p>
                            </div>
                            <div className='flex items-center jusitify-between space-x-3 '>
                                <ChatBubbleLeftRightIcon  className='w-[1.5rem] mx-auto text-[#55e6a5] '/>
                                <p className='text-white'>Comments (2)</p>
                            </div>
                        </div>
                                <p className=' flex font-semibold justify-center items-center  text-[18px] mt-[1rem] text-white'>Full Stack Developer</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Blog