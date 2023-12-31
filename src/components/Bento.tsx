import { Character } from "@/entities/character"

export const Bento = ({name, image}: Character) => {
  return (
    <div className='bg-neutral-900 rounded-2xl'>
      <img src={image} className='w-5/6 mt-6 sm:mt-4 rounded-2xl mx-auto'/>
      <p className='text-white text-center text-xl font-semibold my-2'>{name}</p>
    </div>
  )
}
