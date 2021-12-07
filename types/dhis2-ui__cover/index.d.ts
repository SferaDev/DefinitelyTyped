// Type definitions for @dhis2-ui/cover 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/cover
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface CoverProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    translucent?: boolean;
    onClick?: (data: {}, event: ChangeEvent<HTMLDivElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/cover/src/index.js
export const Cover: FC<CoverProps>;
