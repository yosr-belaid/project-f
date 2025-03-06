import React, { useState } from "react";
import {  Nav, Container, Button, Carousel, Modal, Card, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/actions";


function Home() {
const navigate = useNavigate();
const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    phone: "",
    height: "",
    weight: ""
  });

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines","Palestine", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData))
    console.log("User Profile Created:", formData);
    setShowModal(false);
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
                    style={{ height: '770px', objectFit: 'cover' }} 
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    src="/images/5.jpg"
                    className="d-block w-100" 
                    alt="strong" 
                    style={{ height: '770px', objectFit: 'cover' }} 
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img 
                    src="/images/6.jpg" 
                    className="d-block w-100" 
                    alt="running" 
                    style={{ height: '770px', objectFit: 'cover' }} 
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
              <Card.Img variant="top" src="https://i.pinimg.com/736x/ec/e7/4d/ece74d9febba53b45ca4eccb86c992f8.jpg" />
              <Card.Body>
                <Card.Title>Expert Trainer</Card.Title>
                <Card.Text>Learn from the best to reach your fitness goals.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card 
              className="feature-card" 
              onClick={() => navigate("/workouts")} 
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/736x/ed/8c/e7/ed8ce73403b80bbcc5fbc595d0f574bf.jpg" />
              <Card.Body>
                <Card.Title>Workouts for Everybody</Card.Title>
                <Card.Text>Custom workout plans tailored to your fitness level.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card 
              className="feature-card" 
              onClick={() => navigate("/schedule")} 
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src="https://i.pinimg.com/736x/a8/59/e7/a859e7c23463e60de3ce32847a0ff70e.jpg" />
              <Card.Body>
                <Card.Title>Workout Schedule</Card.Title>
                <Card.Text>Stay driven, stay disciplined—success follows those who refuse to quit.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      </section>
      
            
            <footer className="footer" style={{ backgroundColor: "#001f3f", color: "#fff", padding: "40px 0" }}>
              <Container>
                <p className="text-center mb-2">&copy; 2025 FLEXIFY . All rights reserved!</p>
                <Nav className="justify-content-center">
                  <Nav.Link href="#privacy" className="text-light">Privacy Policy</Nav.Link>
                  <Nav.Link href="#terms" className="text-light">Terms of Service</Nav.Link>
                  <Nav.Link href="#contact" className="text-light">Contact Us</Nav.Link>
                </Nav>
              </Container>
            </footer>
            
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" name="gender" value={formData.gender} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Height (cm)</Form.Label>
                    <Form.Control type="number" name="height" value={formData.height} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Weight (kg)</Form.Label>
                    <Form.Control type="number" name="weight" value={formData.weight} onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" name="country" value={formData.country} onChange={handleChange}>
                      <option value="">Select your country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">Create Profile</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        );
      }
      
      export default Home;
      
      