import * as React from "react";
const SvgIconSquareInfo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="m4.296 20.141.34-.668zm-.437-.437-.668.34zm16.282 0-.668-.34zm-.437.437-.34-.668zm.437-15.845-.668.34zm-.437-.437.34-.668zm-15.845.437-.668-.34zm.437-.437-.34-.668zm6.454 6.391a.75.75 0 0 0 0 1.5zM12 11h.75a.75.75 0 0 0-.75-.75zm-.75 5.25a.75.75 0 0 0 1.5 0zm8.25-10.9v13.3H21V5.35zm-.85 14.15H5.35V21h13.3zM4.5 18.65V5.35H3v13.3zM5.35 4.5h13.3V3H5.35zm0 15c-.292 0-.467 0-.596-.011-.12-.01-.134-.025-.117-.016l-.681 1.336c.23.118.463.157.676.175.205.017.45.016.718.016zM3 18.65c0 .268 0 .514.016.718.018.213.057.446.175.677l1.336-.682c.009.017-.006.003-.016-.117a8 8 0 0 1-.011-.596zm1.636.823a.25.25 0 0 1-.109-.11l-1.336.681c.168.33.435.598.765.765zM19.5 18.65c0 .292 0 .467-.011.596-.01.12-.025.134-.016.117l1.336.681a1.8 1.8 0 0 0 .175-.676c.017-.204.016-.45.016-.718zM18.65 21c.268 0 .514 0 .718-.016a1.8 1.8 0 0 0 .677-.175l-.682-1.336c.017-.009.003.006-.117.016-.13.01-.304.011-.596.011zm.823-1.637a.25.25 0 0 1-.11.11l.681 1.336a1.75 1.75 0 0 0 .765-.765zM21 5.35c0-.268 0-.513-.016-.718a1.8 1.8 0 0 0-.175-.676l-1.336.68c-.009-.016.006-.002.016.118.01.13.011.304.011.596zm-2.35-.85c.292 0 .467 0 .596.011.12.01.134.025.117.016l.681-1.336a1.8 1.8 0 0 0-.676-.175C19.164 3 18.918 3 18.65 3zm2.16-.544a1.75 1.75 0 0 0-.765-.765l-.682 1.336a.25.25 0 0 1 .11.11l1.336-.681ZM4.5 5.35c0-.292 0-.467.011-.596.01-.12.025-.134.016-.117l-1.336-.681a1.8 1.8 0 0 0-.175.676C3 4.837 3 5.082 3 5.35zM5.35 3c-.268 0-.513 0-.718.016a1.8 1.8 0 0 0-.676.175l.68 1.336c-.016.009-.002-.006.118-.016.13-.01.304-.011.596-.011zm-.823 1.636a.25.25 0 0 1 .11-.109l-.681-1.336a1.75 1.75 0 0 0-.765.765zm6.223 7.114H12v-1.5h-1.25zm.5-.75v5.25h1.5V11z"
    />
    <rect
      width={1.25}
      height={1.25}
      x={11.375}
      y={7.375}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      rx={0.625}
    />
  </svg>
);
export default SvgIconSquareInfo;
