import style from '../style.module.scss';

function Menu({ content, href }) {
    const { menu } = style;
    return <div className={menu}>{content}</div>;
}

export default Menu;
