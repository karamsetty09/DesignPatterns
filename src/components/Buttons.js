import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const primaryBlue = "#046B65";
const secondaryBlue = "#008080";
const backgroundLime = "#C7EA46";

const Button = styled.button`
padding: 12px 24px;
font-size: ${typeScale.paragraph};
border-radius: 2px;
min-width: 100px;
cursor: pointer;
font-family: "Roboto Mono", monospace;
transition: background-color 0.2s linear, color 0.2s linear;

&:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
}

&:focus{
    outline: 3px solid ${defaultTheme.primaryActiveColor}
    outline-offset: 2px;
}
&:active{
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary}
}
`;

const PrimaryButton = styled(Button)`
background-color: ${primaryBlue};
border: none;
color: white;
&:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    border-color: ${defaultTheme.disabled}
    cursor: not-allowed;
}
`;

export const SecondaryButton = styled(Button)`
background-color: none;
border: 2px solid ${primaryBlue};
color: ${primaryBlue};
&:disabled {
    background-color: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
}
`;

export const TertiaryButton = styled(Button)`
background-color: none;
border: none;
color:  ${primaryBlue};

&:disabled {
    background-color: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
}
`;

export default PrimaryButton; 