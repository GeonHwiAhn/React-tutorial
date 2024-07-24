import React, {useState} from 'react';

const 끄적끄적 = () => {
    const [goods, setGoods] = useState([]);
    const [input, setInput] = useState([]);


    const addGoods = () => {
        setGoods([...goods, {text: input, completed: false}]);

        setInput('');


    };
    
    const toggleGoods = (index) => {
        const newGoods = [...goods];
        newGoods[index].completed = !newGoods[index].completed;
        setGoods(newGoods);
    };

    return (
        <div className='GoodsList'>
            <h1>굿즈샵!</h1>
            <div>
                <input className='Goods-input'
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
                <button className='Goods-button' onClick={addGoods}>물품 추가하기</button>
            </div>

        <ul className='goods-ul'>
            {goods.map((goods, index) => (
                <li className='goods-li' 
                key={index} 
                style={{textDecoration: goods.completed ? 'line-through' : 'none',
                cursor: 'pointer'}}
                
                onClick={() => toggleGoods(index)} 
                >
                    {goods.text}
                </li>
            ))}
        </ul>
        

        </div>
    );
}

export default 끄적끄적;