import { ButtonStrip,Button, SplitButton, DropdownButton } from '@dhis2-ui/button';
import * as React from 'react';

const split = (
    <SplitButton name="Button" value="default" component={<div>Component</div>} onClick={console.log}>
        Label me!
    </SplitButton>
);

const dropdown = (
    <DropdownButton name="Button" value="default" component={<div>Content</div>} onClick={console.log} disabled />
);

const button = (
    <Button name="Button" value="default" initialFocus onBlur={console.log}>
        Label me!
    </Button>
);

const strip = (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
);