import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import users from 'Constant/Api/users';
import useForm from 'helpers/hooks/useForm';
import InputPhone from 'Components/InputPhone';
import Input from 'Components/Input';
import {ToastContainer} from 'react-toastify';
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';

function RegisterForm({history}) {
const [phone_number, setPhone] = useState()
const [showPassword, setShowPassword] = useState(false)
const [error, setError] = useState(null)
const [{name, email, password}, setState] = useForm({
    name: "",
    email: "",
    password: ""
})

console.log(name, phone_number, email, password)

    function submit(ev) {
        ev.preventDefault()

        users.register({name, phone_number, email, password})
        .then((res) => {
            history.push("/login")
            console.log(res)
        })
        .catch((err) => {
            setError(err?.response?.data?.status)
        })
    }


    return (
        <div className="flex justify-between">
          <div className="w-full h-full">
            <img src="/images/content/Astronauts.png" alt="" />
        </div>
        <div className="container mx-auto">
            <div className="w-full sm:w-4/6 ml-24">
        <form onSubmit={submit}>

          <Input 
          name="name"
          type="text"
          placeholder="Your Name"
          labelName="Full Name"
          onChange={setState}
          value={name}
          error={error}
          />

            <InputPhone
            name="phone"
            labelName="Phone Number"
            onChange={setPhone}
            value={phone_number}
            error={error}
            />

          <Input 
          name="email"
          type="email"
          placeholder="Your Email Address"
          labelName="Email Address"
          onChange={setState}
          value={email}
          error={error}
          />

          <div className="relative">
          <Input 
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Your password address"
          labelName="Password"
          onChange={setState}
          value={password}
          error={error}
          // className="relative"
          />
          <div className="absolute bottom-12 right-8">
            <span className="cursor-pointer absolute" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <ShowIcon /> : <ShowOffIcon />}
            </span>
          </div>
          </div>


          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-1/2"
          >
            Masuk
          </button>
          <ToastContainer
            position="top-right"
            autoClose = {5000}
            hideProgressBar={false}
            newestOnTop={false}
            loseOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
                />
        </form>
        </div>
      </div>
    </div>
    )
}

export default withRouter(RegisterForm)