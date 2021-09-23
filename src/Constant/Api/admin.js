import axios from 'config/axios';

const admin = {
    team: () => axios.get('/data/team'),
}

export default admin;