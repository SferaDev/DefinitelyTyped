// Type definitions for @dhis2-ui/alert 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/alert
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

export interface AlertBarProps {
    actions?: Array<{ label: string; onClick: () => void }>;
    children?: string;
    className?: string;
    critical?: boolean;
    dataTest?: string;
    duration?: number;
    hidden?: boolean;
    icon?: ReactNode;
    permanent?: boolean;
    success?: boolean;
    warning?: boolean;
    onHidden?: () => void;
}

export interface AlertStackProps {
    children?: ReactNode;
    className?: string;
    dataTest?: string;
}

// https://github.com/dhis2/ui/blob/master/components/alert/src/index.js
export const AlertBar: FC<AlertBarProps>;
export const AlertStack: FC<AlertStackProps>;
