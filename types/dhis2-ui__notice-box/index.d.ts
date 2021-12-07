// Type definitions for @dhis2-ui/notice-box 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/notice-box
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC, ReactNode } from 'react';

    export interface NoticeBoxProps {
        children?: ReactNode;
        className?: string;
        dataTest?: string;
        error?: boolean;
        title?: string;
        warning?: boolean;
    }

// https://github.com/dhis2/ui/blob/master/components/notice-box/src/index.js
export const NoticeBox: FC<NoticeBoxProps>;
