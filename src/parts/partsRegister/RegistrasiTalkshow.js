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
        <div className="sm:flex pb-24">
                <div className="hidden sm:block sm:w-1/2 mr-16">
            <Fade left>
                    <div className="flex justify-center">
                        <h3 className="text-purple-400 my-10 capitalize font-medium text-xl">please register to be a talk show</h3>
                    </div>
                    <img className="object-contain object-center mb-16" src="images/content/Talkshow.png" alt="" />
            </Fade>
                </div>

        <div className="w-full sm:w-4/12">
        <Fade right delay={1000}>
            <form onSubmit={submit}>

            <Input
            name="email"
            type="email"
            placeholder="Johnsmith@example.com"
            labelName="Alamat Email"
            onChange={setState}
            value={email}
            />

            <Input
            name="phone_number"
            type="tel"
            placeholder="(+62) 0000-0000-0000"
            labelName="No Telepon"
            onChange={setState}
            value={phone_number}
            maxLength="12"
            />

            <Input
            name="name"
            type="text"
            placeholder="John Smith"
            labelName="Nama lengkap"
            onChange={setState}
            value={name}
            />

            <Input
            name="instansi"
            type="text"
            placeholder="University of Paramadina"
            labelName="Instansi"
            onChange={setState}
            value={instansi}
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
