import ReactFilestack, { client } from "filestack-react";
import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpload() {
    console.log("Document Uploaded Successfully");
    return <h2>Document Uploaded sccessfully</h2>;
  }

  render() {
    const options = {
      accept: ["image/*"],
      minFiles:1,
      maxFiles: 1,
      storeTo: {
        location: "s3"
      }
    };
    return (
      <div>
        <ReactFilestack
          apikey={"AVVEHpNSEGUPUuMss6c3gz"}
          buttonText="Upload Photo!"
          buttonClass="classname"
          options={options}
          onSuccess={this.onUpload}
        />
      </div>
    );
  }
}