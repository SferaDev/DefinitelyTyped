// Type definitions for @dhis2-ui/transfer 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/transfer
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import { ChangeEvent, ReactElement, ReactNode } from 'react';

export interface TransferItem {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface TransferProps<Item extends TransferItem = TransferItem> {
    options: Item[];
    onChange: (data: { selected: string[] }) => void;
    addAllText?: string;
    addIndividualText?: string;
    className?: string;
    dataTest?: string;
    disabled?: boolean;
    enableOrderChange?: boolean;
    filterCallback?: (options: Item[], filter: string) => Item[];
    filterCallbackPicked?: (options: Item[], filter: string) => Item[];
    filterLabel?: string;
    filterLabelPicked?: string;
    filterPlaceholder?: string;
    filterPlaceholderPicked?: string;
    filterable?: boolean;
    filterablePicked?: boolean;
    height?: string;
    hideFilterInput?: boolean;
    hideFilterInputPicked?: boolean;
    initialSearchTerm?: string;
    initialSearchTermPicked?: string;
    leftFooter?: ReactNode;
    leftHeader?: ReactNode;
    loading?: boolean;
    loadingPicked?: boolean;
    maxSelections?: any;
    optionsWidth?: string;
    removeAllText?: string;
    removeIndividualText?: string;
    renderOption?: (option: {
        label: string;
        value: string;
        onClick: (
            option: Item,
            selectionHandler: (data: { value?: string }) => void,
            toggleHighlightedOption: boolean,
        ) => {
            onClick: (data: { value?: string; name?: string }, event: MouseEvent) => void;
            onDoubleClick: (data: { value?: string; name?: string }, event: MouseEvent) => void;
        };
        highlighted: boolean;
        selected: boolean;
    }) => ReactNode;
    rightFooter?: ReactNode;
    rightHeader?: ReactNode;
    searchTerm?: string;
    searchTermPicked?: string;
    selected?: string[];
    selectedEmptyComponent?: ReactNode;
    selectedWidth?: string;
    sourceEmptyPlaceholder?: ReactNode;
    onEndReached?: () => void;
    onEndReachedPicked?: () => void;
    onFilterChange?: (data: { value?: string; name?: string }, event: ChangeEvent<HTMLInputElement>) => void;
    onFilterChangePicked?: (data: { value?: string; name?: string }, event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TransferOptionProps {
    className?: string;
    disabled?: boolean;
    dataTest?: string;
    highlighted?: boolean;
    onClick?: (data: { value: string }, event: MouseEvent) => void;
    onDoubleClick?: (data: { value: string }, event: MouseEvent) => void;
    label: string;
    value: string;
}

// https://github.com/dhis2/ui/blob/master/components/transfer/src/index.js
export function Transfer(props: TransferProps): ReactElement;
export function TransferOption(props: TransferOptionProps): ReactElement;
