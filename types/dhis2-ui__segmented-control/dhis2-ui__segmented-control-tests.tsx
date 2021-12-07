import { SegmentedControl } from '@dhis2-ui/segmented-control';
import * as React from 'react';

const element = (
    <SegmentedControl
        options={[
            { label: 'One', value: 'ONE' },
            { label: 'Two', value: 'TWO', disabled: true },
            { label: 'Three', value: 'THREE' },
        ]}
        selected='THREE'
        onChange={console.log}
    />
);