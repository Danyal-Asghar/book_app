import React from 'react'
import { Link } from 'react-router-dom';
import Login from './login';
import { useForm } from "react-hook-form"
function signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='h-screen flex items-center justify-center '>
      <div  className="w-[600px] ">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Sign Up</h3>
    <div className="pt-2 space-y-2">
      <span>Name:</span>
      <input type='text'  placeholder='enter your name' className="input border-none flex items-center gap-2 h-6 " 
       {...register("name", { required: true })} 
       />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
       </div>
    <div className="pt-2 space-y-2">
      <span>Email:</span>
      <input type='email'  placeholder='enter your email' className="input border-none flex items-center gap-2 h-6 "
       {...register("email", { required: true })}/>
        {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
    </div>
      {/* password section */}
    <div className="pt-2 space-y-2">
      <span>Password:</span>
      <input type='password'  placeholder='enter your email' className="input border-none flex items-center gap-2 h-6 "{...register("password", { required: true })}/>
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className=" justify-around mt-4 gap-8 flex " >
      <button className=' bg-pink-500 text-white  px-3 py-1 hover:bg-pink-700 duration-200 rounded-md '>Sign Up</button>
      <p >Have Account?{" "}
         <button className='underline text-blue-500 cursor-pointer'
         onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
         <Login />
            </p>{" "}
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default signup
