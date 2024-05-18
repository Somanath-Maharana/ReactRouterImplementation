import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen bg-slate-700 flex justify-center items-center'>
      <div className='h-[40%] w-[30%] rounded-xl bg-slate-600 flex flex-col justify-center items-center gap-3'>
      <div className='w-[80%]'>
        <h3 className='text-slate-300'>E-mail</h3>
        <input className='w-[100%] p-3 border-none hover:border-none active:border-none rounded-lg' type="email" name="" id="" />
        </div>
      <div className='w-[80%]'>
        <h3 className='text-slate-300'>Password</h3>
        <input className='w-[100%] p-3 border-none hover:border-none active:border-none rounded-lg' type="password" name="" id="" />
        </div>
      <button className='w-[80%] m-6 p-3 border-none hover:border-none active:border-none rounded-lg bg-green-400 text-green-700 hover:bg-green-500'>Log In</button>
      </div>
    </div>
  )
}

export default Login
