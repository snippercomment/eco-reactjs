import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import Banner from '@components/Banner/Banner';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
function HomePage() {
    const { container } = styles;
    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct />
            </div>
        </>
    );
}

export default HomePage;
