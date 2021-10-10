import React, {useState} from 'react';
import useForm from 'helpers/hooks/useForm';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
import {toast, ToastContainer} from 'react-toastify';
import Select from 'Components/Select';
import { withRouter } from 'react-router';
import Fade from 'react-reveal/Fade';

function RegistrasiTalkshow({history}) {
    const [error, setError] = useState(null)

    const [{email, phone_number, name, instansi, pekerjaan, nim, outherNim}, setState] = useForm({
        email: "",
        phone_number: "",
        name: "",
        instansi: "",
        pekerjaan: "",
        nim: "",
        outherNim: ""
    })
    console.log(phone_number)

    console.log("instansi:",instansi, "pekerjaan:", pekerjaan, "outherPekerjaan:", "nim:", nim, "outherNim:",outherNim)

    function submit(ev) {
        ev.preventDefault()
        users.registerTalkShow({
            email,
            phone_number,
            name,

            instansi,
            pekerjaan: pekerjaan === "Mahasiswa" || "Karyawan Swasta" || "Pegawai Negeri Sipil" || "Wirausahawan" || "Freelance" || "Lainnya" || "Dosen" ? pekerjaan : "",
            nim: nim === "Mahasiswa Paramadina" ? outherNim : ""
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
            setError(err?.response?.data?.status)
        })
    }

    return (
        <div className="sm:flex justify-around">
               <div className="hidden sm:block sm:w-1/2">
                    {/*
                    <Fade left>
                         <div className="flex justify-center">
                             <h3 className="text-purple-400 my-10 capitalize font-medium text-2xl">Please register to join our talkshow and you will get free an e-Certificate.</h3>
                         </div>
                    </Fade>
                    */}
                    <Fade left delay={500}>
                         <div className="flex justify-center">
                             <img className="object-contain object-center w-auto" src="images/content/FlyerTalkshow.jpg" alt="talkshow" title="Poster Talkshow ASIG14" />
                         </div>
                    </Fade>
               </div>

        <div className="w-full sm:w-4/12 my-auto">
        <Fade right delay={1000}>
             <h3 className="text-purple-400 my-10 capitalize font-medium text-2xl">Please register to join our talkshow and you will get free an e-Certificate.</h3>
            <form onSubmit={submit}>

            <Input
            name="email"
            type="email"
            placeholder="Johnsmith@example.com"
            className="cursor-not-allowed"
            labelName="Alamat Email"
            onChange={setState}
            value={email}
            disabled
            />

            <Input
            name="phone_number"
            type="tel"
            placeholder="(+62) 0000-0000-0000"
            className="cursor-not-allowed"
            labelName="No Telepon"
            onChange={setState}
            value={phone_number}
            maxLength="13"
            disabled
            />

            <Input
            name="name"
            type="text"
            placeholder="John Smith"
            labelName="Nama lengkap"
            className="cursor-not-allowed"
            onChange={setState}
            value={name}
            disabled
            />

            <Input
            name="instansi"
            type="text"
            placeholder="University of Paramadina"
            className="cursor-not-allowed"
            labelName="Instansi"
            onChange={setState}
            value={instansi}
            disabled
            />

            <Select
                name="pekerjaan" labelName="Pekerjaan" value={pekerjaan} onClick={setState}
            >
                <option value="Pegawai Negeri Sipil">
                    Pegawai Negeri Sipil
                </option>
                <option value="Karyawan Swasta">
                    Karyawan Swasta
                </option>
                <option value="Wirausahawan">
                    Wirausahawan
                </option>
                <option value="Dosen">
                    Dosen
                </option>
                <option value="Mahasiswa">
                    Mahasiswa
                </option>
                <option value="Freelance">
                    Freelance
                </option>
                <option value="Siswa">
                    Siswa
                </option>
                <option value="Lainnya">
                    Lainnya
                </option>
            </Select>
            {
                pekerjaan === "Mahasiswa" && (
                    <Select
                        name="nim" labelName="Mahasiswa" value={nim} onClick={setState}
                        >
                        <option value="Mahasiswa Luar">
                            Mahasiswa Luar
                        </option>
                        <option value="Mahasiswa Paramadina">
                            Mahasiswa Paramadina
                        </option>
                    </Select>
                )
            }

            {
                nim === "Mahasiswa Paramadina" && (
                    <Input
                    value={outherNim}
                    onChange={setState}
                    name="outherNim"
                    placeholder="masukan nim anda"
                    labelName="Nim"
                    type="text"
                    />
                )
            }

            <button
                disabled
                type="submit"
                className="bg-purple-800 focus:outline-none shadow-inner cursor-not-allowed text-blue-800 font-semibold px-6 py-3 mt-4 w-full"
            >
                Maaf Pendaftaran Sudah Kami Tutup 
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
        </Fade>
        </div>
        </div>
    )
}

export default withRouter(RegistrasiTalkshow)
