// Init
import React, { useEffect } from 'react';
// images
import Logo from '../../assets/Images/navbar_logo.svg';
import { ReactComponent as ContactIcon } from '../../assets/Images/navbar_contact_btn.svg';
import ServiceIcon from '../../assets/Images/navbar_service_icon.svg';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../utils/ScrollPosition';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// Component
export default function Navbar() {
  let position = useScrollPosition();
  const [menu, setMenu] = React.useState(false);
  const [Active, SetActive] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const myFunction = () => {
    SetActive(!Active);
  };
  return (
    <>
      <div
        className='navbarContainer'
        style={{ background: position <= 5 ? 'transparent' : '#1E1E1E' }}
      >
        <Link className='navbarLogoDiv' to='/'>
          <img className='navbarLogo' src={Logo} />
        </Link>
        <div className='navbarMenuContainer'>
          <ul className='navbarMenuDiv'>
            <Link style={{ color: '#b7b7b7', textDecoration: 'none' }} to='/'>
              <li>Home</li>
            </Link>
            <div className='navbarMenuServiveDropdown'>
              <div className='navbarMenuServiveDiv'>
                <li>Service</li>
                <img className='navbarMenuServiveIcon' src={ServiceIcon} />
              </div>
              <div id='a'>
                <ul style={{ listStyle: 'none' }}>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/webdevelopment'>
                    <li>Web Development</li>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/appdevelopment'>
                    <li>App Development</li>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/customsolutions'>
                    <li>Custom Solution</li>
                  </Link>
                </ul>
              </div>
            </div>

            <Link style={{ color: '#b7b7b7', textDecoration: 'none' }} to='/project'>
              <li>Projects</li>
            </Link>
            <Link style={{ color: '#b7b7b7', textDecoration: 'none' }} to='/ourvalues'>
              <li>Our Values</li>
            </Link>
            <Link style={{ color: '#b7b7b7', textDecoration: 'none' }} to='/about'>
              <li>About</li>
            </Link>
          </ul>
        </div>
        <Link className='navbarButtonContainer' to='/contactus'>
          <button className='navbarButton'>Contact</button>
          <ContactIcon className='navbarButtonIcon' color='#1e1e1e' />
        </Link>
        <div
          id='navbarToggleDiv'
          className={Active ? 'change' : 'container'}
          onClick={() => {
            myFunction();
            setMenu(!menu);
          }}
        >
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'>
            <div className='abc'></div>
          </div>
        </div>
      </div>
      {menu && (
        <div id='navbarToggleDiv' className='navbarMobMenuDiv'>
          <List
            sx={{
              width: '100%',
            }}
            component='nav'
            className='NavMenu_box'
          >
            <ListItemButton>
              <Link className='navbarMobMenuLink' to='/about'>
                <ListItemText id='Mob_items' primary='About' />
              </Link>
            </ListItemButton>
            <ListItemButton
              style={{ textDecoration: 'none', color: '#b7b7b7' }}
              onClick={handleClick}
            >
              <ListItemText primary='Services' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton
                  sx={{
                    pl: 6,
                  }}
                >
                  <Link className='navbarMobMenuLink' to='/webdevelopment'>
                    <ListItemText>
                      <div> WEB DEVELOPMENT</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <Link className='navbarMobMenuLink' to='/appdevelopment'>
                    <ListItemText>
                      <div> APP DEVELOPMENT</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <Link className='navbarMobMenuLink' to='/customsolutions'>
                    <ListItemText>
                      <div> CUSTOM SOLUTIONS</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/project`}>
                <ListItemText primary='Our Projects' />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/ourvalues`}>
                <ListItemText primary='Our Values' />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/contactus`}>
                <ListItemText primary='Contact Us' />
              </Link>
            </ListItemButton>
          </List>
        </div>
      )}
    </>
  );
}
