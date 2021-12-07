// Type definitions for @dhis2-ui/user-avatar 7.8
// Project: https://github.com/dhis2/ui/tree/master/components/user-avatar
// Definitions by: Alexis Rico <https://github.com/SferaDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import type { FC } from 'react';

export interface UserAvatarProps {
    name: string;
    avatarId?: string;
    className?: string;
    dataTest?: string;
    extralarge?: boolean
    extrasmall?: boolean
    large?: boolean
    medium?: boolean
    small?: boolean
}

// https://github.com/dhis2/ui/blob/master/components/user-avatar/src/index.js
export const UserAvatar: FC<UserAvatarProps>;