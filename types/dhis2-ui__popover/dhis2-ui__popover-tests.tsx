import { Popover, PopoverProps } from '@dhis2-ui/popover';
import * as React from 'react';

const PopperInBoxWithCenteredReferenceElement: React.FC<Omit<PopoverProps, 'reference' | 'children'>> = props => {
    const ref = React.useRef(null);

    return (
        <div>
            <div ref={ref}>Reference element</div>
            <Popover {...props} reference={ref}>
                <div>I am in a box</div>
            </Popover>
        </div>
    );
};

const Default = () => <PopperInBoxWithCenteredReferenceElement />;


const NoArrow = () => <PopperInBoxWithCenteredReferenceElement arrow={false} />;

const WithOnClickOutside = () => (
    <PopperInBoxWithCenteredReferenceElement onClickOutside={console.log} />
);

const PlacementTop = () => (
    <PopperInBoxWithCenteredReferenceElement placement="top" />
);
