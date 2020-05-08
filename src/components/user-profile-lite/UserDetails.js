import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Spremeni sliko
      </Button>
    </CardHeader>
    <ListGroup>
      <ListGroupItem className="py-1"><strong className="text-muted d-block">{userDetails.metaTitle}</strong></ListGroupItem>
      <ListGroupItem className="py-0"><span>{userDetails.metaTypeValue1}: </span><strong>{userDetails.metaValue1}</strong></ListGroupItem>
      <ListGroupItem className="py-0"><span>{userDetails.metaTypeValue2}: </span><strong>{userDetails.metaValue2}</strong></ListGroupItem>
      <ListGroupItem className="py-0"><span>{userDetails.metaTypeValue3}: </span><strong>{userDetails.metaValue3}</strong></ListGroupItem>
      <ListGroupItem className="pt-0"><span>{userDetails.metaTypeValue4}: </span><strong>{userDetails.metaValue4}</strong></ListGroupItem>
    </ListGroup>

  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Janez Novak",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Zdravnik specialist",
    metaTitle: "Osebna statistika:",
    metaTypeValue1:'Število operacij v mesecu Aprilu: ',
    metaValue1: "31",
    metaTypeValue2:'Najpogostejša operacija: ',
    metaValue2: "OS - pertrohanetrni zlom",
    metaTypeValue3:'Povprečno število ambulatnih pregledov: ',
    metaValue3: "42",
    metaTypeValue4:'Pacienti, ki obiščejo zadnjo kontrolo: ',
    metaValue4: "60 %",
  }
};

export default UserDetails;
