import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import companyLogo from '../assets/pfw-logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={companyLogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">10 Years of powerful women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our board</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Energy leaders' coalition</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our sponsors & partners</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ambassadors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Newsletter</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our aim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Career Case Studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Company Case Studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mentoring</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Coaching</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sponsorship</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Career resources</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">What can you do?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">What can companies do?</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Challenge" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">A Manifesto for 40 by 30 … and beyond</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Our aim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Company statistics 2024</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Company statistics 2023</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Company statistics 2022</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Women in Middle Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pledges</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Current state of gender diversity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Business case for diversity</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our aim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Upcoming Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Past Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">POWERful Women Annual Conference 2022</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Networking</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="News & Insights" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Latest News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">POWERful Women in the News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Publications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Videos and Podcasts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Submit</Button>
                </Col>
                </Row>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;