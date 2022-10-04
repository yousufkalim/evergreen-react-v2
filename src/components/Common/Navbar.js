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
import { useLocation } from 'react-router-dom';
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
  const menuRoute = window.location.pathname;

  let { pathname } = useLocation();
  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, [pathname]);
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
            <Link className='navbarMenuLinks' to='/'>
              <li id={menuRoute === '/' ? 'disableId' : 'menuId'}>Home</li>
            </Link>
            <div className='navbarMenuServiveDropdown'>
              <div className='navbarMenuServiveDiv'>
                <li>Service</li>
                <img className='navbarMenuServiveIcon' src={ServiceIcon} />
              </div>
              <div id='a'>
                <ul style={{ listStyle: 'none' }}>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/webdevelopment'>
                    <li id={menuRoute === '/webdevelopment' ? 'disableId' : 'menuId'}>
                      Web Development
                    </li>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/appdevelopment'>
                    <li id={menuRoute === '/appdevelopment' ? 'disableId' : 'menuId'}>
                      App Development
                    </li>
                  </Link>
                  <Link style={{ textDecoration: 'none', color: '#b7b7b7' }} to='/customsolutions'>
                    <li id={menuRoute === '/customsolutions' ? 'disableId' : 'menuId'}>
                      Custom Solution
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <Link className='navbarMenuLinks' to='/project'>
              <li id={menuRoute === '/project' ? 'disableId' : 'menuId'}>Projects</li>
            </Link>
            <Link className='navbarMenuLinks' to='/ourvalues'>
              <li id={menuRoute === '/ourvalues' ? 'disableId' : 'menuId'}>Our Values</li>
            </Link>
            <Link className='navbarMenuLinks' to='/about'>
              <li id={menuRoute === '/about' ? 'disableId' : 'menuId'}>About</li>
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
            if (!menu) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'visible';
            }
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
                <ListItemText
                  id={menuRoute === '/about' ? 'disableId' : 'menuId'}
                  primary='About'
                />
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
                    <ListItemText id={menuRoute === '/webdevelopment' ? 'disableId' : 'menuId'}>
                      <div> WEB DEVELOPMENT</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <Link className='navbarMobMenuLink' to='/appdevelopment'>
                    <ListItemText id={menuRoute === '/appdevelopment' ? 'disableId' : 'menuId'}>
                      <div> APP DEVELOPMENT</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <Link className='navbarMobMenuLink' to='/customsolutions'>
                    <ListItemText id={menuRoute === '/customsolutions' ? 'disableId' : 'menuId'}>
                      <div> CUSTOM SOLUTIONS</div>
                    </ListItemText>
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/project`}>
                <ListItemText
                  id={menuRoute === '/project' ? 'disableId' : 'menuId'}
                  primary='Our Projects'
                />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/ourvalues`}>
                <ListItemText
                  id={menuRoute === '/ourvalues' ? 'disableId' : 'menuId'}
                  primary='Our Values'
                />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link className='navbarMobMenuLink' to={`/contactus`}>
                <ListItemText
                  id={menuRoute === '/contactus' ? 'disableId' : 'menuId'}
                  primary='Contact Us'
                />
              </Link>
            </ListItemButton>
          </List>
        </div>
      )}
    </>
  );
}
