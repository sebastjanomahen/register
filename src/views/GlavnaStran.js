import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Progress, Card, CardHeader } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SmallStats from "../components/common/SmallStats";
import UsersOverview from "../components/blog/UsersOverview";
import UsersByDevice from "../components/blog/UsersByDevice";

const GlavnaStran = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Statistika oddelka" subtitle="KO za travmatologijo" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      <Col>
        <Row>
            <Col>Današnja statistika: </Col>
        </Row>
        <Row>
                {smallStats.map((stats, idx) => (
                <Col className="col-lg mb-2" key={idx} {...stats.attrs}>
                  <SmallStats
                    id={`small-stats-${idx}`}
                    variation="1"
                    chartData={stats.datasets}
                    chartLabels={stats.chartLabels}
                    label={stats.label}
                    value={stats.value}
                    percentage={stats.percentage}
                    increase={stats.increase}
                    decrease={stats.decrease}
                  />
                </Col>
              ))}
        </Row>
      </Col>
    </Row>
    <Row className="mb-2">
      <Col>
          <Card>
            <CardHeader className="border-bottom pb-0 pt-2"><h6>Stanje v operacijskih dvoranah:</h6></CardHeader>
                  <Row><Col className="px-5 py-1">
                      <Row className="border-bottom pb-1">
                            <Col><span>Operacijska</span></Col>
                            <Col><span></span>Diagnoza</Col>
                            <Col><span>Stanje v operacijski</span></Col>
                            <Col><span></span>Čas od reza</Col>
                            <Col><span></span>Opombe</Col>
                        </Row>  
                      <Row>
                          <Col><span className="lead">Operacijska 42:</span></Col>
                          <Col className="pt-1 font-weight-light"><span></span>Zlom vratu stegnenice</Col>
                          <Col className="pt-1"><Progress theme="success" value={90}>90 %</Progress></Col>
                          <Col className="pt-1 font-weight-light"><span></span>00:58:12</Col>
                          <Col className="pt-1 font-weight-light"><span></span>Šivanje</Col>
                        </Row>
                      <Row>
                          <Col><span className="lead">Zaloška I:</span></Col>
                          <Col className="pt-1 font-weight-light"><span></span>Zlom distalnega radiusa</Col>
                          <Col className="pt-1"><Progress theme="danger" value={19}>19 %</Progress></Col>
                          <Col className="pt-1 font-weight-light"><span></span>00:12:12</Col>
                          <Col className="pt-1 font-weight-light"><span></span>Začetek</Col>
                        </Row>
                      <Row>
                          <Col><span className="lead">Zaloška II:</span></Col>
                          <Col className="pt-1 font-weight-light"><span>Zlom diafize golenice</span></Col>
                          <Col className="pt-1"><Progress theme="info" value={100}>-</Progress></Col>
                          <Col className="pt-1 font-weight-light"><span></span>00:00:00</Col>
                          <Col className="pt-1 font-weight-light"><span></span>Čiščenje</Col>
                        </Row>    
                  </Col></Row>
            

          </Card>

      </Col>
    </Row>

    <Row>
      {/* Število sprejemov graf */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>
      {/* Najpogostejši zlomi > 65 let */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>
    </Row>
  </Container>
);

GlavnaStran.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

GlavnaStran.defaultProps = {
  smallStats: [
    {
      label: "Število operacij",
      value: "21",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [8, 2, 1, 3, 5, 6, 8]
        }
      ]
    },
    {
      label: "Število repozicij",
      value: "132",
      percentage: "0,2%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Število sprejetih",
      value: "56",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    }
  ]
};

export default GlavnaStran;
