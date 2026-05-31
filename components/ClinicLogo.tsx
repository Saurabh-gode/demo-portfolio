import { clinic } from "@/content/site";
import Link from "next/link";

type ClinicLogoProps = {
  className?: string;
};

export function ClinicLogo({ className = "" }: ClinicLogoProps) {
  return (
    <Link href="/" className={`clinic-logo ${className}`.trim()}>
      <span className="clinic-logo__mark" aria-hidden>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 7v10M7 12h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="clinic-logo__text">
        <span className="clinic-logo__name">{clinic.shortName}</span>
        <span className="clinic-logo__suffix">Aesthetics</span>
      </span>
    </Link>
  );
}
