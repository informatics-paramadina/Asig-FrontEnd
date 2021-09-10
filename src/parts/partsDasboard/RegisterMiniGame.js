import React, {useState} from 'react';
import useForm from 'helpers/hooks/useForm';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
import {toast, ToastContainer} from 'react-toastify';

export default function RegisterMiniGame() {
    const [{name_ingame}, setState] = useForm({
        name_ingame: ""
    })
    const [error, setError] = useState(null)
    const [focus, setFocus] = useState("")
    console.log(name_ingame)
    function submit(ev) {
        ev.preventDefault()
        users.registerMiniGame({name_ingame})
        .then((res) => {
            if(res){
                toast.success("Registrasi Success", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            console.log(res)
        })
        .catch((err) => {
            setError(err?.response?.data?.status)
            console.log(err.response)
        })
    }

    return (
        <div className="flex justify-center items-center">
                <div className="w-full sm:w-2/6">
                    <form onSubmit={submit}>
                        <Input 
                            name="name_ingame"
                            type="text"
                            placeholder="Your Mini Game"
                            labelName="Mini Game"
                            onChange={setState}
                            value={name_ingame}
                            error={error}
                            onBlur={() => setFocus(!focus)}
                            onFocus={() => setFocus(!focus)}
                            />
                        <button
                            type="submit"
                            className="bg-blue-900 hover:bg-blue-800 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
                        >
                            Continue
                        </button>
                        <ToastContainer
                        position="top-right"
                        autoClose = {5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
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
