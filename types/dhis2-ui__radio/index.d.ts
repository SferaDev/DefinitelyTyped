// Type definitions for @dhis2-ui/radio 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/radio
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface RadioProps {
    checked?: boolean;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    initialFocus?: boolean;
    label?: ReactNode;
    name?: string;
    tabIndex?: string;
    valid?: boolean;
    value?: string;
    warning?: boolean;
    onBlur?: (data: { value?: string; name?: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (data: { value?: string; name?: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { value?: string; name?: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/radio/src/index.js
export const Radio: FC<RadioProps>;
