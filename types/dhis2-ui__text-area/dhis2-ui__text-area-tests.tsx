import { TextArea, TextAreaField } from '@dhis2-ui/text-area';
import * as React from 'react';

const element = (
    <>
        <TextAreaField name="textarea" label="I am required and have an asterisk" required />{' '}
        <TextArea name="textarea" initialFocus disabled />
    </>
);
