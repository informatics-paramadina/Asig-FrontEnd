import axios from 'config/axios';

const project = {
    animasi: () => axios.get('/animation-project'),
    games: () => axios.get('/game-project'),
}

export default project;
