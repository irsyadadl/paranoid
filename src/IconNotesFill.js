import * as React from 'react';
const SvgIconNotesFill = ({ title, titleId, ...props }) => (
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
            d="M3.5 2.5h17v19h-17v-5h-1V15h1v-2.25h-1v-1.5h1V9h-1V7.5h1zm5.5 5h6V9H9zm0 3.75h4v1.5H9z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconNotesFill;
