import styles from './style.module.scss';

function MainLayout({ children }) {
    const { wrapLayout, container } = styles;
    return (
        <main className={wrapLayout}>
            <div>{children}</div>
        </main>
    );
}

export default MainLayout;
