import { Navbar, NavbarBrand } from 'reactstrap';
import myProfile from '../app/assets/img/my-profile.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={myProfile} alt='my profile' />
            </NavbarBrand>
        </Navbar>)
};

export default Header;