import React from "react";
import About from "./About.jsx";
import About2 from "./About2.jsx";
import About3 from "./About3.jsx";
import About4 from "./About4.jsx";
import About5 from "./About5.jsx";
import Header from "./Header.jsx";

function App(){
    return (
        <div>
            <Header/>
            <h1 className="name1">C HOSTEL</h1>
            <About/>
            <h1 className="name">FACILITIES</h1>
            <About2/>
            <h1 className="name">ADMINISTRATION</h1>
            <About3/>
            <h1 className="name">ARCHIVES</h1>
            <About4/>
            <h1 className="name">SLIDING GALLERY</h1>
            <About5/>
        </div>
    )
}
export default App;