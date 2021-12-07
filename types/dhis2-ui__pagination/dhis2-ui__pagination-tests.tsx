import { Pagination } from '@dhis2-ui/pagination';
import * as React from 'react';

const element = (
    <Pagination
        pageSizes={['5', '10']}
        pageSize={5}
        page={1}
        pageCount={1}
        total={1}
        onPageChange={console.log}
        onPageSizeChange={console.log}
    />
);
