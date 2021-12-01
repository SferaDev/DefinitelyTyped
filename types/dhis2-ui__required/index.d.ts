// Type definitions for @dhis2-ui/required 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/required
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface RequiredProps {
    dataTest?: string;
}

// https://github.com/dhis2/ui/blob/master/components/required/src/index.js
export const Required: FC<RequiredProps>;