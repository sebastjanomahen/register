import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import MakePdf from "../utils/pdf"
import Anamneza from "../components/Forme/Anamneza/Anamneza"

const Sprejemi = () => {
  const [ShowPDF, setShowPDF] = useState(false)

  return(
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Sprejemi"
          subtitle="KO za travmatologijo"
          className="text-sm-left"
        />
      </Row>

      <Row>
          <Col className="sm">
          {/* CARD ANAMNEZA */}
              <Card className="px-4">
                        <CardHeader className="border-bottom">
                          <h5 className="my-0">Anamneza</h5>
                        </CardHeader>
                        <Row className="mx-2 my-2">
                          <Col>
                          <Anamneza />
                     {/*     <Button onClick={() => setShowPDF(true)}>Potrdi</Button>
                          { ShowPDF ? <Row className="py-2 px-3"> <MakePdf /></Row> : null }
                      */}

                          </Col>
                      </Row>
                </Card>
          </Col>
          <Col className="sm"></Col>
      </Row>
    </Container>
  </div>
)};


export default Sprejemi;
