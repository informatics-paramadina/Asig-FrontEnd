import axios from 'config/axios';

const users = {
    registerMiniGame: (payload) => axios.post("/daftar/minigame", payload),
    registerTalkShow: (payload) => axios.post("/daftar/talkshow", payload),
}

export default users;