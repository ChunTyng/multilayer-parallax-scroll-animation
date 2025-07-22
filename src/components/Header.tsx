import styles from './header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="#">Logo</a>
        </div>

        <input
          type="radio"
          name="slider"
          id="menu-btn"
          className={styles.hiddenInput}
        />
        <input
          type="radio"
          name="slider"
          id="close-btn"
          className={styles.hiddenInput}
        />

        <ul className={styles.navLinks}>
          <label
            htmlFor="close-btn"
            className={`${styles.btn} ${styles.closeBtn}`}
          >
            <i className="fas fa-times"></i>
          </label>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#" className={styles.desktopItem}>
              Dropdown Menu
            </a>
            <input
              type="checkbox"
              id="showDrop"
              className={styles.hiddenInput}
            />
            <label htmlFor="showDrop" className={styles.mobileItem}>
              Dropdown Menu
            </label>
            <ul className={styles.dropMenu}>
              <li>
                <a href="#">Drop menu 1</a>
              </li>
              <li>
                <a href="#">Drop menu 2</a>
              </li>
              <li>
                <a href="#">Drop menu 3</a>
              </li>
              <li>
                <a href="#">Drop menu 4</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className={styles.desktopItem}>
              Mega Menu
            </a>
            <input
              type="checkbox"
              id="showMega"
              className={styles.hiddenInput}
            />
            <label htmlFor="showMega" className={styles.mobileItem}>
              Mega Menu
            </label>

            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.row}>
                  <header>Design Services</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>Email Services</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Personal Email</a>
                    </li>
                    <li>
                      <a href="#">Business Email</a>
                    </li>
                    <li>
                      <a href="#">Mobile Email</a>
                    </li>
                    <li>
                      <a href="#">Web Marketing</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>Security services</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">Site Seal</a>
                    </li>
                    <li>
                      <a href="#">VPS Hosting</a>
                    </li>
                    <li>
                      <a href="#">Privacy Seal</a>
                    </li>
                    <li>
                      <a href="#">Website design</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>

        <label htmlFor="menu-btn" className={`${styles.btn} ${styles.menuBtn}`}>
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Header;
