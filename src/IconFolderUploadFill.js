import * as React from 'react';
const SvgIconFolderUploadFill = ({ title, titleId, ...props }) => (
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
            d="M2 3h8.401l2 3H22v14h-9.25v-5.19l1.75 1.75 1.06-1.06L12 11.94 8.44 15.5l1.06 1.06 1.75-1.75V20H2z"
        />
    </svg>
);
export default SvgIconFolderUploadFill;
