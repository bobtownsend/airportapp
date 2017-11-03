import ReactFilestack, { client } from "filestack-react";
import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpload(result) {
    this.setState({ uploadedFiles: result.filesUploaded});
    console.log(result.filesUploaded[0]);
  }

  render() {
    const options = {
      accept: "link(url)",
      accept: ["image/*"],
      maxFiles: 1,
      minFiles:1,
      maxSize:150 *150,
      storeTo: {
        location: "s3"
      }
    };

    return (
      <div>
        <ReactFilestack
          apikey={"AFADgP4mQICNxkczq4zSpz"}
          buttonText="Upload Photo"
          buttonClass="classname"
          options={options}
          onSuccess={this.onUpload}
        />
      </div>
    );
  }
}
  
<button action='submit' className='btn btn-primary'>Sign up!</button>