import {useState} from 'react'

export default function useForm(initialValue) {
    const [state, setstate] = useState(initialValue);
    return [
        state,
        (ev) => {
            setstate({
                ...state,
                [ev.target.name]: ev.target.value
            })
        }
    ]
}
