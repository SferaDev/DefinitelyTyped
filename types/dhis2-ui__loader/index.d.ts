// Type definitions for @dhis2-ui/loader 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/loader
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface LoaderProps {
    className?: string;
    dataTest?: string;
    extrasmall?: boolean;
    invert?: boolean;
    large?: boolean;
    small?: boolean;
}

export interface LinearLoaderProps {
    amount: number;
    className?: string;
    dataTest?: string;
    invert?: boolean;
    margin?: string;
    width?: string;
}

// https://github.com/dhis2/ui/blob/master/components/loader/src/index.js
export const CircularLoader: FC<LoaderProps>;
export const LinearLoader: FC<LinearLoaderProps>;
