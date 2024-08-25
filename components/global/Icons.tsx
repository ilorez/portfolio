// components/global/icons/SocialIcons.tsx

import React from 'react';

interface IconProps {
  color?: string;
  size?: string;
}

export function Github({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>GitHub</title>
      <path
        fill={color}
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  );
}

export function Stackoverflow({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Stack Overflow</title>
      <path
        fill={color}
        d="M17.453 20.451v-5.1h1.5v6.6h-15v-6.6h1.5v5.1h12zm-9.6-2.4h9v1.5h-9v-1.5zm.15-3.15l8.7 1.8-.3 1.5-8.7-1.8.3-1.5zm.9-3.75l8.1 3.75-.6 1.35-8.1-3.75.6-1.35zm1.8-3.6l6.9 5.55-1.05 1.2-6.9-5.55 1.05-1.2zm3.45-3.45l4.95 7.35-1.2.75-4.95-7.35 1.2-.75z"
      />
    </svg>
  );
}

export function Linkedin({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>LinkedIn</title>
      <path
        fill={color}
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.666h-3.554v-11.5h3.414v1.571h.049c.476-.9 1.637-1.852 3.368-1.852 3.6 0 4.266 2.368 4.266 5.448v6.333zm-14.4-13.5c-1.144 0-2.067-.924-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.144 0 2.067.923 2.067 2.067 0 1.143-.923 2.067-2.067 2.067zm1.777 13.5h-3.554v-11.5h3.554v11.5zm16.176-20.452h-22.5c-.825 0-1.5.675-1.5 1.5v21c0 .825.675 1.5 1.5 1.5h22.5c.825 0 1.5-.675 1.5-1.5v-21c0-.825-.675-1.5-1.5-1.5z"
      />
    </svg>
  );
}

export function Twitter({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Twitter</title>
      <path
        fill={color}
        d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.635.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
      />
    </svg>
  );
}

export function Facebook({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Facebook</title>
      <path
        fill={color}
        d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"
      />
    </svg>
  );
}

export function Instagram({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Instagram</title>
      <path
        fill={color}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.334-3.637 1.408-1.074 1.074-1.349 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.349 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.334 3.637-1.408 1.074-1.074 1.349-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.349-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"
      />
    </svg>
  );
}

export function Discord({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Discord</title>
      <path
        fill={color}
        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1066c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0957 2.1568 2.419 0 1.3333-.9555 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0957 2.1568 2.419 0 1.3333-.946 2.4189-2.1568 2.4189Z"
      />
    </svg>
  );
}

export function Cat_Happy({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M15.692 24.75C9.37345 20.4776 14.5809 13.8122 18.75 20.619"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.85 20.0697C41.9559 15.079 49.3171 15.7336 44.7379 22.5"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.1729 23.85C24.0543 23.115 24.4267 22.4046 24.6 21.75"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.1 24.75C29.1613 23.4924 29.2422 22.2317 29.4 21"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.2 23.85C34.2 23.1991 34.2 22.5493 34.2 21.9"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.95 33.45C24.0709 33.1373 25.2579 33.0035 26.4 32.85"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.75 32.85C34.9343 32.6139 36.0422 32.6897 37.2 32.85"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.2 38.4007C33.225 35.8113 32.6007 39.6903 28.7218 39.0847"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.15 40.05C29.8581 43.2459 27.296 43.5262 25.05 42.5601"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.0062 40.05C29.8297 44.2948 33.5372 43.6509 35.5501 41.611"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.65 36.45C14.449 35.7342 12.1218 35.6947 9.90002 35.4"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4 40.05C14.9801 40.6212 12.5614 41.0628 10.2 41.85"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.95 34.95C45.6751 34.494 47.3532 33.843 49.05 33.3"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.55 39.15C46.3286 38.9245 48.3207 39.004 49.95 39.0643"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Cat_Sad({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8812 34.0824C29.0151 33.5388 33.4551 33.6049 37.2913 34.2249"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.6223 35.8803C27.9457 35.316 27.6063 34.8277 27.5298 34.3036"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.001 35.6928C34.001 35.2173 34.001 34.7417 34.001 34.2669"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.0277 25.4634C25.2038 24.6046 24.9376 23.5765 24.8636 22.8409"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.4369 26.5959C30.463 24.7992 30.4369 22.9862 30.4369 21.1793"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.3175 24.714C35.2623 23.7142 35.2357 22.7194 35.2357 21.717"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.711 23.0379C6.31812 16.4483 15.6835 16.2084 19.567 22.2747"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M41.2186 20.9343C43.987 12.7579 50.7345 16.204 45.2539 23.4598"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.9719 39.5326C33.9917 38.5893 32.7125 42.0789 30.6456 39.3727"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.5566 41.5395C30.4485 43.0707 29.804 43.2795 28.8278 43.65"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.1766 41.9643C32.664 43.0678 33.4639 42.9976 34.245 43.2754"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9242 36.5148C15.7356 36.2743 12.8594 36.1804 10.9672 35.9529"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0792 40.7082C16.1318 41.3868 14.212 42.1383 12.2502 42.7686"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.6576 34.2789C46.6913 34.7465 44.8343 35.6373 43.0167 36.5267"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.2 40.4711C47.4059 40.3325 45.5718 40.2446 43.0167 40.4111"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function Cat_Very_Happy({ color = 'currentColor', size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7262 21.8638C12.6574 15.486 17.0964 14.084 20.7093 19.0153"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M41.7675 18.8505C46.5027 12.8896 47.4687 18.5227 45.9547 23.4532"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.1223 22.4832C26.1718 21.7063 26.2218 20.9311 26.2713 20.1561"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.2878 23.4516C31.2342 21.963 31.4145 20.4716 31.5861 18.9944"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2037 22.4826C36.4608 21.7356 36.3032 20.9318 36.3533 20.1567"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.6174 29.8205C30.761 29.7357 29.5232 31.523 24.2792 33.4995"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.6766 29.653C30.5421 31.9063 31.5819 30.9621 35.5046 33.5289"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.533 38.18C26.9918 38.3208 29.3291 41.0501 31.5292 38.3469"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.0084 42.9963C27.274 43.7517 26.3837 43.4257 25.1305 42.4434"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.5902 42.4434C30.9627 44.6142 33.1404 43.8501 34.8257 42.4434"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4049 34.6917C14.5177 34.6682 11.4228 34.0811 10.2 33.9165"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.7927 38.5278C14.4105 38.6412 12.3172 39.1701 10.3939 40.0773"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.9499 32.1335C47.4247 32.4045 45.3305 33.0308 43.3573 34.3061"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.7947 39.3672C47.755 38.8312 45.702 38.7858 43.5898 38.7858"
        stroke={color}
        stroke-opacity="0.9"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
