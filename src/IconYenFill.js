import * as React from 'react';
const SvgIconYenFill = ({ title, titleId, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 12C2 6.45 6.673 2 12.375 2S22.75 6.45 22.75 12s-4.673 10-10.375 10S2 17.55 2 12m6.57-5.058-1.128.987 3.78 4.321H9v1.5h2.25V18h1.5v-4.25H15v-1.5h-2.222l3.78-4.32-1.129-.988L12 10.862z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconYenFill;
