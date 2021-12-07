// Type definitions for @dhis2-ui/logo 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/logo
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface LogoProps {
    className?: string;
    dataTest?: string;
}

// https://github.com/dhis2/ui/blob/master/components/logo/src/index.js
export const Logo: FC<LogoProps>;
export const LogoWhite: FC<LogoProps>;
export const LogoIcon: FC<LogoProps>;
export const LogoIconWhite: FC<LogoProps>;
