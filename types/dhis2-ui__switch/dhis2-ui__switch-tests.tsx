import { Switch, SwitchField } from '@dhis2-ui/switch';
import * as React from 'react';

const element = (
    <>
        <SwitchField name="Ex" label="SwitchField" required value="checked" />
        <Switch name="Ex" label="The label" value="default" initialFocus />
    </>
);
