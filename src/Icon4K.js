import * as React from "react";
const SvgIcon4K = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 4.75H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M10.013 15.602c-.406 0-.699-.248-.699-.717v-.679H6.687c-.532 0-.888-.332-.888-.825 0-.303.088-.576.307-.962.484-.87 1.187-1.943 1.954-3.081.488-.747.844-.991 1.44-.991.747 0 1.216.405 1.216 1.064v3.618h.4c.39 0 .606.244.606.591s-.22.586-.606.586h-.4v.679c0 .469-.298.717-.703.717m-.67-2.534V9.523h-.029c-1.005 1.45-1.655 2.442-2.226 3.506v.04zm3.912 2.525c-.464 0-.737-.283-.737-.767V9.128c0-.488.273-.772.737-.772s.737.284.737.772v2.441h.044l2.652-2.895c.205-.225.39-.318.634-.318.39 0 .694.298.694.68 0 .204-.074.365-.26.56l-1.943 2.037 2.115 2.568c.22.274.317.484.317.684 0 .4-.308.713-.713.713-.302 0-.508-.113-.737-.406l-2.1-2.583-.703.738v1.48c0 .483-.273.766-.737.766"
    />
  </svg>
);
export default SvgIcon4K;
