import {FETCH_PROJECT} from 'Constant/Type/user';

export const fetchProject = (data) => ({
    type: FETCH_PROJECT,
    payload: data
})