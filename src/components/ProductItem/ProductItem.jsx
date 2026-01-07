import styles from './styles.module.scss';
import reLoad from '@icons/svgs/reloadIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>10k Yellow Gold</div>
            <div className={priceCl}>$999</div>
        </div>
    );
}

export default ProductItem;
