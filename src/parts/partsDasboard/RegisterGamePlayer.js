import React, {useState} from 'react';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
import {withRouter} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import fieldErrors from 'helpers/hooks/fieldErrors';
import useForm from 'helpers/hooks/useForm';

// [bilal, sdfdsf, ]
// [9908]



function RegisterGamePlayer({history}) {
    const [error, setError] = useState(null)
    let nameArr = [];
    let phoneArr = [];
    let ingameArr =  [];


    let members = {
        name: "",
        phone_number: "",
        name_ingame: "",
    }

    
    const [userss, setUsers] = useState([members]);
    
        const addUser = () => {
                setUsers([...userss, members])
            }

    const onChange = ((e, index) => {
        const updateUsers = userss.map((user, i) => (
            index === i ? Object.assign(user, {[e.target.name]: e.target.value}) : user
        ))
        return setUsers(updateUsers);
    })  

    for (let i=0; i<userss.length; i++) {
                nameArr.push(userss[i].name);
                phoneArr.push(userss[i].phone_number);
                ingameArr.push(userss[i].name_ingame);
    }
        

    console.log(userss)
    function submit(ev) {
        ev.preventDefault();
        users.registerPlayerGame({
                name: nameArr,
                phone_number: phoneArr,
                name_ingame: ingameArr,
                team_name: "test"
        })
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
        })
        .catch((err) => {
            setError(err?.response?.data?.status)
        })
    }
    const Errors = fieldErrors(error)
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full sm:w-3/12">
                    <form onSubmit={submit}>
                        {
                            userss.map((user, index) => {
                                return  <div key={index}>
                                <Input 
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    labelName="Full Name"
                                    onChange={(e) => onChange(e, index)}
                                    value={user.name}
                                    />
                                <Input 
                                name="phone_number"
                                type="text"
                                placeholder="Your Phone Number"
                                labelName="Phone Number"
                                onChange={(e) => onChange(e, index)}
                                value={user.phone_number}
                                />

                                <Input 
                                name="name_ingame"
                                type="text"
                                placeholder="Your InGame"
                                labelName="In Game"
                                onChange={(e) => onChange(e, index)}
                                value={user.name_ingame}
                                />

                                </div>
                            })
                        }

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
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                    </form>
                        <button
                            onClick={addUser}
                            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
                        >
                            Add
                        </button>
                </div>
        </div>
        </>
    )
}

export default withRouter(RegisterGamePlayer)