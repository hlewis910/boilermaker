// import React, {
//   Component
// } from 'react'
// import {
//   connect
// } from 'react-redux'
// import {
//   fetchFile
// } from '../store/oneFile'

// export class SoloFile extends Component {
//   componentDidMount() {
//     const specificFile = this.props.match.params.id
//     this.props.fetchSingleFile(specificFile)
//   }
//   render() {
//     const file = this.props.file
//     if (file && file.id) {
//       return ( <
//         div key = {
//           file
//         } >
//         <
//         h3 > {
//           file.sharePriceDate
//         } < /h3> <
//         h2 > {
//           file.companyId
//         } < /h2> <
//         h3 > {
//           file.companyName
//         } < /h3> <
//         span > {
//           file.sharePrice
//         } < /span> <
//         h2 > {
//           file.fileUpload
//         } < /h2> <
//         h1 > {
//           file.comments
//         } < /h1> <
//         /div>
//       )
//     } else {
//       return 'Loading'
//     }
//   }
// }

// const mapStateToProps = state => {
//   return {
//     file: state.oneFile
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSingleFile: function (id) {
//       return dispatch(fetchFile(id))
//     }
//   }
// }

// export const OneFile = connect(mapStateToProps, mapDispatchToProps)(SoloFile)
