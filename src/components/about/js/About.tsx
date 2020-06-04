import React, { useState } from "react";
import "../scss/About.scss"


const useFormInput=({initial=""})=>{
    const [value, setValue] = useState("")
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
      console.log(`new value is ${value}`)
      setValue(e.target.value)
    }
    return {
      value,
      onChange:handleChange
    }
}


export default function About (props: any){
    
    const  name = useFormInput({}),
      email = useFormInput({}),
      reason = useFormInput({})
    

      function onSubmit(){
        console.log("submit button clicked")
        if( email ){
          // email sending code comes here
        }
      }
  
    return (
      <div className="about-container">

      <div className="profile-container">
        <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="parmeshwar-c-5aa39523"><a className="LI-simple-link" href='https://in.linkedin.com/in/parmeshwar-c-5aa39523?trk=profile-badge'>Parmeshwar C.</a></div>
      </div>


        <div className="map-container">
          <p>
            <iframe title="my-location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7842241010835!2d73.82456131446641!3d18.448103687451198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29546a43ae0c7%3A0xa96ed534588f907e!2sRajanigandha%20Sakshi%20Heights!5e0!3m2!1sen!2sin!4v1589552467235!5m2!1sen!2sin" width="600" height="450" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0}></iframe>
          </p>

        </div>
      
        <div className="form">
          <h3> Contact Here </h3>
          <input type="text"
           placeholder="Name"
            {...name}

          />
          <input type="text"
            {...email}
            placeholder="Email"
          />

          <textarea className="resizable-text"
            {...reason}
            placeholder="Reason"
          />
          <button
            name="submit"
            value="Submit"
            onClick={()=>{onSubmit()}}
          >Submit</button>

        </div>
      </div>

    );
  
}
