import React, {useState} from 'react';
import useForm from 'helpers/hooks/useForm';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from 'react-router';
import Fade from 'react-reveal/Fade';

function RegisterMiniGame({history}) {
    const [{email, phone_number, name, name_ingame}, setState] = useForm({
        email: "",
        phone_number: "",
        name: "",
        name_ingame: ""
    })
    const [error, setError] = useState(null)
    console.log(name_ingame)
    function submit(ev) {
        ev.preventDefault()
        users.registerMiniGame({email,phone_number,name,name_ingame})
        .then((res) => {
            history.push('/')
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
            // setError(err?.response?.data?.status)
            toast.error(setError(err?.response?.data?.status), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        })
    }

    return (
        <div className="sm:flex">
            {/* sm:w-2/6 */}
                    <div className="hidden sm:block sm:w-3/6 mr-16">
                        <Fade left>
                            <div className="flex justify-center">
                                <h3 className="text-purple-400 my-10 capitalize font-medium text-xl">Please register to be a participant in the mini game</h3>
                            </div>
                            <img className="object-contain object-center mb-16" src="images/content/ludo.png" alt="" />
                        </Fade>
                    </div>
                <div className="w-full sm:w-4/12">
                    <Fade right delay={1000}>
                        <form onSubmit={submit}>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Johnsmith@example.com"
                                labelName="Email  Address"
                                onChange={setState}
                                value={email}
                            />

                            <Input
                                name="phone_number"
                                type="tel"
                                placeholder="(+62) 0000-0000-0000"
                                labelName="Phone Number"
                                onChange={setState}
                                value={phone_number}
                                maxLength="12"
                            />

                            <Input
                                name="name"
                                type="text"
                                placeholder="John Smith"
                                labelName="Full Name"
                                onChange={setState}
                                value={name}
                            />

                            <Input
                                name="name_ingame"
                                type="text"
                                placeholder="in Game"
                                labelName="In game"
                                onChange={setState}
                                value={name_ingame}
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
                    </Fade>
                </div>
        </div>
    )
}

export default withRouter(RegisterMiniGame)
