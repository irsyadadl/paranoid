import * as React from 'react';
const SvgIconSimCard = (props) => (
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
            d="M11.25 2.75v4.5m4-4.5v4.5m4-4.5v18.5H4.75V6.75l4-4z"
        />
    </svg>
);
export default SvgIconSimCard;
