// Type definitions for @dhis2-ui/tag 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/tag
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface TagProps {
    bold?: boolean;
    children?: string;
    className?: string;
    dataTest?: string;
    icon?: ReactNode;
    maxWidth?: string;
    negative?: boolean;
    neutral?: boolean;
    positive?: boolean;
}

// https://github.com/dhis2/ui/blob/master/components/tag/src/index.js
export const Tag: FC<TagProps>;
