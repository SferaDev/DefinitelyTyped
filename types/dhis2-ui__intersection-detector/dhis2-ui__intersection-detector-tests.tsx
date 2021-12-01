import { IntersectionDetector } from '@dhis2-ui/intersection-detector';
import * as React from 'react';

export const InView = () => {
    const rootRef = React.useRef(null);

    return (
        <div ref={rootRef} data-test="scroll-container" style={{ width: 200, height: 300, overflow: 'auto' }}>
            <div style={{ background: 'red', height: 200 }}>
                <IntersectionDetector rootRef={rootRef} onChange={console.log} />
            </div>

            <div
                // spacer to push indicator out of the intersecting area
                style={{
                    width: 200,
                    height: 310,
                    overflow: 'auto',
                    background: 'blue',
                }}
            />
        </div>
    );
};

export const OutOfView = () => {
    const rootRef = React.useRef(null);

    return (
        <div ref={rootRef} data-test="scroll-container" style={{ width: 200, height: 300, overflow: 'auto' }}>
            <div
                // spacer to push indicator out of the intersecting area
                style={{
                    width: 200,
                    height: 310,
                    overflow: 'auto',
                    background: 'blue',
                }}
            />

            <IntersectionDetector rootRef={rootRef} onChange={console.log}>
                <div style={{ background: 'red', height: 200 }} />
            </IntersectionDetector>
        </div>
    );
};
