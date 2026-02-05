import { LucideProps } from 'lucide-react';

const PinterestIcon = ({ size = 24, className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M8 12a4 4 0 1 1 8 0c0 4-4 6-4 10" />
    <path d="M12 12v6" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

export default PinterestIcon;
