import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { copyrightYear, footer, navLinks, siteName } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <h4>{siteName}</h4>
          <p>{footer.blurb}</p>
          <p className="site-footer__cta">{footer.cta}</p>
        </div>

        <div>
          <h4>Navigate</h4>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${footer.email}`}>{footer.email}</a>
            </li>
            {footer.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </li>
            ))}
            <li>{footer.address}</li>
          </ul>
        </div>

        <div>
          <h4>Hours</h4>
          <ul className="site-footer__hours">
            {footer.hours.map(({ days, time }) => (
              <li key={days}>
                <span>{days}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {copyrightYear} {siteName}. All rights reserved.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
