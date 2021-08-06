import axios from 'axios'

// action creator returns a function, thunk middleware executes it

export const fetchUploads = ()  =>  async (dispatch) => {
    const response = await axios.get("http://localhost:3001/all_uploads")

    dispatch({type: 'FETCH_UPLOADS', payload: response.data})
}