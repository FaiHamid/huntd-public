import cn from 'classnames';
import React from 'react';
import icons from '@/ui/icons/icons.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';

export const IconRocket: FCIcon = () => (
  // classname "icon" for overrides
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={cn(icons.icon, 'icon-rocket')}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.28809 23.2919L15.2851 15.2949L16.6991 16.7089L8.70209 24.7059L7.28809 23.2919Z" fill="currentColor" />
    <path d="M17.0001 30.0001C16.8734 30.0004 16.7479 29.9766 16.6301 29.9301C16.4662 29.8648 16.3226 29.7573 16.2137 29.6185C16.1048 29.4798 16.0346 29.3147 16.0101 29.1401L15.0101 22.1401L17.0101 21.8601L17.7601 27.1301L21.0001 24.5201V17.0001C20.9993 16.8685 21.0245 16.738 21.0743 16.6162C21.1241 16.4943 21.1974 16.3835 21.2901 16.2901L25.3601 12.2201C26.1987 11.3871 26.8638 10.3961 27.317 9.30445C27.7701 8.21276 28.0023 7.04206 28.0001 5.86006V4.00006H26.1401C24.9581 3.99782 23.7874 4.22999 22.6957 4.68314C21.604 5.13629 20.613 5.80142 19.7801 6.64006L15.7101 10.7101C15.6166 10.8027 15.5058 10.8761 15.384 10.9258C15.2621 10.9756 15.1317 11.0008 15.0001 11.0001H7.48006L4.87006 14.2601L10.1401 15.0101L9.86006 17.0101L2.86006 16.0101C2.68541 15.9856 2.52034 15.9153 2.38159 15.8064C2.24285 15.6975 2.13537 15.5539 2.07006 15.3901C2.00395 15.2251 1.98299 15.0455 2.00936 14.8697C2.03572 14.6939 2.10845 14.5284 2.22007 14.3901L6.22006 9.39006C6.31219 9.27037 6.43022 9.1731 6.56531 9.10556C6.7004 9.03801 6.84904 9.00194 7.00006 9.00006H14.5901L18.3601 5.22006C19.3792 4.19517 20.5917 3.3828 21.9272 2.83005C23.2627 2.27731 24.6947 1.99519 26.1401 2.00006H28.0001C28.5305 2.00006 29.0392 2.21078 29.4143 2.58585C29.7894 2.96092 30.0001 3.46963 30.0001 4.00006V5.86006C30.0049 7.30543 29.7228 8.73738 29.1701 10.0729C28.6173 11.4084 27.805 12.6209 26.7801 13.6401L23.0001 17.4101V25.0001C22.9994 25.1503 22.9649 25.2984 22.8991 25.4334C22.8333 25.5685 22.7379 25.6869 22.6201 25.7801L17.6201 29.7801C17.4441 29.9212 17.2256 29.9988 17.0001 30.0001Z" fill="currentColor" />
  </svg>
);