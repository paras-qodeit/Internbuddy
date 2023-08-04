import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { usePaymentHandleMutation } from "../slices/apiSlice";
import { toast } from "react-toastify";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentHandle, { isLoading }] = usePaymentHandleMutation();

  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await paymentHandle({ name, email, phone, amount }).unwrap();
      if (res) {
        toast.success("Payment Successfully!");
      } else {
        toast.error("Payment Failed!");
      }
    } catch (error) {
      toast.error("Payment Failed!");
    }
  };
  return (
    <FormContainer>
      <Form onSubmit={paymentHandler}>
        <h1>Payment</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          disabled={isLoading}
          type="submit"
          variant="primary"
          className="mt-3"
        >
          Pay
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Payment;
