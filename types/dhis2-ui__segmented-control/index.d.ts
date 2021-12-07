// Type definitions for @dhis2-ui/segmented-control 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/segmented-control
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC } from 'react';

export interface SegmentedControlOption {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface SegmentedControlProps {
    options: SegmentedControlOption[];
    selected: string;
    onChange: (data: {value: string}, event: ChangeEvent<HTMLInputElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/segmented-control/src/index.js
export const SegmentedControl: FC<SegmentedControlProps>;
