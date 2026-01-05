import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeading() {
    const { container, headline, containerMiddleBox, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>Đừng bỏ lỡ những ưu đãi tuyệt vời!</p>
                    <p className={title}>Sản phẩm tốt nhất của chúng tôi</p>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeading;
