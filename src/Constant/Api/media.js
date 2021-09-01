import axios from 'config/axios';

export default {
    upload: (image) => axios.post("/test-upload", {image}),
}