import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";
import Alert from "./Alerts";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const ContactUs = () => {
  const formRef = useRef();
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userMessageRef = useRef();
  const [alert, setAlert] = React.useState(null);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const requiredAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: "All fields are required.",
  };

  const inValidEmailAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: "Enter a valid email.",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !userNameRef.current.value ||
      !userEmailRef.current.value ||
      !userMessageRef.current.value
    ) {
      setAlert(requiredAlert);
      setTimeout(() => setAlert(null), 5000);
    } else if (!emailRegex.test(userEmailRef.current.value)) {
      setAlert(inValidEmailAlert);
      setTimeout(() => setAlert(null), 5000);
    } else {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlert(successAlert);
            formRef.current.reset();
            setTimeout(() => setAlert(null), 5000);
          },
          (error) => {
            console.log(error.text);
            setAlert(errorAlert);
            setTimeout(() => setAlert(null), 5000);
          }
        );
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        {/* <div className="shape shape-style-3 shape-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div> */}
        {alert && (
          <Alert
            color={alert.color}
            icon={alert.icon}
            message={alert.message}
          />
        )}
        <form ref={formRef} onSubmit={sendEmail}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Your project is very important to me.
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                        <Input
                          innerRef={userNameRef}
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                        <Input
                          innerRef={userEmailRef}
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        innerRef={userMessageRef}
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        onClick={sendEmail}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
