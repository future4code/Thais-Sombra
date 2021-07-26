import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const addPost = (body, clear, history) => { 
    axios.post(
        `${BASE_URL}/posts`,
        body, 
        {headers:{Authorization: localStorage.getItem('token')}})
    .then((res)=>{
        console.log(res)
        //clear()
        goToFeed(history)
    })
    .catch((err)=>alert(err.response.data.message))
}
