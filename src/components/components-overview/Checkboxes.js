import React from "react";
import { Col, FormCheckbox } from "shards-react";

const Checkboxes = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Tip zloma</strong>
    <fieldset>
      <FormCheckbox>Default</FormCheckbox>
      <FormCheckbox>Default</FormCheckbox>
      <FormCheckbox>Default</FormCheckbox>
      
    </fieldset>
  </Col>
);

export default Checkboxes;
