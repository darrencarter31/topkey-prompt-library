export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #11163d1a', background: '#fff' }}>
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        style={{
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          color: '#11163da3',
        }}
      >
        <span>© {new Date().getFullYear()} Topkey. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a
            href="https://topkey.io/privacy"
            className="transition-colors hover:text-navy"
            style={{ color: '#11163da3' }}
          >
            Privacy
          </a>
          <a
            href="https://topkey.io/terms"
            className="transition-colors hover:text-navy"
            style={{ color: '#11163da3' }}
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
