// Type definitions for @dhis2-ui/css 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/css
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface CssVariablesProps {
    colors?: boolean;
    elevations?: boolean;
    layers?: boolean;
    spacers?: boolean;
    theme?: boolean;
}

// https://github.com/dhis2/ui/blob/master/components/css/src/index.js
export const CssVariables: FC<CssVariablesProps>;
export const CssReset: FC;
