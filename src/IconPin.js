import * as React from 'react';
const SvgIconPin = ({ title, titleId, ...props }) => (
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
            d="M12 15.25H4.75V12.5l.377-.377A7.25 7.25 0 0 0 7.25 6.997V2.75h9.5v4.247a7.25 7.25 0 0 0 2.123 5.127l.377.376v2.75H12Zm0 0v6"
        />
    </svg>
);
export default SvgIconPin;
