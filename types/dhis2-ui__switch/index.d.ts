// Type definitions for @dhis2-ui/switch 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/switch
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface SwitchProps {
    ariaLabel?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    initialFocus?: boolean;
    label?: ReactNode;
    name?: string;
    role?: string;
    tabIndex?: string;
    valid?: boolean;
    value?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SwitchFieldProps {
    checked?: boolean;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    initialFocus?: boolean;
    label?: ReactNode;
    name?: string;
    required?: boolean;
    tabIndex?: string;
    valid?: boolean;
    validationText?: string;
    value?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { name: string; value: string; checked: boolean }, event: ChangeEvent<HTMLInputElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/switch/src/index.js
export const Switch: FC<SwitchProps>;
export const SwitchField: FC<SwitchFieldProps>;
