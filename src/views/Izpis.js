import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Izpis = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Izpis podatkov" subtitle="KO ZA TRAVMATOLOGIJO" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Primer izpisa podatkov:</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Ime
                  </th>
                  <th scope="col" className="border-0">
                    Priimek
                  </th>
                  <th scope="col" className="border-0">
                    Datum rojstva
                  </th>
                  <th scope="col" className="border-0">
                    Glavna diagnoza
                  </th>
                  <th scope="col" className="border-0">
                    Predpoškodbena mobilnost
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Janez</td>
                  <td>Petek</td>
                  <td>18.11.1942</td>
                  <td>Zlom vratu stegnenice</td>
                  <td>Pokreten brez opore</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Marija</td>
                  <td>Novak</td>
                  <td>19.2.1954</td>
                  <td>Pertrohanterni zlom</td>
                  <td>Nepokreten</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mihael</td>
                  <td>Jelšič</td>
                  <td>1.3.1960</td>
                  <td>Zlom diafize stegnenice</td>
                  <td>Pokreten brez opore</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Marjan</td>
                  <td>Božič</td>
                  <td>12.12.1967</td>
                  <td>Trimaleolarni zlom</td>
                  <td>Pokreten brez opore</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Izpis;
