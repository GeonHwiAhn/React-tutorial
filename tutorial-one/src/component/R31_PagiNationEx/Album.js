import React, {useEffect, useState} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Album = () => {
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [itemPerPage] = useState(5);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            setData(res.data);
            console.log(data);
        })
        .catch((err) => {
            alert(err + "발생!!!!!!!!!!");
        });
    }, []);


    const lastItem = currentPage * itemPerPage;

    const firstItem = lastItem - itemPerPage;

    const currentList = data.slice(firstItem, lastItem);

    const paginate = (number) => setCurrentPage(number);

    
    return(
        <div className='container'>
            <h1>앨범 페이지네이션</h1>
            <ul className='list-group mb-4'>
                {currentList.map(article => (
                    <li key={article.id} className='list-group-item'>
                        <img src={article.thumbnailUrl}/>
                    </li>
                ))}
            </ul>
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}
export default Album;