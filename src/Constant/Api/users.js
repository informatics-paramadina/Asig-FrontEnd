import axios from 'config/axios';

export default {
    login: (credentials) => axios.post("/login", credentials),
    register: (payload) => axios.post("/user", payload),
    details: () => axios.get("/auth-test") ,
    registerMiniGame: (payload) => axios.post("/register/minigame", payload),
    // registerPlayerGame: (payload) => axios.post("/register/game", payload),
    registerTalkShow: (payload) => axios.post("/register/talkshow", payload),
}