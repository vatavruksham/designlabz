import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="14" y="20" width="30" height="30" rx="8" fill={`url(#${gradientId})`} opacity="0.45"/>
        <rect x="20" y="14" width="30" height="30" rx="8" fill={`url(#${gradientId})`}/>

        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f43f5e" />
            <stop offset="1" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-semibold tracking-tight text-ink">
          DesignLabz
        </span>
      )}
    </Link>
  );
}
