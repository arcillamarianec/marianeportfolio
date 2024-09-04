import React from "react";
import Homepage from "../pages/homepage";

function Mainlayout() {
  return (
      <div className="App">
          <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
          </style>
          <script src="sweetalert2.min.js"></script>
          <link rel="stylesheet" href="sweetalert2.min.css"/>
          <Homepage/>
          <div className="credits ubuntu-regular">
              Design inspired by Ubuntu | Coded by Mariane Christene Arcilla<br/>
              Attributions: Icons from <a href="https://www.flaticon.com/">Flaticon</a> & React | Logos & Photos from Google Images
          </div>
      </div>
  );
}
export default Mainlayout;
