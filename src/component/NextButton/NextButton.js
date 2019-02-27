import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './NextButton.css';

const NextButton = () =>{
    return(
        <div id="out">
        <div id = "next">
            <ButtonGroup><Button color="primary" size="lg">Next</Button></ButtonGroup>
        </div>
        <div id = "back">
            <ButtonGroup><Button color="primary" size="lg">Back</Button></ButtonGroup>
        </div>
        </div>
    );
}
export default NextButton;