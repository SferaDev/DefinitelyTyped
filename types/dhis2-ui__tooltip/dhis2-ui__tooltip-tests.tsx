import { Tooltip } from '@dhis2-ui/tooltip';
import * as React from 'react';

const element = (
    <>
        <p>
            I am a <Tooltip content="Short content">paragraph</Tooltip> that contains a tooltip.
        </p>

        <p>
            I am a <Tooltip content="Longer content will force the tooltip popper to shift">paragraph</Tooltip> that
            contains a tooltip.
        </p>
    </>
);
