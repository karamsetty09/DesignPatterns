import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
    return(
        <div>
            <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
            <SecondaryButton modifiers='large'>Goodbye World</SecondaryButton>
            <TertiaryButton  >Tertiary</TertiaryButton>
            <GlobalStyle></GlobalStyle>
        </div>
    )};

ReactDOM.render(<App/>, document.querySelector("#root"));
