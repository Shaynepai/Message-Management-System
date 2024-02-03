/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"

const Signup = () => {
  return (
  <>
      <div className="h-screen ">

<div className="grid mt-5 mx-2 pt-6 duration-500 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
{/* Grided 1 */}
 <div className="text-center mx-3 duration-500 text-5xl sm:text-5xl md:text-8xl lg:text-8xl xl:text-8xl font-semibold text-blue-500 mb-4">Message Management System</div>


 {/* Grided 2 */}
 <div>
 <div className="max-w-xl   duration-500 mx-auto grid-cols-1 justify-center font-semibold  text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">
 
    <form className="grid duration-300 border-black/10 border  pb-8 justify-around   p-5 rounded-3xl bg-white shadow-lg shadow-black/20" >
    <h1 className="text-center mb-5 font-bold text-3xl text-primary duration-300">Sign Up</h1>
     <label>Name</label>
    <input autoComplete="no" className="px-10 sm:px-24 md:px-24 lg:px-24 xl:px-24  m-auto focus:outline-none focus:ring focus:ring-blue-300 border rounded-lg p-1" type="text"/>
    <label>Email</label>
    <input className=" px-10 sm:px-24 md:px-24 lg:px-24 xl:px-24 outline-none focus:ring  m-auto focus:ring-blue-300 border rounded-lg p-1" type="email"/>
    <label>Password</label>
    <input className="px-10 sm:px-24 md:px-24 lg:px-24 xl:px-24   outline-none focus:ring  m-auto focus:ring-blue-300 border rounded-lg p-1" type="Password"/>
    <label>Confirm Password</label>
    <input className="px-10 sm:px-24 md:px-24 lg:px-24 xl:px-24   outline-none focus:ring  m-auto focus:ring-blue-300 border rounded-lg p-1" type=" Confirm Password"/>
    <button className="border  mb-2 mt-5 rounded-lg p-2 font-bold bg-primary  text-white" type="submit">Sign up</button>
     <div>
       <hr />
     </div>
     <div className="text-center font-thin mt-3">Already Have an account? <Link to="/" className="underline font-semibold ">Log In</Link>.</div>
    </form>
 </div>
 </div>
</div>
 </div>
  </>
  )
}

export default Signup