import { Transfer } from '@dhis2-ui/transfer';
import * as React from 'react';

const options = [
    {
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    },
    {
        label: 'ANC 2nd visit',
        value: 'anc_2nd_visit',
    },
];

const element = (
    <Transfer
        options={options}
        filterable
        hideFilterInput={true}
        searchTerm={'Search...'}
        rightHeader={
            <p>
                <b>Selected Periods</b>
            </p>
        }
        onChange={({ selected }) => console.log(selected)}
        onFilterChange={({ value }) => console.log(value)}
        height="400px"
        filterLabel="Filter options"
        filterPlaceholder="Search"
    />
);
