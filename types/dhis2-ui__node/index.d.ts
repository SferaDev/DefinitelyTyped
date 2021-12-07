// Type definitions for @dhis2-ui/node 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/node
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactElement, ReactNode } from 'react';

export interface NodeProps {
    children?: ReactNode;
    className?: string;
    component?: ReactElement;
    dataTest?: string;
    icon?: ReactElement;
    open?: boolean;
    onClose?: (event: ChangeEvent<HTMLButtonElement>) => void;
    onOpen?: (event: ChangeEvent<HTMLButtonElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/node/src/index.js
export const Node: FC<NodeProps>;
