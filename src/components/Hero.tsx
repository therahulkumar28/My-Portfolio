import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid"
import Particle from "./Particle"
import TextEffect from "./TextEffect"


const Hero = () => {
    return (
        <div className="h-[88vh] mt-[12vh] bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5vbQyWdIdaK2DSQ0T1OPEwHaE8%26pid%3DApi&f=1&ipt=a0e75f607c1389299df0f8296d7f18513e64c6f84e00fa05180bbd09f302bfb6&ipo=images')] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center"  >
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">HI, I`M
                        <span className="text-yellow-400"> RAHUL !</span>
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-white">
                        I`m Rahul Kumar, studying Computer Science at the National Institute of Technology Durgapur. I enjoy working with computers and figuring out how things work in the digital world.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row  items-center sm:space-x-6">
                        <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem]
                         text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                           <p>Download Cv</p>
                           <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]  text-black " />
                        </button>
                        <button className="flex  items-center space-x-2">
                            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200
                            text-[#55e6a5] "/>
                           <p className="text-[18px] font-semibold text-white">Watch the Video</p>
                        </button>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a6] relative lg:flex items-center rounded-full h-[500px]">
                    <img src="" alt="user" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero