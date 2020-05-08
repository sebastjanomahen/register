import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const MojProfil = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Ime in priimek uporabnika" subtitle="KO ZA TRAVMATOLOGIJO" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="5">
        <UserDetails />
      </Col>
      <Col lg="7">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default MojProfil;
