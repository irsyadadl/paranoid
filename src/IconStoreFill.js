import * as React from 'react';
const SvgIconStoreFill = ({ title, titleId, ...props }) => (
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
            d="M21 3H3v18h18zM5.812 8.52A1.319 1.319 0 0 1 4.5 7.2V4.5h2.625v2.7a1.32 1.32 0 0 1-1.313 1.32ZM8.626 7.2V4.5h2.625v2.7a1.32 1.32 0 0 1-1.313 1.32A1.319 1.319 0 0 1 8.626 7.2m4.125 0V4.5h2.625v2.7a1.32 1.32 0 0 1-1.313 1.32A1.319 1.319 0 0 1 12.75 7.2Zm4.125 0V4.5H19.5v2.7a1.32 1.32 0 0 1-1.313 1.32 1.319 1.319 0 0 1-1.312-1.32ZM8 13v6.5h1.5v-5h5v5H16V13z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgIconStoreFill;
