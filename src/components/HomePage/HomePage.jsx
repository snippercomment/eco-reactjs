import MyHeader from '@components/Header/Header';

import Info from '@components/Info/Info';
import Banner from '@components/Banner/Banner';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProducts } from '@/apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import { useState } from 'react';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        getProducts().then(res => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <>
            <div>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <SaleHomepage />
            </div>
        </>
    );
}

export default HomePage;
