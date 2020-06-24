import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navv from "./navv";
import Film from "./Film";

function home() {
  return (
    <div>
      <Navv />
      <Film />
    </div>
  );
}

export default home;
