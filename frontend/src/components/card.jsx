import React from 'react'

function Card({item}) {
  
  return (
    <>
    <div className="mt-5 my-3 ">
    <div className="card bg-base-100 w-96 shadow-xl  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
  <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
     
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-2 py-2 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white">${item.price}</div>
      <div className="badge badge-outline px-2 py-2 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  );
}

export default Card;
