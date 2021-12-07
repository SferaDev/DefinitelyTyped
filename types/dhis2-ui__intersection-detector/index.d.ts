// Type definitions for @dhis2-ui/intersection-detector 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/intersection-detector
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface IntersectionDetectorProps {
    rootRef: React.RefObject<HTMLElement>;
    onChange: (event: ChangeEvent<HTMLDivElement>) => void;
    children?: ReactNode;
    className?: string;
    dataTest?: string;
    threshold?: number;
}

// https://github.com/dhis2/ui/blob/master/components/intersection-detector/src/index.js
export const IntersectionDetector: FC<IntersectionDetectorProps>;
