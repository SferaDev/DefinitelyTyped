// Type definitions for @dhis2-ui/center 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/center
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface CenterProps {
    children: ReactNode;
    className?: string;
    dataTest?: string;
    position?: 'top' | 'middle' | 'bottom';
}

// https://github.com/dhis2/ui/blob/master/components/center/src/index.js
export const Center: FC<CenterProps>;
