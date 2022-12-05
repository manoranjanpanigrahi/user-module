import React, { useState } from "react";
import "./UserForm.css";
import { Form, Row, Col, Input, FormGroup, Button } from "reactstrap";

function UserForm() {
  // setting state for each of the input fields. blank by default
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shiftTiming, setShiftTiming] = useState("");
  const [department, setDepartment] = useState("");
  const [userRole, setUserRole] = useState("");

  // setting state to display error. by default set to false
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error === false) {
      // displaying error of form submit if fields are empty by setting errors = true
      setError(true);
    } else {
      // new user created message if the fields are not empty on form submit
      alert("form filled");

      // calling toggle function to hide the form once the user is created
      toggle();
    }
  };

  // setting default form state to be false and toggling it using button
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="openFormBtn">
        {/* create new user button to toogle the form */}
        <button
          onClick={toggle}
          style={{ display: isOpen ? "none" : "block" }}
          class="btn btn-dark px-3 py-2"
        >
          {" "}
          Create New User{" "}
        </button>
      </div>

      {/* Create User Form */}
      <Form
        className="form-container px-4 pt-4"
        style={{ display: isOpen ? "block" : "none" }}
        onSubmit={handleSubmit}
      >
        {/* button to close the form */}
        {/* <CloseIcon /> */}
        <span onClick={toggle}>
          <i class="fa-solid fa-xmark fa-lg"></i>
        </span>
        <h1 className="form-heading pb-4">Create New User</h1>
        <Row className="py-2">
          <Col>
            <FormGroup>
              <Input
                id="username"
                className="text-center"
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && (username.length <= 0 || username.length < 3) ? (
                <p className="text-danger text-center">
                  Username needs to be more than 2 characters
                </p>
              ) : null}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                id="email"
                className="text-center"
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && email.length <= 0 ? (
                <p className="text-danger text-center">
                  Enter correct Email Id
                </p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <FormGroup>
              <Input
                id="password"
                className="text-center"
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (password.length <= 0 || password.length <= 6) ? (
                <p className="text-danger text-center">
                  Password should be more than 6 characters
                </p>
              ) : null}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                id="confirmPassword"
                className="text-center"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && confirmPassword !== password ? (
                <p className="text-danger text-center">
                  Password does not match
                </p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            <FormGroup>
              <Input
                id="userRole"
                className="text-center"
                name="userRole"
                defaultValue={"default"}
                type="select"
                onChange={(e) => setUserRole(e.target.value)}
              >
                <option value={"default"} disabled>
                  Select Role
                </option>
                <option value="Developer">Developer</option>
                <option value="Marketer">Marketer</option>
                <option value="Calling">Calling</option>
                <option value="MIS">MIS</option>
              </Input>
              {error && userRole === "" ? (
                <p className="text-danger text-center">Select a User Role</p>
              ) : null}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                id="shiftTiming"
                className="text-center"
                defaultValue={"default"}
                name="shiftTiming"
                type="select"
                onChange={(e) => setShiftTiming(e.target.value)}
              >
                <option value={"default"} disabled>
                  Select Timing
                </option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
              </Input>
              {error && shiftTiming === "" ? (
                <p className="text-danger text-center">Select a Shift Timing</p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row className="py-2 justify-content-center ">
          <Col lg={8}>
            <FormGroup>
              <Input
                id="department"
                className="text-center"
                defaultValue={"default"}
                name="department"
                type="select"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value={"default"} disabled>
                  Select Department
                </option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
              </Input>
              {error && department === "" ? (
                <p className="text-danger text-center">Select a Department</p>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center py-3">
          <Button className="btn-danger ">Create New User</Button>
          {username ||
          email ||
          password ||
          confirmPassword ||
          shiftTiming ||
          department ||
          userRole ? (
            <Button className="btn-info mt-2" type="reset">
              Reset Form Data
            </Button>
          ) : null}
        </Row>
      </Form>
    </div>
  );
}

export default UserForm;
