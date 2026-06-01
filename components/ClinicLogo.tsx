import { clinic } from "@/content/site";
import Link from "next/link";

type ClinicLogoProps = {
  className?: string;
};

export function ClinicLogo({ className = "" }: ClinicLogoProps) {
  return (
    <Link href="/" className={`clinic-logo ${className}`.trim()}>
      <span className="clinic-logo__mark" aria-hidden>
        <img src="/logo.svg" alt="logo" />
      </span>
      <span className="clinic-logo__text">
        <span className="clinic-logo__name">{clinic.shortName}</span>
        <span className="clinic-logo__suffix">Aesthetics</span>
      </span>
    </Link>
  );
}
