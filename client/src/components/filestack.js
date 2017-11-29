import ReactFilestack, { client } from "filestack-react";
import React from "react";
import filestack from "filestack-js";
const apikey = "AVVEHpNSEGUPUuMss6c3gz";
const filestackDb = filestack.init(apikey);

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPicker() {
    const ratio = 1 / 1;
    filestackDb
      .pick({
        transformations: {
          crop: {
            aspectRatio: ratio,
            force: true
          },
          circle: true
        }
      })
      .then(response => {
        const image = response.filesUploaded[0].url;

        this.setState({
          imageUrl: image
        });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  render() {
    return (
      <center>
      <div>
        {this.state.imageUrl && (
          <img style={{ width: "15vw" }} src={this.state.imageUrl} />
        )}
        <br />
        <br></br>
        <center>
        <button className="btn btn-primary" onClick={() => this.renderPicker()}>
          UpLoad Profile Pictures
        </button>
        </center>
        <br></br>
      </div>
      </center>
    );
  }
}

<button action="submit" className="btn btn-primary">
  Sign up!
</button>;
