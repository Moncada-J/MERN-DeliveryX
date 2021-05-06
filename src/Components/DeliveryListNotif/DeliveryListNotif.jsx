import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

export default function DeliveryListNotif({ user, setUser }) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">DeliveryX Team</strong>
            <small>A few mins ago</small>
          </Toast.Header>
          <Toast.Body>Reporting for Duty, {user.name}! 👋  <br /> It's a beautiful day to deliver packages to our customers! </Toast.Body>
           <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">DeliveryX Team</strong>
            <small>A few mins ago</small>
          </Toast.Header>
          <Toast.Body> Don't forget to start your shift off by adding your routes to your queue. This will help you track your order of deliveries and send updates to customers quicker. 💨  </Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}><FontAwesomeIcon className="appIcon" icon={faThumbtack} size="3x"/>Notifications</Button>
      </Col>
    </Row>
  );
}
