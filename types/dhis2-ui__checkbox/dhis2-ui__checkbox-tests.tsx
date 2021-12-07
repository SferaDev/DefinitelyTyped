import { Checkbox, CheckboxField } from '@dhis2-ui/checkbox';
import * as React from 'react';

const element = (
    <>
        <Checkbox initialFocus checked value="default" />
        <Checkbox checked value="default2" />
        <CheckboxField error validationText="Validation text (error state)" />
    </>
);