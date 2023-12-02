import * as React from 'react';
const SvgIconDevicePhone = ({ title, titleId, ...props }) => (
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
            d="M9.75 19.25h4.5m-8.5-17.5h12.5v20.5H5.75z"
        />
    </svg>
);
export default SvgIconDevicePhone;
