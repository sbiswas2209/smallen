import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

export interface SpinnerProps {
    
}
 
const Spinner: React.FC<SpinnerProps> = () => {
    const styles = css`
        display: block;
        margin: 0 auto;
        align-center: true;
        padding: 40px;
        background-color:white;
    `;
    return ( <BarLoader css={styles} /> );
}
 
export default Spinner;