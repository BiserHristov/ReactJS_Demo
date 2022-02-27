import style from './Header.module.css'
import NavigationItem from './NavigationItem'

import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/'><NavigationItem>Home</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about'><NavigationItem>About</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/contact-us'><NavigationItem>Contact us</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/pesho'><NavigationItem>Going to 4</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/gosho'><NavigationItem>Going to 5</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/stamat'><NavigationItem>Going to 6</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/mariyka'><NavigationItem>Going to 7</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/malinka'><NavigationItem>Going to 8</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/tosho'><NavigationItem>Going to 9</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/plamen'><NavigationItem>Going to 10</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to='/about/veselin'><NavigationItem>Going to 11</NavigationItem></NavLink >
                <NavLink className={(navData) => navData.isActive ? 'active-navigation-item' : ''} to="/about">ABOUT PAGE</NavLink >
            </ul>
        </nav>
    );
}


export default Header