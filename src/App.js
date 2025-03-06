import React, { useState , useEffect } from "react";
import { Navbar, Nav, Container, Button, Carousel, Modal, Card, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Trainer from "./components/Trainer";
import Schedule from "./components/Schedule";
import Workouts from './components/workouts';
import Leaderboard from './components/leaderboard';
import Profile from './components/profile';
import Home from "./components/home";
import WorkoutList from "./components/WorkoutList";
import WorkoutDetails from "./components/WorkoutDetails";
import { useNavigate } from "react-router-dom";
import { signup } from "./Redux/actions";
import { useDispatch } from "react-redux";
import SignIn from "./components/SignIn";


function App() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch()
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   gender: "",
  //   country: "",
  //   phoneNumber: "",
  //   height: "",
  //   weight: ""
  // });

  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")

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
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Palestine", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

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
      weight
    }
    dispatch(signup(formData))
    console.log("User Profile Created:", formData);
    setShowModal(false);
  };

  return (

    <div className="app" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navbar expand="lg"
        className={`navbar-custom ${scrolling ? "scrolled" : ""}`}
        style={{ backgroundColor: "#001f3f" }}>
        <Container>
        <Navbar.Brand onClick={() => navigate("/")} className="brand text-light" style={{ cursor: "pointer" }}>FLEXIFY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-light">Home</Nav.Link>
              <Nav.Link href="/profile" className="text-light">Profile</Nav.Link>
              <Nav.Link href="/leaderboard" className="text-light">leaderboard</Nav.Link>
              <Nav.Link href="/workouts" className="text-light">Workout</Nav.Link>
            </Nav>
            <Button variant="info" className="ms-3" onClick={() => setShowModal(true)}>Join Now</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={() => setShowModal(false)} >
        <Modal.Header style={{backgroundColor: "black"}} closeButton>
          <Modal.Title>Create Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "black"}}>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" onChange={(e)=> setfullName(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={(e)=> setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" name="gender" onChange={(e)=> setGender(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="phone" onChange={(e)=> setPhoneNumber(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control type="number" name="height" onChange={(e)=> setHeight(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control type="number" name="weight" onChange={(e)=> setWeight(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" name="country" onChange={(e)=> setCountry(e.target.value)}>
                <option value="">Select your country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
          <p>
        Already have an account?{" "}
        <Button variant="link" onClick={() => navigate("/SignIn")}>Sign In</Button>
      </p>
        </Modal.Body>
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<WorkoutList />} />
        <Route path="/workouts/:level" element={<WorkoutDetails />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>


    </div>
  );
}

export default App;

