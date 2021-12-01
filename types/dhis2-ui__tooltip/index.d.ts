// Type definitions for @dhis2-ui/tooltip 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/tooltip
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface TooltipProps {
    children: ReactNode;
    className?: string;
    closeDelay?: number;
    content: ReactNode;
    dataTest?: string;
    maxWidth?: number;
    openDelay?: number;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}

// https://github.com/dhis2/ui/blob/master/components/tooltip/src/index.js
export const Tooltip: FC<TooltipProps>;
