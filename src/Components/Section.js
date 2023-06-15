
// import React from "react"; 

const Section = (props) => {

    // props = {title: "Skills", description:"Here are some of my skills"}
    
        return(
            <div className="section">
                 <hr />
                <h1> {props.title} </h1>
                <p> {props.description} </p>
            </div>
        )
}

export default Section;