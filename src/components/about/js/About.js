import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import "../scss/About.scss"

export class About extends Component {

  state = {
    uploadPercentage: 0,
    avatar: ''
  }

  componentDidMount = () => {
    const { avatar } = this.props;
    this.setState({ avatar })
  }

  uploadFile = ({ target: { files } }) => {
    console.log(files[0])
    let data = new FormData();
    data.append('file', files[0])

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent })
        }
      }
    }

    axios.post("https://www.mocky.io/v2/5cc8019d300000980a055e76", data, options).then(res => {
      console.log(res)
      this.setState({ avatar: res.data.url, uploadPercentage: 100 }, () => {
        setTimeout(() => {
          this.setState({ uploadPercentage: 0 })
        }, 1000);
      })
    })
  }

  render() {
    const { uploadPercentage } = this.state;
    return (
      <div className="container">
        {/* <a href="#">
          <input type="file" className="form-control file-uploader" onChange={this.uploadFile} />
          {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />}
        </a> */}
        <div>
          <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7842241010835!2d73.82456131446641!3d18.448103687451198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29546a43ae0c7%3A0xa96ed534588f907e!2sRajanigandha%20Sakshi%20Heights!5e0!3m2!1sen!2sin!4v1589552467235!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </p>

      
        </div>
      </div>

    );
  }
}

export default About;