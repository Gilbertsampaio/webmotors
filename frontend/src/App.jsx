import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Home } from "./pages/home";
class App extends Component {

	render() {

		return (
			<div className="App">
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;