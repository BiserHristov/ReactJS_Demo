import './MenuItem.css'
const MenuItem = ({
    id,
    children,
    isSelected,
    onClick
}) => {
    let classes = ['menu-item'];

    if (isSelected) {
        classes.push('menu-item-selected')
    }
    return (
        <li className={classes.join(' ')}>
            <a href="#" onClick={() => onClick(id)}>{children}</a>
        </li>
    );
}

export default MenuItem