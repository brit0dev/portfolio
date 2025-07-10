import React from 'react';

const NextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="40" height="40" {...props} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="7.5" fill="black" />
    <g clip-path="url(#clip0_199_16022)">
      <path
        d="M19.9783 39.8938C30.9808 39.8938 39.9001 30.9745 39.9001 19.9719C39.9001 8.96938 30.9808 0.0500488 19.9783 0.0500488C8.97572 0.0500488 0.0563965 8.96938 0.0563965 19.9719C0.0563965 30.9745 8.97572 39.8938 19.9783 39.8938Z"
        fill="black"
      />
      <path
        d="M33.1506 34.9178L15.3614 12.0032H12.0095V27.9342H14.691V15.4083L31.0459 36.539C31.7826 36.0459 32.4858 35.5043 33.1506 34.9178Z"
        fill="url(#paint0_linear_199_16022)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.512 12.0032H28.168V27.9407H25.512V12.0032Z"
        fill="url(#paint1_linear_199_16022)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_199_16022"
        x1="24.1841"
        y1="25.838"
        x2="32.0422"
        y2="35.5777"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_199_16022"
        x1="26.84"
        y1="12.0035"
        x2="26.7955"
        y2="23.7076"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <clipPath id="clip0_199_16022">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default NextIcon;
