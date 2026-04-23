function DropdownChevron() {
  return (
    <span className="dropdown-chevron">
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"/>
      </svg>
    </span>
  );
}

const navItems = [
  { label: 'Platform', href: 'https://topkey.io/platform', hasDropdown: true },
  { label: 'Integrations', href: 'https://topkey.io/integrations', hasDropdown: true },
  { label: 'Customers', href: 'https://topkey.io/customers', hasDropdown: false },
  { label: 'Resources', href: 'https://topkey.io/resources', hasDropdown: true },
];

const EXT = { target: '_blank', rel: 'noopener noreferrer' };

const NAV_TEXT_STYLE = {
  fontFamily: 'Foundersgrotesk, Arial, sans-serif',
  fontSize: '1rem',
  fontWeight: 400,
  color: 'rgba(17,22,61,0.64)',
  textDecoration: 'none',
};

export default function Header() {
  return (
    <header className="navbar2_component">
      <div className="navbar2_container">

        {/* Logo */}
        <a href="https://topkey.io" {...EXT}>
          <img src="/topkey-logo-dark.svg" alt="Topkey" className="navbar2_logo" />
        </a>

        {/* Center nav */}
        <nav className="navbar2_menu">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <a key={item.label} href={item.href} {...EXT} className="navbar2_dropdwn-toggle" style={{ ...NAV_TEXT_STYLE, padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '4px', borderRadius: '12px' }}>
                <span className="dropdown-title">{item.label}</span>
                <DropdownChevron />
              </a>
            ) : (
              <a key={item.label} href={item.href} {...EXT} className="navbar2_link" style={{ ...NAV_TEXT_STYLE, padding: '8px', display: 'flex', alignItems: 'center' }}>
                <span className="dropdown-title">{item.label}</span>
              </a>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="navbar2_button-wrapper">
          <a href="https://topkey.io/login" {...EXT} className="navbar2_link" style={{ ...NAV_TEXT_STYLE, padding: '8px', display: 'flex', alignItems: 'center' }}>
            Log in
          </a>
          <a href="https://topkey.io/demo" {...EXT} className="tk-btn tk-btn-sm tk-btn-primary">
            Book a demo
          </a>
        </div>

      </div>
    </header>
  );
}
