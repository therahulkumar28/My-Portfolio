import { StarIcon } from "@heroicons/react/16/solid";

interface Props {
    name: string ;
    role: string ;
    image: string ;
}

const ClientReview = ({name , role , image}:Props) => {
  return (
    <div className="flex flex-col text-color items-center justify-center">
        <img src={image} alt={name} 
        className="object-cover mx-auto mb-[2rem] w-[20%] h-[20%] rounded-[50%] "/>
        <div className="flex items-center mx-auto">
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
            <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        </div>
        <h1 className="text-[25px] text-white mt-[1rem] " >
            {name}
        </h1>
        <p className="text-[18px] text-white opacity-75 mt-[0.5rem]  mb-[1.4rem] ">
            {role}
        </p>
        <p className="text-[16px] text-white opacity-50 w-[90%] mx-auto md:w-[50%] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit soluta sint obcaecati minus 
            inventore, atque fugit quas corporis magni. Cum dolore et est quos quia velit enim excepturi pariatur?
        </p>
    </div>
  )
}

export default ClientReview