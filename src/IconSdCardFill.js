import * as React from 'react';
const SvgIconSdCardFill = ({ title, titleId, ...props }) => (
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
            d="M4 2v20h16V10.788l-2-3.25V2zm6 4v4H8.5V6zm3.5 0H12v4h1.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconSdCardFill;
