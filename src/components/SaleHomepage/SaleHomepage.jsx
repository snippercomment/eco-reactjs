import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateXImage from '@/hook/useTranslateXImage';

function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();
    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>

            <div>
                <h2 className={title}>Đợt giảm giá của năm</h2>
                <p className={des}>Miễn phí ngon giảm giá mạnh</p>

                <div className={boxBtn}>
                    <Button content={'Đọc thêm'} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
