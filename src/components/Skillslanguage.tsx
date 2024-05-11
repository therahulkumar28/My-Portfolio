import React from 'react';

interface Props {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
    level7: string;
    level8: string;
    level9: string;
    skills1: string;
    skills2: string;
    skills3: string;
    skills4: string;
    skills5: string;
    skills6: string;
    skills7: string;
    skills8: string;
    skills9: string;
}

const Skillslanguage: React.FC<Props> = ({ level1, level2, level3, level4, level5, level6, level7, level8, level9, skills1, skills2, skills3, skills4, skills5, skills6, skills7, skills8, skills9 }) => {
    return (
        <div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills2}
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills3}
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills4}
                </h1>
                <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills5}
                </h1>
                <span className={`${level5} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills6}
                </h1>
                <span className={`${level6} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills7}
                </h1>
                <span className={`${level7} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills8}
                </h1>
                <span className={`${level8} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className="relative mb-[3rem]">
                <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                    {skills9}
                </h1>
                <span className={`${level9} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
        </div>
    );
};

export default Skillslanguage;
