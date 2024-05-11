import SkillsItem from "./SkillsItem";
import Skillslanguage from "./Skillslanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
        <h1 className="heading">
            Education & <span className="text-yellow-400">Skill</span>
        </h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] 
        items-center">
            <div>
            <SkillsItem title="React Developer" year="2023 - present"/>
            <SkillsItem title="MERN Stack Developer" year="2024 - present"/>
            

            </div>
            <div >
            <SkillsItem title="Knows Basic Devops" year="2024 - present"/>
            <SkillsItem title="Know Data Structure and Algorithm" year="2021 - present"/>
            </div>
            <Skillslanguage 
                level1="w-[88%]"
                level2="w-[85%]" 
                level3="w-[88%]"
                level4="w-[80%]"
                level5="w-[70%]"
                level6="w-[91%]"
                level7="w-[88%]"
                level8="w-[40%]"
                level9="w-[80%]"
                skills1="TypeScript / JavaScript"
                skills2="C/C++"
                skills3="Data Structures and Algorithms"
                skills4="PostgreSQL"
                skills5="MongoDB"
                skills6="HTML"
                skills7="CSS"
                skills8="Tailwind CSS"
                skills9="Docker"
            />
        </div>
    </div>
  )
}

export default Skills;