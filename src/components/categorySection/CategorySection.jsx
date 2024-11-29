import React from 'react';
import ProductCarousel from '../productCarousel/ProductCarousel';
import CategoryInfo from '../categoryInfo/CategoryInfo';
import './styles.css';

const CategorySection = () => {
  return (
    <div className='category-section'>
        <CategoryInfo />
        <ProductCarousel visibleCards={7} moveCards={2} />
    </div>
  )
}

export default CategorySection
