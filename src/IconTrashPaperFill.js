import * as React from "react";
const SvgIconTrashPaperFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="m21.642 10.267-2.133 2.821 1.45 2.516a1.765 1.765 0 0 1-.375 2.215l-3.44 2.986a1.8 1.8 0 0 1-.608.346l-2.296.759a1.78 1.78 0 0 1-1.948-.572l-1.267-1.571-2.624 1.487a1.79 1.79 0 0 1-1.793-.019l-1.697-1.01a1.77 1.77 0 0 1-.852-1.3l-.409-3.238a.27.27 0 0 0-.12-.19l-.736-.488A1.77 1.77 0 0 1 2 13.535v-1.97c0-.674.384-1.286.986-1.584l1.068-.53-.338-2.682a1.77 1.77 0 0 1 1.496-1.97l5.721-.874 2.464-1.63a1.79 1.79 0 0 1 1.97 0l2.142 1.418c.495.327.795.88.795 1.475v.92c0 .1.056.194.152.241l2.558 1.27a1.766 1.766 0 0 1 .628 2.648"
    />
  </svg>
);
export default SvgIconTrashPaperFill;
