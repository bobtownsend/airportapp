import ReactFilestack, { client } from "filestack-react";
import React from "react";
import filestack from "../..filestack-test";
const apikey= "AVVEHpNSEGUPUuMss6c3gz";
const filestackDb = filestack.init(apikey);

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
/* onUpload(){
  console.log("Document Uploaded Successfully");
  return <h2>Document Uploaded Successfully</h2>
}
*/
renderPicker(){
  const ratio= 1/1;
  filestackDb.pick({
    transformations: {
      crop:{
        aspectRatio: ratio,
        force: true,
    }, circle:true,
    }
  }).then(response => {
    const image = response.filesUploaded[0].url;

    this.setState({
      imageUrl: image
    })
    })
  .catch(error => {
    console.log("ERROR", error)
  })
}

  /*render() {
    const options = {
      accept:["image/*"],
      minFiles:1,
      maxFiles:1,
      storeTo: {
        location:"s3"
      }
    }
    return (
//       <div>
//         <ReactFilestack
//           apikey={"AVVEHpNSEGUPUuMss6c3gz"}
//           buttonText="Upload Photo!"
//           buttonClass="classname"
//           options={options}
//           onSuccess={this.onUpload}
//         />
//       </div>
//     );
//   }
// }
    
*/
    return (
      <div>
        {this.state.imageUrl && <img style={{width: "15vw"}} src={this.state.imageUrl} />}
        <br />
        <button className="btn btn-primary" onClick={()=> this.renderPicker()}>UpLoad Profile Pictures</button>
      </div>
    );
  }
}
  
<button action='submit' className='btn btn-primary'>Sign up!</button>