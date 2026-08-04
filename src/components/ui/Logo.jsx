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
        <rect x="10" y="20" width="30" height="30" rx="7" fill={`url(#${gradientId})`} opacity="0.35" />
        <rect x="17" y="13" width="30" height="30" rx="7" fill={`url(#${gradientId})`} opacity="0.65" />
        <rect x="24" y="6" width="30" height="30" rx="7" fill={`url(#${gradientId})`} />
        <circle cx="32" cy="16" r="2.6" fill="white" opacity="0.9" />
        <circle cx="41" cy="16" r="2.6" fill="white" opacity="0.6" />
        <circle cx="36.5" cy="23" r="2.6" fill="white" opacity="0.75" />
        <path
          d="M14 46 L15.6 41.5 L17.2 46 L21.7 47.6 L17.2 49.2 L15.6 53.7 L14 49.2 L9.5 47.6 Z"
          fill="#fb923c"
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="10"
            x2="54"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f43f5e" />
            <stop offset="1" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-bold gradient-text tracking-tight">
          DesignLabz
        </span>
      )}
    </Link>
  );
}
