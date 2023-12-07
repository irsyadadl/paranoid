import * as React from 'react';
const SvgIconStar = (props) => (
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
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m12 2 2.939 5.955 6.572.955-4.756 4.635 1.123 6.545L12 17l-5.878 3.09 1.123-6.545L2.489 8.91l6.572-.955z"
        />
    </svg>
);
export default SvgIconStar;
