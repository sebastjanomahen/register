import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>500</h2>
        <h3>Ta stran ne obstaja!</h3>
        <p>Nastal je problem.</p>
        <Button pill>&larr; Pojdi domov</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
