import * as React from 'react';
const SvgIconSketchbook = ({ title, titleId, ...props }) => (
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
            d="M8.75 7.75h6.5m-6.5 4h3.5m-8-8.5v17.5h15.5V3.25z"
        />
    </svg>
);
export default SvgIconSketchbook;
