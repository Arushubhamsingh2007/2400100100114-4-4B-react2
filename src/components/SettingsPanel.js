import React from "react";

function SettingsPanel(){

function changeTheme(){
document.body.classList.toggle("light");
}

function increaseFont(){
document.body.style.fontSize="20px";
}

return(
<div className="settings">

<button onClick={changeTheme}>Toggle Theme</button>
<button onClick={increaseFont}>Increase Font</button>

</div>
);
}

export default SettingsPanel;