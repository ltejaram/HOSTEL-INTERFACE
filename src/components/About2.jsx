import React from "react";

function About2(){
    return (
    <div className="first">
         <div className="insidesecond">
             <table cellSpacing="10px">
                 <tr>
                     <th>MESS</th>
                     <th>BATMINTON COURT</th>
                     <th>EXERCISE AREA</th>
                 </tr>
                 <tr>
                     <th><p>This is for C hostel students</p></th>
                     <th><p>Its very important for good health</p></th>
                     <th><p>Everyone Should do this</p></th>
                 </tr>
             </table>
         </div>
         <div className="insidesecond2">
         <img src="data:image/jpeg;base64,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" alt="games"></img>
         </div>
    </div>
    )
}
export default About2;