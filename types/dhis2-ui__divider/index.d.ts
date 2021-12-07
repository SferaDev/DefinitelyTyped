// Type definitions for @dhis2-ui/divider 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/divider
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface DividerProps {
    className?: string;
    dataTest?: string;
    dense?: boolean;
    margin?: 'none' | 'dense';
}

// https://github.com/dhis2/ui/blob/master/components/divider/src/index.js
export const Divider: FC<DividerProps>;