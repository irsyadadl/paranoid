import * as React from "react";
const SvgIconDonut = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11.833 5.705a2.07 2.07 0 0 1 2.802.572l.44.634c.249.359.605.63 1.018.774l.728.254a2.07 2.07 0 0 1 1.3 2.548l-.222.739c-.125.418-.115.866.03 1.278l.255.728a2.07 2.07 0 0 1-1.182 2.605l-.715.287a2.07 2.07 0 0 0-.982.82l-.41.654a2.07 2.07 0 0 1-2.772.7l-.672-.38a2.07 2.07 0 0 0-1.253-.256l-.766.087a2.07 2.07 0 0 1-2.276-1.732l-.122-.761a2.07 2.07 0 0 0-.58-1.14l-.546-.545a2.07 2.07 0 0 1-.066-2.859l.52-.57c.295-.322.48-.73.528-1.164l.086-.767a2.07 2.07 0 0 1 2.195-1.834l.77.052c.435.029.87-.08 1.239-.313z"
    />
  </svg>
);
export default SvgIconDonut;
