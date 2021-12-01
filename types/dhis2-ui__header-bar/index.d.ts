// Type definitions for @dhis2-ui/header-bar 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/header-bar
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface HeaderBarProps {
    className?: string;
    appName: string;
}

// https://github.com/dhis2/ui/blob/master/components/header-bar/src/index.js
export const HeaderBar: FC<HeaderBarProps>;
