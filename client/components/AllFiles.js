import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchFiles} from '../store/files'

export class Files extends Component {
  componentDidMount() {
    this.props.fetchFiles()
  }

  render() {
    return (
      <div>
        {this.props.files.map(file => {
          return (
            <div key={file.id}>
              <h2>{file.sharePriceDate}</h2>
              <h2>{file.companyId}</h2>
              <h3>{file.companyName}</h3>
              <span>{file.sharePrice}</span>
              <h2>{file.comments}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    files: state.files
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFiles: function() {
      return dispatch(fetchFiles())
    }
  }
}

export const AllFiles = connect(mapStateToProps, mapDispatchToProps)(Files)
