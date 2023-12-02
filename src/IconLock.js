import * as React from 'react';
const SvgIconLock = ({ title, titleId, ...props }) => (
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
            d="M4.75 9.75V9H4v.75zm14.5 0H20V9h-.75zm0 11.5V22H20v-.75zm-14.5 0H4V22h.75zM15.5 9.75a.75.75 0 0 0 1.5 0zm-8.5 0a.75.75 0 0 0 1.5 0zM12.75 14v-.75h-1.5V14zm-1.5 3v.75h1.5V17zm-6.5-6.5h14.5V9H4.75zm13.75-.75v11.5H20V9.75zm.75 10.75H4.75V22h14.5zm-13.75.75V9.75H4v11.5zM15.5 7v2.75H17V7zm-7 2.75V7H7v2.75zM12 3.5A3.5 3.5 0 0 1 15.5 7H17a5 5 0 0 0-5-5zM12 2a5 5 0 0 0-5 5h1.5A3.5 3.5 0 0 1 12 3.5zm-.75 12v3h1.5v-3z"
        />
    </svg>
);
export default SvgIconLock;
