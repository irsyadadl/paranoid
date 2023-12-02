import * as React from 'react';
const SvgIconLockFill = ({ title, titleId, ...props }) => (
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
            d="M12 2a5 5 0 0 0-5 5v2H4v13h16V9h-3V7a5 5 0 0 0-5-5m3.5 7V7a3.5 3.5 0 1 0-7 0v2zm-2.75 4.25v4.5h-1.5v-4.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconLockFill;
