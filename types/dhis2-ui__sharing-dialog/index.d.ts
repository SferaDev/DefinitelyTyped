// Type definitions for @dhis2-ui/sharing-dialog 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/sharing-dialog
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface SharingDialogProps {
    id: string;
    type: string;
    initialSharingSettings?: {
        allowPublic: boolean;
        groups: {
            access: string;
            id: string;
            name: string;
        }[];
        name?: string;
        public: string;
        users: {
            access: string;
            id: string;
            name: string;
        }[];
    };
    onClose?: (...args: any[]) => void;
    onError?: (...args: any[]) => void;
    onSave?: (...args: any[]) => void;
}

// https://github.com/dhis2/ui/blob/master/components/sharing-dialog/src/index.js
export const SharingDialog: FC<SharingDialogProps>;
