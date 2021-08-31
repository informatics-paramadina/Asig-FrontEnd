import React from 'react';
import users from 'Constant/Api/users';
import {withRouter} from 'react-router-dom';
import useForm from 'helpers/hooks/useForm';
import { setAuthorizationHeader } from 'config/axios';
import Input from 'Components/Input';
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
        <div className="flex justify-center items-center pb-24">
            <div className="w-full sm:w-3/12">
        <form onSubmit={submit}>
          <Input 
          name="email"
          type="email"
          placeholder="Your Email Address"
          labelName="Email Address"
          onChange={setState}
          value={email}
          />

          <Input 
          name="password"
          type="password"
          placeholder="Your password address"
          labelName="Password"
          onChange={setState}
          value={password}
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
          >
            Masuk
          </button>
        </form>
      </div>
        </div>
    )
}

export default withRouter(LoginForm)