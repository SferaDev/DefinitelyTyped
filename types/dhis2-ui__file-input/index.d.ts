// Type definitions for @dhis2-ui/file-input 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/file-input
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface FileListProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
}

export interface FileListItemProps {
    onRemove: (data: {}, event: ChangeEvent<HTMLInputElement>) => void;
    cancelText?: string;
    className?: string;
    dataTest?: string;
    label?: string;
    loading?: boolean;
    removeText?: string;
    onCancel?: (data: {}, event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FileListPlaceholderProps {
    children: ReactNode;
    dataTest?: string;
}

export interface FileInputProps {
    accept?: string;
    buttonLabel?: string;
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    initialFocus?: boolean;
    label?: string;
    large?: boolean;
    multiple?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    small?: boolean;
    tabIndex?: string;
    valid?: boolean;
    validationText?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FileInputFieldWithListProps {
    onChange: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    buttonLabel?: string;
    className?: string;
    dataTest?: string;
    disabled?: boolean;
    error?: boolean;
    files?: File[];
    helpText?: string;
    initialFocus?: boolean;
    label?: string;
    large?: boolean;
    multiple?: boolean;
    name?: string;
    placeholder?: string;
    removeText?: string;
    required?: boolean;
    small?: boolean;
    tabIndex?: string;
    valid?: boolean;
    validationText?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FileInputFieldProps {
    accept?: string;
    buttonLabel?: string;
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    disabled?: boolean;
    error?: boolean;
    helpText?: string;
    initialFocus?: boolean;
    label?: string;
    large?: boolean;
    multiple?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    small?: boolean;
    tabIndex?: string;
    valid?: boolean;
    validationText?: string;
    warning?: boolean;
    onBlur?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (data: { name: string; files: File[] }, event: ChangeEvent<HTMLInputElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/file-input/src/index.js
export const FileListItem: FC<FileListItemProps>;
export const FileListPlaceholder: FC<FileListPlaceholderProps>;
export const FileInput: FC<FileInputProps>;
export const FileInputField: FC<FileInputFieldProps>;
export const FileInputFieldWithList: FC<FileInputFieldWithListProps>;
export const FileList: FC<FileListProps>;
