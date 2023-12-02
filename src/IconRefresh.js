import * as React from 'react';
const SvgIconRefresh = ({ title, titleId, ...props }) => (
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
            d="M19.262 16.25h.75v-.75h-.75zm-4-.75h-.75V17h.75zM4.75 7.75H4v.75h.75zm4 .75h.75V7h-.75zm11.262 11.75v-4h-1.5v4zm-.75-4.75h-4V17h4zM4 3.75v4h1.5v-4zm.75 4.75h4V7h-4zm7.25 11A7.5 7.5 0 0 1 4.5 12H3a9 9 0 0 0 9 9zm0-15a7.5 7.5 0 0 1 7.5 7.5H21a9 9 0 0 0-9-9zM5.43 8.25C6.725 6.014 9.218 4.5 12 4.5V3C8.675 3 5.69 4.805 4.132 7.5zM4.5 12c0-.318.02-.631.058-.938l-1.488-.186C3.024 11.245 3 11.62 3 12zm15 0c0 .318-.02.631-.058.938l1.488.186c.046-.369.07-.744.07-1.124zm-.93 3.75c-1.295 2.237-3.788 3.75-6.57 3.75V21c3.325 0 6.31-1.805 7.868-4.5z"
        />
    </svg>
);
export default SvgIconRefresh;
