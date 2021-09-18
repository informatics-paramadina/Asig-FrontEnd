import axios from 'config/axios';

const users = {
    login: (credentials) => axios.post("/login", credentials),
    register: (payload) => axios.post("/user", payload),
    details: () => axios.get("/auth-test") ,
    registerMiniGame: (payload) => axios.post("/daftar/minigame", payload),
    registerTalkShow: (payload) => axios.post("/daftar/talkshow", payload),
}

export default users;