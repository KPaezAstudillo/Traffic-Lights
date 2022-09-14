import React, { useState } from "react";


//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");
	return (
		<>
			<div id="stick"></div>
			<div id="box">
				<div onClick={() => setColor("red")} className={"red" + " " + (color === "red" ? "selected" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"yellow" + " " + (color === "yellow" ? "selected" : "")}></div>
				<div onClick={() => setColor("green")} className={"green " + " " + (color === "green" ? "selected" : "")}></div>
			</div>
		</>
	);
};

export default TrafficLight;
