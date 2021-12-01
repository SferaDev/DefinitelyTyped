// Type definitions for @dhis2-ui/pagination 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/pagination
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface PaginationProps {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
    className?: string;
    dataTest?: string;
    hidePageSelect?: boolean;
    hidePageSizeSelect?: boolean;
    nextPageText?: string 
    pageSelectText?: string
    pageSizeSelectText?: string 
    pageSizes?: string[];
    pageSummaryText?: string
    previousPageText?: string
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
}

// https://github.com/dhis2/ui/blob/master/components/pagination/src/index.js
export const Pagination: FC<PaginationProps>;
