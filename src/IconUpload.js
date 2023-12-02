import * as React from 'react';
const SvgIconUpload = ({ title, titleId, ...props }) => (
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
            stroke="currentColor"
            strokeLinecap="square"
            strokeWidth={1.5}
            d="M20.25 12.75v7.5H3.75v-7.5m8.25-9V15m0-11.25 4.5 4.5M12 3.75l-4.5 4.5"
        />
    </svg>
);
export default SvgIconUpload;
