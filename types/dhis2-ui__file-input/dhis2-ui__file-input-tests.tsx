import { FileInput, FileInputField, FileInputFieldWithList, FileListItem, FileListPlaceholder } from '@dhis2-ui/file-input';
import * as React from 'react';

const element = (
    <>
        <FileListPlaceholder>I am a child</FileListPlaceholder>
        <FileListItem
            loading
            label="File list item"
            removeText="Remove"
            onCancel={() => {}}
            onRemove={() => {}}
            cancelText="Cancel"
        />
        <FileInput name="upload" onChange={console.log} buttonLabel="Upload files" multiple />
        <FileInputField name="upload" label="upload something" buttonLabel="Upload file" required />
        <FileInputFieldWithList
            buttonLabel="Upload file"
            multiple
            name="upload"
            files={[
                new File([], 'test1.md'),
                new File([], 'test2.md'),
            ]}
            removeText="remove"
            onChange={console.log}
        />
    </>
);
