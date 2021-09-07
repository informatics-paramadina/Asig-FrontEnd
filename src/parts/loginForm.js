import React from 'react';
import users from 'Constant/Api/users';
import {withRouter} from 'react-router-dom';
import useForm from 'helpers/hooks/useForm';
import { setAuthorizationHeader } from 'config/axios';
import {useDispatch} from 'react-redux'
import { populateProfile } from 'Store/action/users';


function LoginForm({history}) {
    const dispatch = useDispatch();
    const [{email, password}, setState] = useForm({
        email: "",
        password: "",
    })

    function submit(e) {
        e.preventDefault()

        users.login({email, password}).then((res) => {
            setAuthorizationHeader(res.token);
            users.details().then(detail => {
              dispatch(populateProfile(detail))
              localStorage.setItem("ASIG:token", JSON.stringify({
                token: res.token
              }))
              const redirect = localStorage.getItem("ASIG:redirect")
              const userCookie = {
                email: detail.userEmail,
                name: detail.userName,
                role: detail.userRole,

              }
              const expires = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
              
              document.cookie = `ASIG:user=${JSON.stringify(userCookie)}; expires=${expires.toUTCString}; path:/`;

              history.push(redirect || "/dasboard")
            })
          }).catch((err) => {
            console.log(err)
          })
        }
        

    return (
        <div className="flex justify-between bg-black">
          <div className="w-full sm:w-4/6 mx-10 mt-56">
        <form onSubmit={submit}>
          <div className="flex flex-col mb-14">
            <label htmlFor="email" className="text-lg mb-2 text-white">
              Email Address
            </label>
            <input 
            name="email"
            type="email"
            placeholder="Your Email Address"
            labelName="Email Address"
            onChange={setState}
            value={email}
            className="input bg-gray-800 focus:border-teal-500 border-gray-800 text-gray-500 placeholder-gray-700 w-full"
            />
        </div>
        <div className="flex flex-col mb-10">
          <label htmlFor="password" className="text-lg mb-2 text-white">
              Password
            </label>
          <input 
          name="password"
          type="password"
          placeholder="Your password address"
          labelName="Password"
          onChange={setState}
          value={password}
          className="input bg-gray-800 focus:border-teal-500 border-gray-800 text-gray-500 placeholder-gray-700 w-full"
          />
        </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-1/2"
          >
            Masuk
          </button>
        </form>
      </div>
        
        <div className="w-full h-full relative">
          <img className="object-cover object-center" style={{height: 657}} src="/images/content/Valorant.png" alt="" />
        </div>
        </div>
    )
}

export default withRouter(LoginForm)