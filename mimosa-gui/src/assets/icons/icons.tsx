import SvgIcon, { SvgIconProps } from "@suid/material/SvgIcon";

export function LightIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M24 43.75q-1.65 0-2.825-1.15Q20 41.45 20 39.75h8q0 1.7-1.15 2.85-1.15 1.15-2.85 1.15Zm-8-7.15v-2.85h16v2.85Zm.25-5.95Q13 28.5 11.1 25.325 9.2 22.15 9.2 18.2q0-6 4.4-10.4T24 3.4q6 0 10.4 4.4t4.4 10.4q0 3.95-1.85 7.125T31.8 30.65Zm1.05-2.9h13.45q2.4-1.6 3.8-4.125t1.4-5.425q0-4.9-3.525-8.425Q28.9 6.25 24 6.25t-8.4 3.525Q12.1 13.3 12.1 18.2q0 2.95 1.4 5.45t3.8 4.1Zm6.7 0Z"/>
      </SvgIcon>
    );
}

export function PlugIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M22.1 38.9h3.85v-4.1l7-7.75V17.6h-17.9v9.45l7.05 7.75Zm-2.9 2.85v-5.8l-7-7.75V17.65q0-1.2.825-2.05.825-.85 2.025-.85h3.7L17.3 16.2v-10h2.9v8.5h7.65V6.2h2.85v10l-1.4-1.45h3.65q1.2 0 2.05.85.85.85.85 2.05V28.2l-7.05 7.75v5.8ZM24 28.2Z"/>
      </SvgIcon>
    );
}