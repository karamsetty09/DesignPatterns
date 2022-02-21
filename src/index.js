import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Buttons";
const App = () => {
    return(
        <div>
            <PrimaryButton>Hello World </PrimaryButton>
            
            <SecondaryButton>My color</SecondaryButton>
             
            <TertiaryButton>Tertiary</TertiaryButton>
        </div>
    )};

ReactDOM.render(<App/>, document.querySelector("#root"));
