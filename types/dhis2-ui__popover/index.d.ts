// Type definitions for @dhis2-ui/popover 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/popover
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ChangeEvent, RefObject, ReactNode } from 'react';

export interface PopoverProps {
    children: ReactNode;
    arrow?: boolean;
    className?: string;
    dataTest?: string;
    elevation?: string;
    maxWidth?: number;
    observePopperResize?: boolean;
    observeReferenceResize?: boolean;
    placement?: string;
    reference: RefObject<HTMLElement>;
    onClickOutside?: (data: {}, event: ChangeEvent<HTMLDivElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/popover/src/index.js
export const Popover: FC<PopoverProps>;
