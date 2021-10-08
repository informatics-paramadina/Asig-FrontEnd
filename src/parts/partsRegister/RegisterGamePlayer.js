import React, {useState} from 'react';
import Input from 'Components/Input';
import {withRouter} from 'react-router-dom';
import useForm from 'helpers/hooks/useForm';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';
import axios from 'axios';


function RegisterGamePlayer({history}) {

    const [error, setError] = useState(null)

    let nameArr = [];
    let phoneArr = [];
    let ingameArr =  [];

    console.log("nameArr",nameArr)
    console.log("phoneArr",phoneArr)
    console.log("ingameArr",ingameArr)

    let members = {
        name: "",
        phone_number: "",
        name_ingame: "",
    }

    const [userss, setUsers] = useState([members]);
    console.log(userss)
    const addUser = () => {
        return userss.length <= 4 ? setUsers([...userss, members]) : null;
    }
    const removeUser = () => {
        const filteredUsers = [...userss];
        filteredUsers.splice(1, 1);
        return setUsers(filteredUsers)
    }
    const onChange = ((e, index) => {
        const updateUsers = userss.map((user, i) => (
            index === i ? Object.assign(user, {[e.target.name]: e.target.value}) : user
        ))
        return setUsers(updateUsers);
    })

    for (const items  of userss) {
        nameArr.push(items.name);
        phoneArr.push(items.phone_number);
        ingameArr.push(items.name_ingame);
    }

    const [{team_name, leader_email, leader_phone_number, leader_name, leader_name_ingame}, setState] = useForm({
        team_name: "",
        leader_email: "",
        leader_phone_number: "",
        leader_name: "",
        leader_name_ingame: "",

    })
    console.log(team_name, leader_email, leader_phone_number, leader_name, leader_name_ingame)

    const [image, setImage] = useState()
    async function submit(ev) {
        ev.preventDefault();
        const formData = new FormData();
        formData.append('team_name', team_name);
        formData.append('leader_email', leader_email);
        formData.append('leader_phone_number', leader_phone_number);
        formData.append('leader_name', leader_name);
        formData.append('leader_name_ingame', leader_name_ingame);
        formData.append('logo', image);
        formData.append('name', nameArr);
        formData.append('phone_number', phoneArr);
        formData.append('name_ingame', ingameArr);


        await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_HOST}/daftar/game`,
            data: formData,
        })

            .then((res) => {
                setTimeout(() => {
                    history.push('/')
                }, 2000);
            if(res){
                toast.success("Registrasi Success 👌", {
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
        <>
            <div className="sm:flex">
                <Fade left>
                    <div className="hidden sm:block sm:w-3/6 mr-16">
                    {/*
                    <div className="flex justify-center">
                        <h3 className="text-purple-400 my-10 capitalize text-xl">please register to take part in the <br />valorant competition</h3>
                    </div>
                    */}
                        <img className="object-contain object-center mb-16" src="images/content/Valorant.png" alt="Jett Valorant" title="Jett Valorant Character"/>
                    </div>
                </Fade>
                <Fade right delay={1000}>
                <div className="w-full sm:w-4/12">
                    <h3 className="text-purple-400 my-10 capitalize font-medium text-2xl">please register to take part in the <br />valorant competition</h3>
                    <form onSubmit={submit}>

                        <Input
                            name="leader_name"
                            type="text"
                            placeholder="John Smith"
                            labelName="Name leader"
                            onChange={setState}
                            value={leader_name}
                            error={error}
                        />

                        <Input
                            name="leader_email"
                            type="email"
                            placeholder="Johnsmith@example.com"
                            labelName="Email leader"
                            onChange={setState}
                            value={leader_email}
                            error={error}
                        />

                        <Input
                            name="leader_phone_number"
                            type="tel"
                            placeholder="(+62) 0000-0000-0000"
                            labelName="Phone number leader"
                            onChange={setState}
                            value={leader_phone_number}
                            error={error}
                            maxLength="13"
                        />

                        <Input
                            name="leader_name_ingame"
                            type="text"
                            placeholder="JohnSmith_7"
                            labelName="Nickname leader"
                            onChange={setState}
                            value={leader_name_ingame}
                            error={error}
                        />

                        <Input
                            name="team_name"
                            type="text"
                            placeholder="nama team anda"
                            labelName="Team Name"
                            onChange={setState}
                            value={team_name}
                            error={error}
                        />

                        <div className="flex flex-col mb-4">
                            <label htmlFor="logo" className="text-lg mb-2 text-purple-600">
                                Logo Team
                            </label>
                            <input
                                name="logo"
                                type="file"
                                placeholder="Name"
                                labelName="team Name"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="bg-gray-800 cursor-pointer focus:outline-none text-gray-700 px-6 py-3 my-3 w-auto"
                            />
                        </div>

                        <div className="mt-16 mb-8">
                            <h2 className="text-purple-400 font-medium text-xl">Masukkan anggota team kamu ya &#128522;</h2>
                        </div>

                        {
                            userss.map((user, index) => {
                                return  <div key={index}>
                                <Input
                                    name="name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    labelName="Full Name"
                                    onChange={(e) => onChange(e, index)}
                                    value={user.name}
                                    error={error}
                                    />
                                <Input
                                name="phone_number"
                                type="tel"
                                placeholder="(+62) 0000-0000-0000"
                                labelName="Phone Number"
                                onChange={(e) => onChange(e, index)}
                                value={user.phone_number}
                                error={error}
                                maxLength="13"
                                />

                                <Input
                                name="name_ingame"
                                type="text"
                                placeholder="JaneDoe"
                                labelName="Nickname"
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
                            Submit
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
                    <section className="flex flex-col justify-center">
                         <button
                         onClick={addUser}
                         className="bg-teal-400 hover:bg-teal-300 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
                         >
                         Tambah peserta <i className="ri-user-add-fill ri-lg"></i>
                         </button>
                         <button
                         onClick={(index) => removeUser(index)}
                         className="border-4 border-red-400 hover:bg-red-400 transition-all duration-200 shadow-inner text-red-400 hover:text-white px-6 py-3 mt-4 mx-auto w-3/5"
                         >
                         Hapus peserta
                         </button>
                    </section>
                </div>
                </Fade>
        </div>
        </>
    )
}

export default withRouter(RegisterGamePlayer);
