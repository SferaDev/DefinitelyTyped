// Type definitions for @dhis2-ui/help 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/help
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface HelpProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    error?: boolean;
    valid?: boolean;
    warning?: boolean;
}

// https://github.com/dhis2/ui/blob/master/components/help/src/index.js
export const Help: FC<HelpProps>;
