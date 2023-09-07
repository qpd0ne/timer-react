import { FC } from "react";

interface ArrowProps {
  className: string;
}

const Arrow: FC<ArrowProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 350 14045"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="175"
        cy="7044"
        r="135"
        transform="rotate(-180 175 7044)"
        stroke="#FFB800"
        stroke-width="80"
      />
      <path
        d="M129.999 14000C129.999 14024.9 150.146 14045 174.999 14045C199.852 14045 219.999 14024.9 219.999 14000L129.999 14000ZM130 7213L129.999 14000L219.999 14000L220 7213L130 7213Z"
        fill="#FFB800"
      />
      <path
        d="M220 5201C220 5176.15 199.853 5156 175 5156C150.147 5156 130 5176.15 130 5201L220 5201ZM130 5201L130 6901L220 6901L220 5201L130 5201Z"
        fill="#FFB800"
      />
      <line
        x1="174.975"
        y1="14000"
        x2="174.976"
        y2="-1.09321e-09"
        stroke="black"
        stroke-width="0.005"
      />
    </svg>
  );
};

export default Arrow;
