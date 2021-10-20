import { Form, Row, Button, Col, FloatingLabel } from "react-bootstrap";

const Appointment = () => {

  return (
    <div>
      <Form className="container border border-info border-5 rounded">
        <div className="text-center p-3">
          <p className="">WE ALWAY READY HELPS YOU</p>
          <h1 className="fw-bold">
            Book An <span className="text-info">Appointment</span>
          </h1>
        </div>

        <div className="p-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold">Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Pataient Name" required/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold">Age:</Form.Label>
              <Form.Control type="number" placeholder="Enter Pataient Age" required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="fw-bold">Select a Department</Form.Label>
              <Form.Select defaultValue="select...">
                <option>Physical Medicine</option>
                <option>Surgical Department</option>
                <option>Neurology</option>
                <option>Radiology</option>
                <option>Dental</option>
                <option>surgery</option>
                <option>cardiology</option>
                <option>skin</option>
                <option>psychiatry</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold">Date:</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the date you want to get appointment"
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Address"
                className="mb-3"
              >
                <Form.Control as="textarea" placeholder="Enter your address" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label as="legend" column sm={2} className="fw-bold">
                Gender:
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3" required>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Other"
                    name="gender"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="fw-bold">City:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fw-bold">Phone:</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" required/>
            </Form.Group>
          </Row>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>

          <Button className="mt-5 px-5" variant="info" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Appointment;
