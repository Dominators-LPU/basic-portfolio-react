import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import sectionData from "./sectionData";
import Footer from "./Components/Footer";

const App = () => {


    return (
        <div>
            <Navbar />
            <AboutMe />
             {
                 sectionData.map((data)=>(
                       <Section 
                        title={data.title}
                        description={data.description}
                       />
                 ))
             }

            <Footer />

        </div>
    );
}
export default App;


// if else = > ternary operator

// loops => map, filter, reduce (higher order functions)