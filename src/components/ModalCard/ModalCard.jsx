import React from 'react'

const ModalCard = ({setModal}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center pb-20 z-40 bg-black/60   ">
      <div className="flex justify-center items-center flex-col bg-white w-3xl h-3/4 rounded-2xl p-7 ">
        <h1>HELLLLLLLLLLLLLLLLLLLLLO</h1>
        <button className="cursor-pointer" onClick={() => setModal(false)}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

export default ModalCard