import { Pagination } from '@mui/material';
import React from 'react';

const PagiantePage = ({listsofTasks ,itemsPerPage ,setCurrentPage,currentPage}) => {

    const totalPage = Math.ceil(listsofTasks/itemsPerPage)
    return (
        <div>
            <Pagination count={totalPage} page={currentPage} onChange={(event ,value )=>setCurrentPage(value)} variant="outlined" shape="rounded" />
        </div>
    );
};

export default PagiantePage;