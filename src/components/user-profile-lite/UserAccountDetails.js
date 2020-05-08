import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* Ime */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">Ime</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Janez"
                    onChange={() => {}}
                  />
                </Col>
                {/* Priimek */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Priimek</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Novak"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">E-naslov</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="neki@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Geslo</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>

              <Row form>
                {/* Delovno mesto */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">Delovno mesto:</label>
                  <FormSelect id="feInputState">
                    <option>Zdravnik specialist</option>
                    <option>Zdravnik specializant</option>
                    <option>Zdravnik ostalo</option>
                    <option>Diplomirana medicinska sestra</option>
                    <option>Medicinska sestra</option>
                    <option>Bolničar</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                {/* Oddelek */}
                <Col md="6" className="form-group">
                  <label htmlFor="feInputState">Oddelek</label>
                  <FormSelect id="feInputState">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>G</option>
                  </FormSelect>
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">Naslov prebivališča:</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="Dunajska cesta 1, 1000 Ljubljana"
                  onChange={() => {}}
                />
              </FormGroup>
              

              <Button theme="accent">Posodobi</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Podatki o zaposlenem"
};

export default UserAccountDetails;
