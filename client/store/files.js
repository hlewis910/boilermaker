import axios from 'axios'

const ALLFILES = 'ALLFILES'

const getAllFiles = files => ({
  type: ALLFILES,
  files
})

//Thunk
export const fetchFiles = () => async dispatch => {
  try {
    const {data} = await axios.get(`api/files`)
    dispatch(getAllFiles(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case ALLFILES:
      return action.files
    default:
      return state
  }
}
