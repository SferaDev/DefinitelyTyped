// Type definitions for @dhis2-ui/chip 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/chip
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, ReactElement, ReactNode, FC } from 'react';

export interface ChipProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    dragging?: boolean;
    icon?: ReactElement;
    overflow?: boolean;
    selected?: boolean;
    onClick?: (event: ChangeEvent<HTMLButtonElement>) => void;
    onRemove?: (event: ChangeEvent<HTMLButtonElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/chip/src/index.js
export const Chip: FC<ChipProps>;
