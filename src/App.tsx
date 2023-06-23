import { useState } from "react";
import Cwm_expandable from "./components/Cwm_expandable";

function App() {
  return (
    <>
      <Cwm_expandable maxCharacters={50}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt rem
        odit quis quaerat. In dolorem praesentium velit ea esse consequuntur cum
        fugit sequi voluptas ut possimus voluptatibus deserunt nisi eveniet!
      </Cwm_expandable>
    </>
  );
}

export default App;
