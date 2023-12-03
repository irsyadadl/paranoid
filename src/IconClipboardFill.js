import * as React from 'react';
const SvgIconClipboardFill = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <g clipPath="url(#icon-clipboard-fill_svg__a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 2h8v2h4v18H4V4h4zm1.5 4.5h5v-3h-5z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="icon-clipboard-fill_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgIconClipboardFill;
