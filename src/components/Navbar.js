import React, { useState } from "react";
import { FaHome, FaCog } from "react-icons/fa";
import SettingsPanel from "./SettingsPanel";
import { Link } from "react-router-dom";

function Navbar() {

const [open,setOpen] = useState(false);

return (
<div className="navbar">

<Link to="/" className="navIcon">
<FaHome/>
</Link>

<button className="navIcon" onClick={()=>setOpen(!open)}>
<FaCog/>
</button>

{open && <SettingsPanel/>}

</div>
);
}

export default Navbar;