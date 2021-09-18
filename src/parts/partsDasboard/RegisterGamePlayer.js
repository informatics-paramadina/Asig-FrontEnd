import React, {useState} from 'react';
import Input from 'Components/Input';
import {withRouter} from 'react-router-dom';
import useForm from 'helpers/hooks/useForm';
import {toast, ToastContainer} from 'react-toastify';
import axios from 'axios';


function RegisterGamePlayer({history}) {

    const [error, setError] = useState(null)
    const [{team_name, leader_email, leader_phone_number, leader_name, leader_name_ingame}, setState] = useForm({
        team_name: "",
        leader_email: "",
        leader_phone_number: "",
        leader_name: "",
        leader_name_ingame: "",
        
    })

    let members = {
        name: "",
        phone_number: "",
        name_ingame: "",
    }

    const [userss, setUsers] = useState([members]);
    const addUser = () => {
        return setUsers([...userss, members])
    }
    const removeUser = (index) => {
        const filteredUsers = [...userss];
        filteredUsers.splice(index, 1);
        return setUsers(filteredUsers)
    }
    const onChange = ((e, index) => {
        const updateUsers = userss.map((user, i) => (
            index === i ? Object.assign(user, {[e.target.name]: e.target.value}) : user
        ))
        return setUsers(updateUsers);
    })  

    
    let nameArr = [];
    let phoneArr = [];
    let ingameArr =  [];
    
    for (let i = 0; i < userss.length; i++) {
        nameArr.push(userss[i].name);
        phoneArr.push(userss[i].phone_number);
        ingameArr.push(userss[i].name_ingame);
    }
    
    const [image, setImage] = useState()
    async function submit(ev) {
        ev.preventDefault();
        const formData = new FormData();
        formData.append('name', nameArr);
        formData.append('phone_number', phoneArr);
        formData.append('name_ingame', ingameArr);
        formData.append('team_name', team_name);
        formData.append('leader_email', leader_email);
        formData.append('leader_phone_number', leader_phone_number);
        formData.append('leader_name', leader_name);
        formData.append('leader_name_ingame', leader_name_ingame);
        formData.append('logo', image);

        // const check = JSON.parse(localStorage.getItem("ASIG:token"))

        await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_HOST}/daftar/game`,
            data: formData,
            // headers: {
            //     'Authorization': `Bearer ${check.token}`
            // },
        })
        
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
        })
        .catch((err) => {
            setError(err?.response?.data?.status)
        })
    }


    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full ">
                    <form onSubmit={submit}>
                        <Input 
                            name="leader_email"
                            type="email"
                            placeholder="Your Team"
                            labelName="Email Leader"
                            onChange={setState}
                            value={leader_email}
                            error={error}
                        />

                        <Input 
                            name="leader_phone_number"
                            type="text"
                            placeholder="Your Team"
                            labelName="phone number leader"
                            onChange={setState}
                            value={leader_phone_number}
                            error={error}
                        />

                        <Input 
                            name="leader_name"
                            type="text"
                            placeholder="Your Team"
                            labelName="nama leader"
                            onChange={setState}
                            value={leader_name}
                            error={error}
                        />

                        <Input 
                            name="leader_name_ingame"
                            type="text"
                            placeholder="Your Team"
                            labelName="nama ingame leader"
                            onChange={setState}
                            value={leader_name_ingame}
                            error={error}
                        />

                        <Input 
                            name="team_name"
                            type="text"
                            placeholder="Your Team"
                            labelName="Team Name"
                            onChange={setState}
                            value={team_name}
                            error={error}
                        />

                        <div className="flex flex-col mb-4">
                            <label htmlFor="logo" className="text-lg mb-2">
                                Logo Team
                            </label>
                            <input 
                                name="logo"
                                type="file"
                                placeholder="Name"
                                labelName="team Name"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="bg-gray-300 hover:bg-gray-400 cursor-pointer transition-all duration-200 focus:outline-none text-white px-6 py-3 my-3 w-auto"
                            />
                        </div>

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
                                    error={error}
                                    />
                                <Input 
                                name="phone_number"
                                type="text"
                                placeholder="Your Phone Number"
                                labelName="Phone Number"
                                onChange={(e) => onChange(e, index)}
                                value={user.phone_number}
                                error={error}
                                />

                                <Input 
                                name="name_ingame"
                                type="text"
                                placeholder="Your InGame"
                                labelName="In Game"
                                onChange={(e) => onChange(e, index)}
                                value={user.name_ingame}
                                error={error}
                                />

                                </div>
                            })
                        }

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
                        <button
                            onClick={addUser}
                            className="bg-teal-400  hover:bg-teal-300 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
                        >
                            Tambah peserta <i className="ri-user-add-fill ri-lg"></i>
                        </button>
                        <button
                            onClick={(index) => removeUser(index)}
                            className="bg-red-400 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-1/2 mx-20"
                        >
                            Remove
                        </button>
                </div>
        </div>
        </>
    )
}

export default withRouter(RegisterGamePlayer);
