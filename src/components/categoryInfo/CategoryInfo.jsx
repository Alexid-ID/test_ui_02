import React from 'react';
import CategoryImg from '../../assets/images/category_info.png';
import './styles.css';

const CategoryInfo = () => {
  return (
    <div className='category-info'>
        <img src={CategoryImg} alt='category-info' />
    </div>
  )
}

export default CategoryInfo
