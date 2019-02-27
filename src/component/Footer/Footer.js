import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';

const FooterPage = () => {
  return (
    <div id="foot">
    <MDBFooter color="blue" className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">_Error404_</h5>
            <p>
             Pragati Engineering College,
            </p>
            <p>Suramplem</p>
            <p>Andhra Pradesh</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="http://pragati.ac.in/" target="_blank">Pragati College</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> IntelligentHawk.fasak </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;