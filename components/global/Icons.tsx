// components/global/icons/SocialIcons.tsx
// Social icons: Simple Icons–style (24×24, fill, currentColor) for consistency with Monkeytype.

import React from 'react';

interface IconProps {
  color?: string;
  size?: string;
}

/** Shared SVG wrapper for social icons: same viewBox, size, fill, a11y. */
function SocialIconSvg({
  title,
  path,
  color = 'currentColor',
  size,
}: IconProps & { title: string; path: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="inline-block flex-shrink-0 transition-colors"
      aria-hidden
    >
      <title>{title}</title>
      <path fill={color} d={path} />
    </svg>
  );
}

// Simple Icons paths (24×24, minimal fill style) — https://simpleicons.org

const GITHUB_PATH =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';

const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

const INSTAGRAM_PATH =
  'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077';

const DISCORD_PATH =
  'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z';

export function Github(props: IconProps) {
  return <SocialIconSvg {...props} title="GitHub" path={GITHUB_PATH} />;
}

export function Linkedin(props: IconProps) {
  return <SocialIconSvg {...props} title="LinkedIn" path={LINKEDIN_PATH} />;
}

export function Instagram(props: IconProps) {
  return <SocialIconSvg {...props} title="Instagram" path={INSTAGRAM_PATH} />;
}

export function Discord(props: IconProps) {
  return <SocialIconSvg {...props} title="Discord" path={DISCORD_PATH} />;
}

/** Monkeytype logo paths (9009 black / alpine white from monkeytype-icon repo) */
const MONKEYTYPE_VIEWBOX = '-680 -1030 300 180';
const MONKEYTYPE_PATHS = [
  'M -430 -910 L -430 -910 C -424.481 -910 -420 -905.519 -420 -900 L -420 -900 C -420 -894.481 -424.481 -890 -430 -890 L -430 -890 C -435.519 -890 -440 -894.481 -440 -900 L -440 -900 C -440 -905.519 -435.519 -910 -430 -910 Z',
  'M -570 -910 L -510 -910 C -504.481 -910 -500 -905.519 -500 -900 L -500 -900 C -500 -894.481 -504.481 -890 -510 -890 L -570 -890 C -575.519 -890 -580 -894.481 -580 -900 L -580 -900 C -580 -905.519 -575.519 -910 -570 -910 Z',
  'M -590 -970 L -590 -970 C -584.481 -970 -580 -965.519 -580 -960 L -580 -940 C -580 -934.481 -584.481 -930 -590 -930 L -590 -930 C -595.519 -930 -600 -934.481 -600 -940 L -600 -960 C -600 -965.519 -595.519 -970 -590 -970 Z',
  'M -639.991 -960.515 C -639.72 -976.836 -626.385 -990 -610 -990 L -610 -990 C -602.32 -990 -595.31 -987.108 -590 -982.355 C -584.69 -987.108 -577.68 -990 -570 -990 L -570 -990 C -553.615 -990 -540.28 -976.836 -540.009 -960.515 C -540.001 -960.345 -540 -960.172 -540 -960 L -540 -960 L -540 -940 C -540 -934.481 -544.481 -930 -550 -930 L -550 -930 C -555.519 -930 -560 -934.481 -560 -940 L -560 -960 L -560 -960 C -560 -965.519 -564.481 -970 -570 -970 C -575.519 -970 -580 -965.519 -580 -960 L -580 -960 L -580 -960 L -580 -940 C -580 -934.481 -584.481 -930 -590 -930 L -590 -930 C -595.519 -930 -600 -934.481 -600 -940 L -600 -960 L -600 -960 L -600 -960 L -600 -960 L -600 -960 L -600 -960 L -600 -960 L -600 -960 L -600 -960 C -600 -965.519 -604.481 -970 -610 -970 C -615.519 -970 -620 -965.519 -620 -960 L -620 -960 L -620 -940 C -620 -934.481 -624.481 -930 -630 -930 L -630 -930 C -635.519 -930 -640 -934.481 -640 -940 L -640 -960 L -640 -960 C -640 -960.172 -639.996 -960.344 -639.991 -960.515 Z',
  'M -460 -930 L -460 -900 C -460 -894.481 -464.481 -890 -470 -890 L -470 -890 C -475.519 -890 -480 -894.481 -480 -900 L -480 -930 L -508.82 -930 C -514.99 -930 -520 -934.481 -520 -940 L -520 -940 C -520 -945.519 -514.99 -950 -508.82 -950 L -431.18 -950 C -425.01 -950 -420 -945.519 -420 -940 L -420 -940 C -420 -934.481 -425.01 -930 -431.18 -930 L -460 -930 Z',
  'M -470 -990 L -430 -990 C -424.481 -990 -420 -985.519 -420 -980 L -420 -980 C -420 -974.481 -424.481 -970 -430 -970 L -470 -970 C -475.519 -970 -480 -974.481 -480 -980 L -480 -980 C -480 -985.519 -475.519 -990 -470 -990 Z',
  'M -630 -910 L -610 -910 C -604.481 -910 -600 -905.519 -600 -900 L -600 -900 C -600 -894.481 -604.481 -890 -610 -890 L -630 -890 C -635.519 -890 -640 -894.481 -640 -900 L -640 -900 C -640 -905.519 -635.519 -910 -630 -910 Z',
  'M -515 -990 L -510 -990 C -504.481 -990 -500 -985.519 -500 -980 L -500 -980 C -500 -974.481 -504.481 -970 -510 -970 L -515 -970 C -520.519 -970 -525 -974.481 -525 -980 L -525 -980 C -525 -985.519 -520.519 -990 -515 -990 Z',
  'M -660 -910 L -680 -910 L -680 -980 C -680 -1007.596 -657.596 -1030 -630 -1030 L -430 -1030 C -402.404 -1030 -380 -1007.596 -380 -980 L -380 -900 C -380 -872.404 -402.404 -850 -430 -850 L -630 -850 C -657.596 -850 -680 -872.404 -680 -900 L -680 -920 L -660 -920 L -660 -900 C -660 -883.443 -646.557 -870 -630 -870 L -430 -870 C -413.443 -870 -400 -883.443 -400 -900 L -400 -980 C -400 -996.557 -413.443 -1010 -430 -1010 L -630 -1010 C -646.557 -1010 -660 -996.557 -660 -980 L -660 -910 Z',
];

function MonkeytypeSvg({ fill, className }: { fill: string; className?: string }) {
  return (
    <svg
      role="img"
      aria-hidden
      viewBox={MONKEYTYPE_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ isolation: 'isolate' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Monkeytype</title>
      <g>
        {MONKEYTYPE_PATHS.map((d, i) => (
          <path key={i} fill={fill} d={d} />
        ))}
      </g>
    </svg>
  );
}

/** Monkeytype icon: 9009 (black) in light mode, alpine (white) in dark mode. */
export function Monkeytype({ size }: IconProps) {
  const sizeStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;
  return (
    <span
      className="relative inline-block flex-shrink-0"
      style={sizeStyle}
    >
      <span className="absolute inset-0 block dark:hidden">
        <MonkeytypeSvg fill="#080909" className="h-full w-full" />
      </span>
      <span className="absolute inset-0 hidden dark:block">
        <MonkeytypeSvg fill="#ffffff" className="h-full w-full" />
      </span>
    </span>
  );
}

/** Map social id (from data/socials.json) to icon component for hero/links */
export const socialIconsMap: Record<string, React.FC<IconProps>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  discord: Discord,
  monkeytype: Monkeytype,
};

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
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.85 20.0697C41.9559 15.079 49.3171 15.7336 44.7379 22.5"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1729 23.85C24.0543 23.115 24.4267 22.4046 24.6 21.75"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.1 24.75C29.1613 23.4924 29.2422 22.2317 29.4 21"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.2 23.85C34.2 23.1991 34.2 22.5493 34.2 21.9"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.95 33.45C24.0709 33.1373 25.2579 33.0035 26.4 32.85"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.75 32.85C34.9343 32.6139 36.0422 32.6897 37.2 32.85"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.2 38.4007C33.225 35.8113 32.6007 39.6903 28.7218 39.0847"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.15 40.05C29.8581 43.2459 27.296 43.5262 25.05 42.5601"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0062 40.05C29.8297 44.2948 33.5372 43.6509 35.5501 41.611"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.65 36.45C14.449 35.7342 12.1218 35.6947 9.90002 35.4"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4 40.05C14.9801 40.6212 12.5614 41.0628 10.2 41.85"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.95 34.95C45.6751 34.494 47.3532 33.843 49.05 33.3"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.55 39.15C46.3286 38.9245 48.3207 39.004 49.95 39.0643"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.6223 35.8803C27.9457 35.316 27.6063 34.8277 27.5298 34.3036"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.001 35.6928C34.001 35.2173 34.001 34.7417 34.001 34.2669"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0277 25.4634C25.2038 24.6046 24.9376 23.5765 24.8636 22.8409"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.4369 26.5959C30.463 24.7992 30.4369 22.9862 30.4369 21.1793"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3175 24.714C35.2623 23.7142 35.2357 22.7194 35.2357 21.717"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.711 23.0379C6.31812 16.4483 15.6835 16.2084 19.567 22.2747"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.2186 20.9343C43.987 12.7579 50.7345 16.204 45.2539 23.4598"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.9719 39.5326C33.9917 38.5893 32.7125 42.0789 30.6456 39.3727"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5566 41.5395C30.4485 43.0707 29.804 43.2795 28.8278 43.65"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.1766 41.9643C32.664 43.0678 33.4639 42.9976 34.245 43.2754"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9242 36.5148C15.7356 36.2743 12.8594 36.1804 10.9672 35.9529"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0792 40.7082C16.1318 41.3868 14.212 42.1383 12.2502 42.7686"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.6576 34.2789C46.6913 34.7465 44.8343 35.6373 43.0167 36.5267"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.2 40.4711C47.4059 40.3325 45.5718 40.2446 43.0167 40.4111"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.7675 18.8505C46.5027 12.8896 47.4687 18.5227 45.9547 23.4532"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.1223 22.4832C26.1718 21.7063 26.2218 20.9311 26.2713 20.1561"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.2878 23.4516C31.2342 21.963 31.4145 20.4716 31.5861 18.9944"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.2037 22.4826C36.4608 21.7356 36.3032 20.9318 36.3533 20.1567"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6174 29.8205C30.761 29.7357 29.5232 31.523 24.2792 33.4995"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.6766 29.653C30.5421 31.9063 31.5819 30.9621 35.5046 33.5289"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.533 38.18C26.9918 38.3208 29.3291 41.0501 31.5292 38.3469"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.0084 42.9963C27.274 43.7517 26.3837 43.4257 25.1305 42.4434"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5902 42.4434C30.9627 44.6142 33.1404 43.8501 34.8257 42.4434"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4049 34.6917C14.5177 34.6682 11.4228 34.0811 10.2 33.9165"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7927 38.5278C14.4105 38.6412 12.3172 39.1701 10.3939 40.0773"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.9499 32.1335C47.4247 32.4045 45.3305 33.0308 43.3573 34.3061"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.7947 39.3672C47.755 38.8312 45.702 38.7858 43.5898 38.7858"
        stroke={color}
        strokeOpacity="0.9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
