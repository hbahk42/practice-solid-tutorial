import type { Component } from "solid-js";
import { HelloWorld } from "./components/HelloWorld";

const App: Component = () => {
    return (
        <div>
            <header>
                <h1>Welcome</h1>
                <HelloWorld />
            </header>
        </div>
    );
};

export default App;