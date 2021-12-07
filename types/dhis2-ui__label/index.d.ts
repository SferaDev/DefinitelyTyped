// Type definitions for @dhis2-ui/label 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/label
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface LabelProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    disabled?: boolean;
    htmlFor?: string;
    required?: boolean;
}

// https://github.com/dhis2/ui/blob/master/components/label/src/index.js
export const Label: FC<LabelProps>;
