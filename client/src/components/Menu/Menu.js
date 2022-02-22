import { useState } from 'react'
import './Menu.css'
import MenuItem from './MenuItem';
import { menuItems } from './MenuConstants';


const Menu = ({ onMenuItemClick }) => {
    const [currentItem, setCurrentItem] = useState();
    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }
    return (

        <aside className="menu">
            {
                menuItems.map(mu =>
                    <MenuItem
                        key={mu.id}
                        id={mu.id}
                        isSelected={mu.id == currentItem}
                        onClick={menuItemClickHandler}
                    >
                        {mu.text}
                    </MenuItem>)
            }


        </aside>

    );
}

export default Menu;