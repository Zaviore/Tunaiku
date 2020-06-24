import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
function navv() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Swapiku</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Film</Nav.Link>
          <Nav.Link href="/People">People</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default navv;
