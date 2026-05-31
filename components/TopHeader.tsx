

const TopHeader = () => {
    return (
        <aside className={`container site-header__eyebrow`}>
            <a href="tel:+15551234567" className="eyebrow__contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (555) 123-4567
            </a>

            <div className="eyebrow__socials">
                <a href="#" aria-label="Google" className="eyebrow__social-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 1 0 10 10 1 1 0 0 0-1-1h-9v2h7a8 8 0 1 1-2.5-6.5l1.5 1.5a10 10 0 0 0-6-1z" />
                    </svg>
                </a>
                <a href="#" aria-label="Instagram" className="eyebrow__social-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="eyebrow__social-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4l11.73 16h4.52L8.52 4H4z" />
                        <path d="M4 20l6.76-6.76" />
                        <path d="M20 4l-6.76 6.76" />
                    </svg>
                </a>
            </div>
        </aside>
    )
}

export default TopHeader