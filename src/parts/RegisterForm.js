import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import users from 'Constant/Api/users';
import useForm from 'helpers/hooks/useForm';
import InputPhone from 'Components/InputPhone';
import Input from 'Components/Input';
import {ToastContainer} from 'react-toastify';

function RegisterForm({history}) {
const [phone_number, setPhone] = useState()
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
        <div className="flex justify-center items-center pb-24">
            <div className="w-full sm:w-3/12">
        <form onSubmit={submit}>

          <Input 
          name="name"
          type="text"
          placeholder="Your Name"
          labelName="Full Name"
          onChange={setState}
          value={name}
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
    )
}

export default withRouter(RegisterForm)