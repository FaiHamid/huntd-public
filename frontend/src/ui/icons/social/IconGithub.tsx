import React from 'react';
import cn from 'classnames';
import icons from '@/ui/icons/icons.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';

export const IconGithub: FCIcon = () => (
  // classname "icon" for overrides
  <svg
    className={cn(icons.icon, 'icon-github')}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.00001C9.11346 0.970707 6.33338 2.08765 4.27073 4.10535C2.20809 6.12306 1.03166 8.87644 1 11.7604C1.01112 14.0395 1.74494 16.2565 3.09606 18.0928C4.44718 19.9292 6.34608 21.2905 8.52 21.9812C9.07 22.0811 9.27 21.7514 9.27 21.4617V19.6333C6.21 20.2827 5.56 18.1946 5.56 18.1946C5.3563 17.5391 4.92323 16.9787 4.34 16.616C3.34 15.9566 4.42 15.9666 4.42 15.9666C4.76565 16.0128 5.09635 16.1365 5.38731 16.3286C5.67826 16.5207 5.92192 16.776 6.1 17.0756C6.41033 17.6132 6.91953 18.0077 7.51801 18.174C8.11649 18.3403 8.75639 18.2652 9.3 17.9648C9.35591 17.4177 9.60389 16.908 10 16.5261C7.56 16.2563 5 15.3372 5 11.2109C4.97818 10.1345 5.37624 9.09187 6.11 8.30347C5.77583 7.37936 5.81529 6.36152 6.22 5.46601C6.22 5.46601 7.15 5.17627 9.22 6.56502C11.0219 6.08529 12.9181 6.08529 14.72 6.56502C16.82 5.17627 17.72 5.46601 17.72 5.46601C18.1247 6.36152 18.1642 7.37936 17.83 8.30347C18.5808 9.07742 19.0005 10.1131 19 11.1909C19 15.3272 16.42 16.2364 14 16.5061C14.265 16.7632 14.4697 17.0757 14.5994 17.4212C14.729 17.7667 14.7805 18.1366 14.75 18.5043V21.4517C14.75 21.8014 14.95 22.0811 15.5 21.9712C17.6678 21.2762 19.5603 19.9146 20.9072 18.0808C22.2541 16.2471 22.9866 14.0349 23 11.7604C22.9683 8.87644 21.7919 6.12306 19.7293 4.10535C17.6666 2.08765 14.8865 0.970707 12 1.00001Z"
      fill="currentColor"
    />
  </svg>
);