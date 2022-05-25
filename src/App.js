import React from "react";
import BG from "./Components/Background/Bg";
import Nav from "./Components/Nav/Nav";
import Dock from "./Components/Dock/Dock";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BG />
			<Nav />
			<Dock />
		</div>
	);
}

export default App;
