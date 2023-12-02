import * as React from 'react';
const SvgIconPinFill = ({ title, titleId, ...props }) => (
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
            d="M6.5 2v4.997a6.5 6.5 0 0 1-1.904 4.596L4 12.19V16h7.25v6h1.5v-6H20v-3.81l-.596-.597A6.5 6.5 0 0 1 17.5 6.997V2z"
        />
    </svg>
);
export default SvgIconPinFill;
