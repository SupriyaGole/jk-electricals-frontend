import React from "react";
import * as PropTypes from "prop-types";
import "./pageHeader.scss";
import {Nav, Navbar} from "react-bootstrap";

const PageHeader = ({title}) => {
  return (
    <header className="page-header">
      <h1 className="page-title">{title}</h1>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
