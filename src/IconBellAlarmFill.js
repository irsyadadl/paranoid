import * as React from "react";
const SvgIconBellAlarmFill = ({ title, titleId, ...props }) => (
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
      d="M12 2a7.795 7.795 0 0 0-7.696 6.554L2.62 19h4.889c.849 1.75 2.512 3 4.492 3s3.643-1.25 4.492-3h4.889L19.696 8.554A7.795 7.795 0 0 0 12 2m2.754 17H9.245c.678.937 1.68 1.5 2.754 1.5s2.076-.563 2.754-1.5ZM6.175 2.775l-.544.517a9.247 9.247 0 0 0-2.527 4.164l-.206.721-1.442-.411.206-.721a10.747 10.747 0 0 1 2.936-4.84l.544-.517 1.033 1.087Zm12.683-1.087.544.516a10.747 10.747 0 0 1 2.936 4.84l.206.722-1.442.411-.206-.72a9.247 9.247 0 0 0-2.527-4.165l-.544-.517 1.033-1.087Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBellAlarmFill;
