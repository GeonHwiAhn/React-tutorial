import React from 'react';
import './Pagination.css';

const Pagination = ({ itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemPerPage);
                     //***** Math.ceil (17/5 = 3...4 나머지올림 -> 4) ******//
    for(let i =1; i <= totalPages; i++) {
       // console.log("페이지네이션 i값" + i);
        pageNumbers.push(i);
    }

    // 페이지 번호 새로고침 함수
    // 모든 페이지 번호를 한번에 보여주는 것이 아니라 10개씩 보여줄것
    const renderPageNumber = () => {
        if(totalPages <= 10) {
            return pageNumbers;
        }
        //시작 페이지 번호
        // currentPage -5 = 현재 페이지에서 5를 뺀 값
        // 현재 페이지를 중심으로 해서 앞쪽에 있는 5개의 페이지번호를 표시할 수 있도록 설정
        // 시작페이지 번호가 - 나올것을 방지 Math.max

        //***** Math.max (a, b) 둘중에 큰값 *****//
        //***** Math.min (a, b) 둘중에 작은값 ****//

        // Math.max(1, 현재페이지가3 -5 = -2) 시작페이지번호호는 무조건 1
        // Math.max(1, 현재페이지가8 -5 =  3) 시작페이지번호는 무조건 3
        const startPage = Math.max(1, currentPage -5);
        //끝 페이지 번호
        //Math.min (전체페이지1000페이지, 현재페이지 998+4=1002) -> 1000선택
        const endPage = Math.min(totalPages, currentPage +4);

        //현재 페이지를 중심으로 해서 최대 10개의 페이지번호를 전달
        //startPage = 1
        //배열의 index는 0
        //인덱스값을 맞추기위해 1-1 = 0 ~ 마지막페이지
        //ex) 시작페이지3 마지막페이지12 => 2,12가 돼서 번호 3~12까지 보여줌
        return pageNumbers.slice(startPage - 1, endPage);
    }

    return (
        <nav>
            <ul className='pagination'>
                {/*페이지 10페이지까지만 보여주고 */}
                {/* <<화살표 이용해서 이전으로 기능 만들기 */}
                {currentPage >1&&(
                    <li>
                        <a onClick={() => paginate(currentPage -1) } href='!#' className='page-link'>
                        &laquo;</a>
                    </li> 
                )}

                {/*모든 페이지 번호 */}
                {renderPageNumber().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <a onClick={() => paginate(number) } href='!#' className='page-link'>
                        {number}
                    </a>
                </li>
                ))}
                {/* <<화살표 이용해서 다음으로 기능 만들기 */}
                {currentPage < totalPages&&(
                    <li>
                        <a onClick={() => paginate(currentPage +1) } href='!#' className='page-link'>
                        &raquo;</a>
                    </li> 
                )}      
            </ul>
        </nav>
    )
}

export default Pagination;