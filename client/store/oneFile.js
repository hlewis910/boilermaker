// import axios from 'axios'

// const ONE_FILE = 'ONE_FILE'

// const getOneFile = file => ({
//   type: ONE_FILE,
//   file
// })

// //THUNK
// export const fetchFile = id => async dispatch => {
//   try {
//     const {data} = await axios.get(`/api/files/${id}`)
//     dispatch(getOneFile(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export default function(state = {}, action) {
//   switch (action.type) {
//     case ONE_FILE:
//       return {...action.file}
//     default:
//       return state
//   }
// }
