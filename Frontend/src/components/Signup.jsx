// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);
//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={() => document.getElementById("my_model_3").close()}
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Login</h3>
//             {/* email */}
//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("email", { required: true })}
//               />
//               <br />
//               {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
//             </div>
//             {/* password */}
//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//                 {...register("password", { required: true })}
//               />
//               <br />
//               {errors.password && <span className="text-sm text-red-500">This field is required</span>}
//             </div>

//             {/* button */}
//             <div className="flex justify-around mt-4">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link
//                   to="/signup"
//                   className="underline text-blue-500 cursor-pointer"
//                 >
//                   Signup
//                 </Link>{" "}
//                 <Login/>
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;




// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'

// function Signup() {
//   return (
//     <>
//       <div className='flex h-screen items-center justify-center '>
//         <div className="w-[600px] ">
//           <div className="modal-box dark:bg-slate-900 dark:text-white border border-white">
//             <h3 className="font-bold text-lg">Signup</h3>
//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <br />
//               <input type="text"
//                 placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <br />
//               <input type="email"
//                 placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <br />
//               <input type="password"
//                 placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none" />
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
//               <p>Have account? {" "}
//                 <button

//                   className="underline text-blue-500 cursor-pointer"
//                   onClick={() =>
//                     document.getElementById("my_modal_1").showModal()
//                   }
//                 >
//                   Login
//                 </button>{" "}
//                 <Login/>
//               </p>
//             </div>
//             <div className="modal-action">
//               <form method="dialog">
//                 {/* if there is a button in form, it will close the modal */}
//                 <Link to="/" className="btn" onClick={() => navigate('/')}>Close</Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Signup


// import React from 'react';
// import { Link } from "react-router-dom";


// function Signup() {
//   return (
//     <>
//       <div>
//         <div id="my_modal_3" className="">
//           <div className="dark:bg-slate-900 dark:text-white border border-white">
//             <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              
//               <Link
//                 to="/"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                 onClick={() => document.getElementById("my_model_3").close()}
//               >
//                 ✕
//               </Link>

//               <h3 className="font-bold text-lg">Login</h3>
              
//               <div className="mt-4 space-y-2">
//                 <span>Email</span>
//                 <br />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("email", { required: true })}
//                 />
//                 <br />
//                 {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
//               </div>
              
//               <div className="mt-4 space-y-2">
//                 <span>Password</span>
//                 <br />
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("password", { required: true })}
//                 />
//                 <br />
//                 {errors.password && <span className="text-sm text-red-500">This field is required</span>}
//               </div>

              
//               <div className="flex justify-around mt-4">
//                 <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                   Login
//                 </button>
//                 <p>
//                   Not registered?{" "}
//                   <Link
//                     to="/signup"
//                     className="underline text-blue-500 cursor-pointer"
//                   >
//                     Signup
//                   </Link>{" "}
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div>
//         Signup
//       </div>
//     </>
//   )
// }

// export default Signup


import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Importing useForm from react-hook-form
import Login from "./Login";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="" className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white border border-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Corrected the close button to be a button instead of Link */}
              <button
                type="button" // Ensure this is a button, not a submit button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => window.history.back()} // Corrected to navigate back to the previous page
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-between mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    type="button" // Ensure this is a button, not a submit button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal() // Corrected to show the Login modal
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;