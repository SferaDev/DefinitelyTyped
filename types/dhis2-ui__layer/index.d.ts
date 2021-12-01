// Type definitions for @dhis2-ui/layer 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/layer
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface LayerProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    disablePortal?: boolean;
    level?: number | string;
    position?: 'absolute' | 'fixed';
    translucent?: boolean;
    onClick?: (data: {}, event: ChangeEvent<HTMLDivElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/layer/src/index.js
export const Layer: FC<LayerProps>;
