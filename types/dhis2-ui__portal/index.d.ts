// Type definitions for @dhis2-ui/portal 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/portal
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactElement, ReactNode } from 'react';

export interface PortalProps {
    children?: ReactNode;
    disable?: boolean;
    node?: ReactElement;
}

// https://github.com/dhis2/ui/blob/master/components/portal/src/index.js
export const Portal: FC<PortalProps>;
