import * as React from 'react';
const SvgIconGalleryFill = ({ title, titleId, ...props }) => (
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
            d="M14.25 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 3h18v18H3zm16.5 15.44-5.5-5.5-2 2-3.984-3.985-3.516 3.31V4.5h15v13.94"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconGalleryFill;
