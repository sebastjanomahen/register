import React from "react";
import {
  Container,
  Row,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


const Kontrole = () => (
  <div>
    <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> Prazna stran.
      </Alert>
    </Container>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Kontrole"
          subtitle="KO ZA TRAVMATOLOGIJO"
          className="text-sm-left"
        />
      </Row>
      </Container>

  </div>
);

export default Kontrole;
