import axios from 'axios'


export const fetchUploads = ()  =>  async (dispatch) => {
    const response = await axios.get("http://localhost:3001/all_uploads")

    dispatch({type: 'FETCH_UPLOADS', payload: response.data})
}