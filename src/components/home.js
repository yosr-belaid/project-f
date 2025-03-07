import React, { useState } from "react";
import {
  Nav,
  Container,
  Button,
  Carousel,
  Modal,
  Card,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/actions";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState("");
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Palestine",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setUploading(true);
    axios
      .post("/users/upload-image", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      password,
      gender,
      country,
      phoneNumber,
      height,
      weight,
      image,
    };
    dispatch(signup(formData));
    console.log("User Profile Created:", formData);
    setShowModal(false);
    navigate("/profile");
  };

  return (
    <div className="app" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <header className="hero-section">
        <div className="video-container">
          <video autoPlay muted loop className="bg-video">
            <source src="/videos/fitness.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="flexify-title">FLEXIFY</h1>
          {/* <p className="competition-quote">Your Only Competition is the Person You Were Yesterday!</p> */}
        </div>
      </header>

      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              src="/images/4.jpg"
              className="d-block w-100"
              alt="lifting"
              style={{ height: "770px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/5.jpg"
              className="d-block w-100"
              alt="strong"
              style={{ height: "770px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/6.jpg"
              className="d-block w-100"
              alt="running"
              style={{ height: "770px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="features">
        <Container>
          <Row>
            <Col md={4}>
              <Card
                className="feature-card"
                onClick={() => navigate("/trainer")}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/736x/ec/e7/4d/ece74d9febba53b45ca4eccb86c992f8.jpg"
                />
                <Card.Body>
                  <Card.Title>Expert Trainer</Card.Title>
                  <Card.Text>
                    Learn from the best to reach your fitness goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="feature-card"
                onClick={() => navigate("/workouts")}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/736x/ed/8c/e7/ed8ce73403b80bbcc5fbc595d0f574bf.jpg"
                />
                <Card.Body>
                  <Card.Title>Workouts for Everybody</Card.Title>
                  <Card.Text>
                    Custom workout plans tailored to your fitness level.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className="feature-card"
                onClick={() => navigate("/schedule")}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/736x/a8/59/e7/a859e7c23463e60de3ce32847a0ff70e.jpg"
                />
                <Card.Body>
                  <Card.Title>Workout Schedule</Card.Title>
                  <Card.Text>
                    Stay driven, stay disciplined—success follows those who
                    refuse to quit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer
        className="footer"
        style={{ backgroundColor: "#001f3f", color: "#fff", padding: "40px 0" }}
      >
        <Container>
          <p className="text-center mb-2">
            &copy; 2025 FLEXIFY . All rights reserved!
          </p>
          <Nav className="justify-content-center">
            <Nav.Link href="#privacy" className="text-light">
              Privacy Policy
            </Nav.Link>
            <Nav.Link href="#terms" className="text-light">
              Terms of Service
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </footer>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header style={{ backgroundColor: "black" }} closeButton>
                <Modal.Title>Create Your Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "black" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      onChange={(e) => setfullName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  {image ? (
                        <img
                          src={process.env.REACT_APP_BACKEND_URL+image}
                          width="100%"
                          style={{ margin: "8px 0" }}
                          height="150px"
                          alt="product"
                        />
                      ) : (
                        <div style={{ margin: "8px 0" }}>
                          {!uploading ? "Upload Image For Profile" : "Loading ..."}
                        </div>
                      )}
                  <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                   // startIcon={<CloudUploadIcon />}
                                  ></Button>
                                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Height (cm)</Form.Label>
                    <Form.Control
                      type="number"
                      name="height"
                      onChange={(e) => setHeight(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Weight (kg)</Form.Label>
                    <Form.Control
                      type="number"
                      name="weight"
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      as="select"
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                       // startIcon={<CloudUploadIcon />}
                      ></Button>
                      <option value="">Select your country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
                <p>
                  Already have an account?{" "}
                  <Button variant="link" onClick={() => {navigate("/SignIn"); setShowModal(false)}}>
                    Sign In
                  </Button>
                </p>
              </Modal.Body>
            </Modal>
    </div>
  );
}

export default Home;
