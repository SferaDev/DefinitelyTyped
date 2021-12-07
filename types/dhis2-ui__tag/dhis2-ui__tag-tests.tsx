import { Tag } from '@dhis2-ui/tag';
import * as React from 'react';

const element = (
    <>
        <Tag>
            This is a lot of content that should exceed the default max width of the tag component quite significantly
            so testing is still works when the default value of the max width is changed
        </Tag>
        <Tag icon={<span>Icon</span>}>Default</Tag>
        <Tag maxWidth="30px">Text content</Tag>
    </>
);
