import React from 'react';
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavBar.css';

const HeaderNavBar = ({isLogged, name }) => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mainHeaderNavBar fixed-top">

    <Navbar.Brand>
      <Link className="title" to="/">
        <img className="icon" src="./img/logo.png" alt="Logo" />
        <h1>FindYourEvent</h1>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link>
          <Link className="item" to="/">
            <img className="icon" src="./img/home.png" alt="Home" />
            <span>Page d'accueil</span>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="item" to="/contactUs">
            <img className="icon" src="./img/contact.png" alt="Contact" />
            <span>Nous contacter</span>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="item" to="/aboutUs">
            <img className="icon" src="./img/infos.png" alt="Infos" />
            <span>À propos de nous</span>
          </Link>
        </Nav.Link>
        <Nav.Link>
          {isLogged?
            (<UserLogged name={name} />):
            (<UserNotLogged />)
          } 
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

const UserNotLogged = () => (
  <DropdownButton alignRight title="Mon compte" id="dropdown-menu-align-right">
    <Dropdown.Item>
      <Link className="item item-light" to="/signIn">
        <img className="icon" src="./img/signin.png" alt="Sign In" />
        <span>Connexion</span>
      </Link>
    </Dropdown.Item>
    <Dropdown.Item>
      <Link className="item item-light" to="/signUp">
        <img className="icon" src="./img/signup.png" alt="Sign Up" />
        <span>Inscription</span>
      </Link>
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>
      <Link className="item item-light" to="/restore">
        <img className="icon" src="./img/restore.png" alt="Restore" />
        <span>Récupération</span>
      </Link>
    </Dropdown.Item>
  </DropdownButton>
)

const UserLogged = ({name}) => (
  <DropdownButton alignRight title={name} id="dropdown-menu-align-right">
    <Dropdown.Item>
      <Link className="item item-light" to="/getProfile">
        <img className="icon" src="./img/user.png" alt="Get Profile" />
        <span>Mon profil</span>
      </Link>
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>
      <Link className="item item-light" to="/logOut" >
        <img className="icon" src="./img/exit.png" alt="logOut" />
        <span>Déconnexion</span>
      </Link>
    </Dropdown.Item>

  </DropdownButton>
)

export default HeaderNavBar