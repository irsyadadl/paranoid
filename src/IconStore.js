import * as React from 'react';
const SvgIconStore = (props) => (
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
            d="M15.25 20.25v-6.5h-6.5v6.5m-.875-16.5V7.2m0 0c0 1.14-.923 2.07-2.063 2.07A2.068 2.068 0 0 1 3.75 7.2m4.125 0c0 1.14.923 2.07 2.063 2.07C11.076 9.27 12 8.34 12 7.2m0-3.45V7.2m0 0c0 1.14.923 2.07 2.063 2.07 1.139 0 2.062-.93 2.062-2.07m0-3.45V7.2m0 0c0 1.14.923 2.07 2.063 2.07 1.139 0 2.062-.93 2.062-2.07m0-3.45v16.5H3.75V3.75z"
        />
    </svg>
);
export default SvgIconStore;
