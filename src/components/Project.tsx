import p1 from '../assets/p1.jpg'

const Project = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:-[8rem] pb-[1rem]">
        <h1 className="heading">
            Pro<span className="text-yellow-400">Ject</span>
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-[2.5rem] ">
            <div>
                <div className="transform cursor-pointer hover:-translate-y-6 transtion-all duration-200 
                relative w-[100%] h-[200px] md:h-[300ox] ">
                    <img  src={p1} alt="portfolio"  className="object-contain" />
                </div>
            </div>
            <div>
                <div className="transform cursor-pointer hover:-translate-y-6 transtion-all duration-200 
                relative w-[100%] h-[200px] md:h-[300ox] ">
                    <img  src={p1} alt="portfolio"  className="object-contain" />
                </div>
            </div>
            <div>
                <div className="transform cursor-pointer hover:-translate-y-6 transtion-all duration-200 
                relative w-[100%] h-[200px] md:h-[300ox] ">
                    <img  src={p1} alt="portfolio"  className="object-contain" />
                </div>
            </div>
            <div>
                <div className="transform cursor-pointer hover:-translate-y-6 transtion-all duration-200 
                relative w-[100%] h-[200px] md:h-[300ox] ">
                    <img  src={p1} alt="portfolio"  className="object-contain" />
                </div>
            </div>
            <div>
                <div className="transform cursor-pointer hover:-translate-y-6 transtion-all duration-200 
                relative w-[100%] h-[200px] md:h-[300ox] ">
                    <img  src={p1} alt="portfolio"  className="object-contain" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Project