import * as React from 'react';
const SvgIconStarFill = ({ title, titleId, ...props }) => (
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
            d="M12 .259 8.62 7.346.833 8.372l5.695 5.406L5.1 21.5l6.902-3.745 6.901 3.745-1.43-7.72 5.696-5.407-7.785-1.026L12 .259Z"
        />
    </svg>
);
export default SvgIconStarFill;
