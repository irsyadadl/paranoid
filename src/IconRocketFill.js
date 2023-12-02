import * as React from 'react';
const SvgIconRocketFill = ({ title, titleId, ...props }) => (
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
            d="m11.38 21.63.44.93v.01l4.49-4.17v-2.87c4.6-2.47 6.45-6.43 6-12.76l-.05-.65-.65-.05c-6.33-.46-10.29 1.4-12.76 5.99H5.98l-4.17 4.49.93.44.014.007c.249.119 3.706 1.773 5.276 3.343 1.61 1.62 3.35 5.29 3.35 5.29ZM15.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="m4.33 21.33 1.08 1.05 2.71-2.79-1.08-1.05-2.71 2.79ZM1 20.19l1.08 1.05 3.82-3.93-1.08-1.05z"
        />
    </svg>
);
export default SvgIconRocketFill;
