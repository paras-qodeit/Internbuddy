import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const Certificate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const submitHandler = () => {
    console.log("Certificate");
  };
  return (
    <FormContainer>
      <h2>Apply for Certificate</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="transctionId">
          <Form.Label>Transaction Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your transctionId"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          //   disabled={isLoading}
          type="submit"
          variant="primary"
          className="mt-3"
        >
          Apply
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Certificate;
