import React from 'react'

const ModalCard = ({ setModal, setCategory, data }) => {
  
  
  const modalCategory = ["All", ...new Set(data.map(item => item.name))]
  

  return (
    <div onClick={() => setModal(false)} className="fixed inset-0 flex justify-center items-center pb-20 z-40 bg-black/60   ">
      <div onClick={(e) => e.stopPropagation()} className="flex justify-center items-center flex-col bg-white w-3xl h-3/4 rounded-2xl p-7 ">
        <ul className='flex  gap-5 '>
          {modalCategory.map((elem) => {
             
          return (
            <li
              className=' cursor-pointer'
              onClick={() => {
                setCategory(elem);
                setModal(false)
              }}
            >
              {" "}
              {elem}{" "}
            </li>
          );
          })}
        </ul>
        <button className="cursor-pointer border-2 border-orange-500 px-10 rounded-2xl py-1 mt-50" onClick={() => setModal(false)}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default ModalCard