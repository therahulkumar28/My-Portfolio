interface Props {
    title : String ,
    year : string ,
}

const SkillsItem = ( {title , year} : Props) => {

  return (
    <div className="mb-[4rem] md:mb-[8rem] ">
        <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] 
        border-[2px] border-[#55e6a5] ">{year}
        </span>
        <h1 className="mt-[2rem] font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[34px] 
        text-white uppercase"> 
        {title} 
        </h1>
        <p className="text-[#aaaaaa] font-normal text- ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora obcaecati itaque a, aliquid accusantium
             numquam sunt ad dolor suscipit quaerat repellat. Rerum neque dolores dicta ut sint excepturi voluptas.
        </p>
    </div>
  )
}

export default SkillsItem