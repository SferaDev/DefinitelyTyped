import { Layer } from '@dhis2-ui/layer';
import * as React from 'react';

const element = (
    <>
        <Layer level={1000}>
            <Layer level={1000}>
                <Layer level={1000} onClick={console.log} />
            </Layer>
        </Layer>
        <Layer level={1001} onClick={console.log} />
    </>
);
