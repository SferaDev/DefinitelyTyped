// Type definitions for @dhis2-ui/modal 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/modal
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { ChangeEvent, FC, ReactNode } from 'react';

export interface ModalActionsProps {
    children: ReactNode;
    dataTest?: string;
}

export interface ModalContentProps {
    children: ReactNode;
    className?: string;
    dataTest?: string;
}

export interface ModalTitleProps {
    children: ReactNode;
    dataTest?: string;
}

export interface ModalProps {
    children: ReactNode;
    className?: string;
    dataTest?: string;
    fluid?: boolean;
    hide?: boolean;
    large?: boolean;
    position?: 'top' | 'middle' | 'bottom';
    small?: boolean;
    onClose?: (data: {}, event: ChangeEvent<HTMLDivElement>) => void;
}

// https://github.com/dhis2/ui/blob/master/components/modal/src/index.js
export const Modal: FC<ModalProps>;
export const ModalActions: FC<ModalActionsProps>;
export const ModalContent: FC<ModalContentProps>;
export const ModalTitle: FC<ModalTitleProps>;
