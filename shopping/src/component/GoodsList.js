import React from 'react';
import Goods from './Goods';

const Goods = [
    {id:1, name : '축구공', price: 19000},
    {id:2, name : '축구화', price: 990000},
    {id:3, name : '상암월드컵경기장', price: 10000000000},
    {id:4, name : '풋살화', price: 200000},
    {id:5, name : '씬가드', price: 10000},
];


const GoodsList = () => {
    <div>
        {Goods.map(goods => (
            <Goods key={goods.id} goods={goods} />
        ))}
    </div>
};

export default GoodsList;