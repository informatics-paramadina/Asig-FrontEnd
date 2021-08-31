import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function errorHandler(error) {
    if (error) {
        let message;
        if(error.response) {
            if (error.response.status === 500){
                message = "hsfhihif"
            }
            else message = error.response.data.status;
            
            if(typeof message === "string"){
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }

            return Promise.reject(error)
        }
    }
}
