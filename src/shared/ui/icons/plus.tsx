import type { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={81} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M0 35.002h34.286v7.429a4 4 0 0 1-4 4H0V35.002ZM80 46.43H45.714v-7.428a4 4 0 0 1 4-4H80v11.429ZM45.714.717v30.285a4 4 0 0 1-4 4h-7.428V.717h11.428ZM34.286 80.717V50.43a4 4 0 0 1 4-4h7.428v34.286H34.286Z"
    />
  </svg>
);
