import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useCertificateReqMutation } from "../slices/apiSlice";
import { toast } from "react-toastify";

const Certificate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [Certificate, { isLoading }] = useCertificateReqMutation();

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    // console.log("Certificate");
    e.preventDefault();
    try {
      const res = await Certificate({
        name,
        email,
        courseName,
        transactionId,
      }).unwrap();
      if (res) {
        toast.success("Successfully applied!");
      }
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
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
