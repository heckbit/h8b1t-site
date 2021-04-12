import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Stream from "./Components/Stream";
import { Navbar, Nav, Image } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='bg'>
        <Navbar bg='dark' variant='dark' sticky='top'>
          <Navbar.Brand>
            {/* <Image
              alt='logo'
              src='https://static-cdn.jtvnw.net/jtv_user_pictures/e69efaf7-26c4-458d-87f0-a871b2486b4b-profile_image-70x70.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
              rounded
            /> */}
            jacob.
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='projects'>Projects</Nav.Link>
            <Nav.Link href='stream'>Stream</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/stream'>
            <Stream />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
