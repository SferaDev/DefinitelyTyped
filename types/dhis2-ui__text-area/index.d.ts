// Type definitions for @dhis2-ui/text-area 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/text-area
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC } from 'react';

export interface TextAreaFieldProps {
    autoGrow?: boolean;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    initialFocus?: boolean;
    inputWidth?: string;
    label?: string;
    loading?: boolean;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    rows?: number;
    tabIndex?: string;
    valid?: boolean;
    validationText?: string;
    value?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChange?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface TextAreaProps {
    autoGrow?: boolean;
    className?: string;
    dataTest?: string;
    dense?: boolean;
    disabled?: boolean;
    error?: boolean;
    initialFocus?: boolean;
    loading?: boolean;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    rows?: number;
    tabIndex?: string;
    valid?: boolean;
    value?: string;
    warning?: boolean;
    width?: string;
    onBlur?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChange?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (data: { name: string; value: string }, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/text-area/src/index.js
export const TextAreaField: FC<TextAreaFieldProps>;
export const TextArea: FC<TextAreaProps>;
