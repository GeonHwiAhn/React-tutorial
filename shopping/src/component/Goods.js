import React from 'react';

const Goods = ({goods}) => {
    <div className='goods'>
        <h2>{goods.name}</h2>
        <p>가격 : {goods.price}원</p>
        <button>장바구니에 추가</button>
    </div>
};

export default Goods;