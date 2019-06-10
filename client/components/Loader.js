import React, {Component} from 'react'
import papa from 'papaparse'

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      csvfile: undefined
    }
    this.updateData = this.updateData.bind(this)
  }

  handleChange = e => {
    this.setState({
      csvfile: e.target.files[0]
    })
  }

  importCSV = () => {
    const {csvfile} = this.state
    papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    })
  }

  updateData(result) {
    let data = result.data
    console.log('data', data)
  }

  render() {
    console.log(this.state.csvfile)
    return (
      <div className="App">
        <h2>CSV </h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <button onClick={this.importCSV}> Upload</button>
      </div>
    )
  }
}

export default Loader
