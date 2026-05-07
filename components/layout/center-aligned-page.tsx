import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function CenterAlignedPage(props: Props): React.ReactElement {
    return (
        <div className="flex h-full flex-col items-center justify-center text-center">
            {props.children}
        </div>
    );
}
