import { AlertBar, AlertStack } from '@dhis2-ui/alert';
import * as React from 'react';

const element = (
    <AlertStack>
        <AlertBar permanent>First notification - I am at the bottom</AlertBar>
        <AlertBar permanent critical>
            Second notification
        </AlertBar>
        <AlertBar permanent warning>
            Third notification
        </AlertBar>
        <AlertBar permanent success>
            Fourth notification - I am at the top
        </AlertBar>
    </AlertStack>
);
