import React from 'react';
import OrderItem from '../components/OrderItem';
import ProductList from '@containers/ProductList';
import '@styles/ProductDetail.scss';
import Header from '../components/Header';

const SearchPage = () => {
	return (
        <div>
            <Header/>
            <div className="ProductList">
                
                <div className="ProductList-container">
                    
                    <div className="ProductList-content">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
	);
}

export default SearchPage;