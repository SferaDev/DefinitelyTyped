// Type definitions for @dhis2-ui/button 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/button
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactElement, ReactNode } from 'react';

export interface DropdownButtonProps {
    children?: ReactNode;
    className?: string;
    component?: ReactElement;
    dataTest?: string;
    destructive?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    initialFocus?: boolean;
    large?: boolean;
    name?: string;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    tabIndex?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string;
    onClick?: (data: { name: string; value: string; open: boolean }, event: ChangeEvent<HTMLButtonElement>) => void;
}

export interface ButtonStripProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    end?: boolean;
    middle?: boolean;
}

export interface SplitButtonProps {
    children?: ReactNode;
    className?: string;
    component?: ReactElement;
    dataTest?: string;
    destructive?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    initialFocus?: boolean;
    large?: boolean;
    name?: string;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    tabIndex?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string;
    onClick?: (data: { name: string, value: string, open: boolean }, event: ChangeEvent<HTMLButtonElement>) => void;
}

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    destructive?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    initialFocus?: boolean;
    large?: boolean;
    loading?: boolean;
    name?: string;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    tabIndex?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string;
    toggled?: boolean;
    onClick?: (data: { name: string, value: string, open: boolean }, event: ChangeEvent<HTMLButtonElement>) => void;
    onBlur?: (data: { name: string, value: string, open: boolean }, event: ChangeEvent<HTMLButtonElement>) => void;
    onFocus?: (data: { name: string, value: string, open: boolean }, event: ChangeEvent<HTMLButtonElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/button/src/index.js
export const Button: FC<ButtonProps>;
export const SplitButton: FC<SplitButtonProps>;
export const ButtonStrip: FC<ButtonStripProps>;
export const DropdownButton: FC<DropdownButtonProps>;
