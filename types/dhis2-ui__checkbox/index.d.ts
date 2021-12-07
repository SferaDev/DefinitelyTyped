// Type definitions for @dhis2-ui/checkbox 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/checkbox
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import { ChangeEvent, FC, ReactNode } from 'react';

export interface CheckboxProps {
    checked?: boolean;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    indeterminate?: boolean;
    initialFocus?: boolean;
    label?: ReactNode;
    name?: string;
    tabIndex?: string;
    valid?: boolean;
    value?: string;
    warning?: boolean;
    onBlur?: (data: { value?: string; name?: string; checked: boolean }, event: FocusEvent) => void;
    onChange?: (data: { value?: string; name?: string; checked: boolean }, event: ChangeEvent) => void;
    onFocus?: (data: { value?: string; name?: string; checked: boolean }, event: FocusEvent) => void;
}

export interface CheckboxFieldProps {
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
    onBlur?: (data: { value?: string; name?: string; checked: boolean }, event: FocusEvent) => void;
    onChange?: (data: { value?: string; name?: string; checked: boolean }, event: ChangeEvent) => void;
    onFocus?: (data: { value?: string; name?: string; checked: boolean }, event: FocusEvent) => void;
}

// https://github.com/dhis2/ui/blob/master/components/checkbox/src/index.js
export const Checkbox: FC<CheckboxProps>;
export const CheckboxField: FC<CheckboxFieldProps>;
