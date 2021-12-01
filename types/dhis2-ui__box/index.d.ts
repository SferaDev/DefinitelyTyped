// Type definitions for @dhis2-ui/box 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/box
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface BoxProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    height?: string;
    marginTop?: string;
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    overflow?: string;
    width?: string;
}

// https://github.com/dhis2/ui/blob/master/components/box/src/index.js
export const Box: FC<BoxProps>;
