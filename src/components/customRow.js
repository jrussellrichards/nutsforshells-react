import React, { useState } from "react";
import customColumns from "../utils/columnsTable";

function CustomRow(props) {
  const { family, price, id } = props;

  return (
<>
<div>
        {family}
    </div>
    <div>
        {price}
    </div>
    </>
  );
}

export default CustomRow;
