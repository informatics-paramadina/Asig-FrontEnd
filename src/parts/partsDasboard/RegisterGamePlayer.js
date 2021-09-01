import React, {useState, useRef} from 'react';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
// import media from 'Constant/Api/media';
import image2base64 from 'helpers/utils/image2base64';
import {withRouter} from 'react-router-dom';
import useForm from 'helpers/hooks/useForm';
import {toast, ToastContainer} from 'react-toastify';
import fieldErrors from 'helpers/hooks/fieldErrors';
import {useSelector} from 'react-redux';
import axios from 'axios'


function RegisterGamePlayer({history}) {
    // const [state, setState] = useState({
    //     profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    // })
    const DETAILS = useSelector((statee) => statee.users)
    console.log(DETAILS)

    // function imageHandler(e) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if(reader.readyState === 2){
    //             setState({profileImg: reader.result})
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0])
    // }
    // const {profileImg} = state
    // const [{team_name, logo}, setKey, setState] = useForm({
    //     team_name: "",
    //     logo: ""
    // }) 
    // const addPicture = useRef(null)
    // function previewImage(e) {
    //     e.persist();
    //     image2base64(e.target.files[0])
    //     .then(image => {
    //         setKey({
    //             target: {
    //                 name: e.target.name,
    //                 value: image
    //             }
    //         })
    //         // console.log(image)
    //     })
    // }


    
    // console.log(previewImage)
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

    for (let i = 0; i < userss.length; i++) {
        nameArr.push(userss[i].name);
        phoneArr.push(userss[i].phone_number);
        ingameArr.push(userss[i].name_ingame);
    }

    const [{team_name}, setState] = useForm({
        team_name: ""
    })

        const [image, setImage] = useState()

    console.log(userss)


    function submit(ev) {
        ev.preventDefault();

        const formData = new FormData();
        formData.append('name', nameArr);
        formData.append('phone_number', phoneArr);
        formData.append('name_ingame', ingameArr);
        formData.append('team_name', team_name);
        formData.append('logo', image);

        fetch(`https://api.himti.my.id/register/game`,{
            body:formData,
            method: "POST",
        } 
            
        )
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
            // setState({
            //     ...state
            // })
        })
        .catch((err) => {
            setError(err?.response?.data?.status)
        })


        
        // const payload = {
        //     team_name: team_name,
        //     logo: logo
        // }
        
        // if(logo.indexOf("base64") > -1){
        //     const avatar = await media.upload(logo);
        //     payload.logo = avatar?.data?.image
        //     console.log(avatar?.data?.image)
        // }

        // console.log(payload)
        // users.registerPlayerGame({
        //     // name: nameArr,
        //     // phone_number: phoneArr,
        //     // name_ingame: ingameArr,
        // })
        // .then((res) => {
        //     if(res){
        //         toast.success("Registrasi Success", {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         })
        //     }
        //     // setState({
        //     //     ...state
        //     // })
        // })
        // .catch((err) => {
        //     setError(err?.response?.data?.status)
        // })
    }
    const Errors = fieldErrors(error)
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full sm:w-3/12">
                    {/* <div className="rounded-full overflow-hidden w-28 h-28">
                        {
                            logo ? (
                                <img src={logo} alt="" />
                            ) : (
                                <img src="/images/content/default-avatar.svg" alt="DefaultAvater" className="object-cover w-24 h-24 fill-indigo-500" />
                            )
                        }

                    </div>
                     
              <button
                onClick={() => addPicture.current.click()}
                className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-3"
              >
                Browse
              </button> */}
                    <form onSubmit={submit}>
                        <Input 
                            name="team_name"
                            type="text"
                            placeholder="Name"
                            labelName="team Name"
                            onChange={setState}
                            value={team_name}
                        />

                        <Input 
                            name="logo"
                            type="file"
                            placeholder="Name"
                            labelName="team Name"
                            onChange={(e) => setImage(e.target.files[0])}
                            // value={team_name}
                        />
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