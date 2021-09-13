import React, {useState} from 'react';
import useForm from 'helpers/hooks/useForm';
import Input from 'Components/Input';
import users from 'Constant/Api/users';
import {toast, ToastContainer} from 'react-toastify';
import Select from 'Components/Select';

export default function RegistrasiTalkshow() {
    const [error, setError] = useState(null)

    const [{instansi, pekerjaan, nim, outherNim}, setState] = useForm({
        instansi: "",
        pekerjaan: "",
        // outherPekerjaan: "",
        nim: "",
        outherNim: ""
    })

    console.log("instansi:",instansi, "pekerjaan:", pekerjaan, "outherPekerjaan:", "nim:", nim, "outherNim:",outherNim)

    function submit(ev) {
        ev.preventDefault()
        users.registerTalkShow({
            instansi, 
            pekerjaan: pekerjaan === "Mahasiswa" ? pekerjaan : "",  
            nim: nim === "Mahasiswa Paramadina" ? outherNim : ""
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

    return (
        <div className="flex justify-center items-center pb-24">
            <div className="w-full sm:w-2/6">
        <form onSubmit={submit}>

            <Input 
            name="instansi"
            type="text"
            placeholder="Your instansi name"
            labelName="Instansi"
            onChange={setState}
            value={instansi}
            />

            {/* <Input 
            name="pekerjaan"
            type="text"
            placeholder="Your pekerjaan name"
            labelName="pekerjaan"
            onChange={setState}
            value={pekerjaan}
            /> */}

            <Select 
                name="pekerjaan" labelName="Pekerjaan" value={pekerjaan} onClick={setState}
            >
                <option value="Pegawai Negeri Sipil">
                    Pegawai Negeri Sipil
                </option>
                <option value="Karyawan Swasta">
                    Karyawan Swasta
                </option>
                <option value="Dosen">
                    Dosen
                </option>
                <option value="Mahasiswa">
                    Mahasiswa
                </option>
                <option value="Pelajar">
                    Pelajar
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
            Continue
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
