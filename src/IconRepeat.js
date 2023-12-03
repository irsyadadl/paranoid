import * as React from 'react';
const SvgIconRepeat = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth={1.5}
            d="m17.25 2.75 3 3-3 3m-10.5 12.5-3-3 3-3m-1.5 3h15v-5m-16.5-3v-4.5h15"
        />
    </svg>
);
export default SvgIconRepeat;
