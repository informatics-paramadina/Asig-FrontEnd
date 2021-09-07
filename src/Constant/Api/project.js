import axios from 'config/axios';

const project = {
    animasi: () => axios.get('/animation-project')
}

export default project;
