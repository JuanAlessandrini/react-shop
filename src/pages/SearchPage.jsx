import React from 'react';
import OrderItem from '../components/OrderItem';
import ProductList from '@containers/ProductList';
import '@styles/ProductDetail.scss';
import Header from '../components/Header';

const SearchPage = () => {
	return (
        <div>
            <Header/>
            
            <ProductList />
                    
        </div>
	);
}

export default SearchPage;