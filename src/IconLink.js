import * as React from 'react';
const SvgIconLink = ({ title, titleId, ...props }) => (
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
            d="m2.5 14.5-.53-.53-.53.53.53.53zm7 7-.53.53.53.53.53-.53zm12-12 .53.53.53-.53-.53-.53zm-7-7 .53-.53-.53-.53-.53.53zm-4.28 3.22-.53.53 1.06 1.06.53-.53-1.06-1.06m-3.44 5.56.53-.53-1.06-1.06-.53.53 1.06 1.06m10.44 1.44-.53.53 1.06 1.06.53-.53zm-3.44 5.56.53-.53-1.06-1.06-.53.53zm-5.31-3.81-.53.53L9 16.06l.53-.53-1.06-1.06Zm7.06-4.94.53-.53L15 7.94l-.53.53 1.06 1.06Zm-13.56 5.5 7 7 1.06-1.06-7-7-1.06 1.06Zm20.06-6.06-7-7-1.06 1.06 7 7 1.06-1.06Zm-8.06-7-3.75 3.75 1.06 1.06 3.75-3.75-1.06-1.06Zm-8.25 8.25-3.75 3.75 1.06 1.06 3.75-3.75-1.06-1.06m12.56 3.56 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06m-8.25 8.25 3.75-3.75-1.06-1.06-3.75 3.75 1.06 1.06m-.5-6.5 6-6-1.06-1.06-6 6 1.06 1.06"
        />
    </svg>
);
export default SvgIconLink;
