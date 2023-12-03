import * as React from "react";
const SvgIconEyeOff = ({ title, titleId, ...props }) => (
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
      d="m9.165 4.42-.718.217.433 1.436.718-.216-.433-1.436ZM22 12l.671.335.167-.335-.167-.335zm-2.859 2.967-.495.563 1.126.99.496-.563-1.127-.99ZM2 12l-.671-.335-.167.335.167.335zm15.47 5.47.53-.53zm3.25 4.31a.75.75 0 1 0 1.06-1.06l-1.06 1.06M10.232 10.232a.75.75 0 1 0-1.06-1.06zm4.596 4.596a.75.75 0 1 0-1.06-1.06zm-5.23-8.97c4.147-1.25 8.879.766 11.731 6.477l1.342-.67C19.578 5.47 14.179 2.912 9.165 4.42l.433 1.436Zm10.67 10.1c.897-1.022 1.707-2.23 2.403-3.623l-1.342-.67c-.643 1.287-1.382 2.386-2.188 3.302l1.127.99ZM2.22 3.28 6 7.06 7.06 6 3.28 2.22zm.451 9.055c1.17-2.343 2.661-4.062 4.286-5.189l-.855-1.233c-1.86 1.29-3.507 3.217-4.773 5.752l1.342.67M5.999 7.06 16.94 18l1.062-1.06L7.06 6 6 7.06ZM16.94 18l3.78 3.78 1.061-1.06L18 16.94zM1.33 12.336c1.876 3.756 4.591 6.18 7.588 7.166 3.005.989 6.214.503 8.98-1.414l-.854-1.233c-2.4 1.663-5.12 2.057-7.657 1.222-2.545-.837-4.981-2.94-6.715-6.411l-1.342.67ZM12 14.5A2.5 2.5 0 0 1 9.5 12H8a4 4 0 0 0 4 4zM9.5 12c0-.69.279-1.315.732-1.768l-1.06-1.06A3.99 3.99 0 0 0 8 12zm4.268 1.768A2.49 2.49 0 0 1 12 14.5V16a3.99 3.99 0 0 0 2.828-1.172l-1.06-1.06ZM2.22 3.28l18.5 18.5 1.06-1.06-18.5-18.5-1.06 1.06Z"
    />
  </svg>
);
export default SvgIconEyeOff;