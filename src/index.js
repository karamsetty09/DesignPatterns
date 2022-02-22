import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {SecondaryButton, TertiaryButton} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
    return(
        <div>
            <PrimaryButton  disabled >Hello World </PrimaryButton>
            <SecondaryButton  disabled>My color</SecondaryButton>
            <TertiaryButton  >Tertiary</TertiaryButton>
            <GlobalStyle></GlobalStyle>
        </div>
    )};

ReactDOM.render(<App/>, document.querySelector("#root"));
