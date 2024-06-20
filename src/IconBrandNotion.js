import * as React from "react";
const SvgIconBrandNotion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="M5.776 5.571c.616.5.848.462 2.004.385l10.906-.655c.231 0 .039-.23-.038-.269l-1.811-1.31c-.347-.269-.81-.577-1.696-.5l-10.56.77c-.385.039-.462.231-.309.385zm.655 2.542v11.474c0 .617.308.848 1.002.81l11.985-.694c.694-.038.772-.462.772-.963V7.342c0-.5-.193-.77-.618-.731l-12.525.731c-.462.039-.616.27-.616.77Zm11.832.615c.077.347 0 .694-.347.733l-.578.115v8.471c-.501.27-.964.424-1.349.424-.617 0-.771-.193-1.233-.77l-3.778-5.93v5.737l1.196.27s0 .693-.965.693l-2.658.154c-.078-.154 0-.539.27-.616l.693-.192V10.23l-.963-.078c-.077-.346.115-.847.655-.885l2.852-.193 3.931 6.008V9.767l-1.002-.115c-.077-.424.23-.732.616-.77zM3.694 2.953l10.985-.81c1.348-.115 1.696-.037 2.543.578l3.507 2.465c.578.424.771.539.771 1.001v13.516c0 .847-.309 1.348-1.387 1.425l-12.756.77c-.81.039-1.196-.077-1.62-.616l-2.582-3.35c-.463-.617-.655-1.078-.655-1.618V4.3c0-.693.309-1.27 1.194-1.347"
    />
  </svg>
);
export default SvgIconBrandNotion;
