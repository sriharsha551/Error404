import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const UploadButton = () =>{
    return(
        <div id="upload">
        <input type="file"/>
        <ButtonGroup><Button color="primary" size="lg">Upload!</Button></ButtonGroup>
        </div>
    );
}
export default UploadButton;
