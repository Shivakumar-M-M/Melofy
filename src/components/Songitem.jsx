import React from 'react'

const Songitem = ({name,image,desc,id}) => {
  return (
    <div className='m-w-[180px] p-2 px-3 rounded curor-pointer hover:bg-[#ffffff26'>
        <img className='rounded' src={image}></img>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-bold '>{desc} </p>

      <div></div>
    </div>
  )
}

export default Songitem
