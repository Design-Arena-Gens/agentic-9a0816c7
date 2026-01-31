import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>مطعم رزيال</h1>
          <ul className={styles.navLinks}>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#menu">قائمة الطعام</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>مرحباً بكم في مطعم رزيال</h2>
            <p className={styles.heroSubtitle}>أشهى المأكولات الشرقية الأصيلة</p>
            <button className={styles.ctaButton}>اطلب الآن</button>
          </div>
        </section>

        <section id="menu" className={styles.menu}>
          <h2 className={styles.sectionTitle}>قائمة الطعام</h2>
          <div className={styles.menuGrid}>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🍖</div>
              <h3>المشاوي</h3>
              <p>كباب، تكا، شاورما</p>
              <span className={styles.price}>45 ريال</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🍚</div>
              <h3>الأطباق الرئيسية</h3>
              <p>كبسة، مندي، برياني</p>
              <span className={styles.price}>40 ريال</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🥗</div>
              <h3>المقبلات</h3>
              <p>حمص، بابا غنوج، فتوش</p>
              <span className={styles.price}>20 ريال</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🍰</div>
              <h3>الحلويات</h3>
              <p>كنافة، بقلاوة، أم علي</p>
              <span className={styles.price}>25 ريال</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🥤</div>
              <h3>المشروبات</h3>
              <p>عصائر طازجة، قهوة، شاي</p>
              <span className={styles.price}>15 ريال</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.menuIcon}>🍕</div>
              <h3>الوجبات السريعة</h3>
              <p>برجر، بيتزا، ساندويش</p>
              <span className={styles.price}>30 ريال</span>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <h2 className={styles.sectionTitle}>من نحن</h2>
          <div className={styles.aboutContent}>
            <p>
              مطعم رزيال هو وجهتك المثالية للاستمتاع بأشهى المأكولات الشرقية الأصيلة.
              نقدم لكم تجربة طعام لا تُنسى مع أجود المكونات وأفضل الطهاة.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✨</span>
                <h3>جودة عالية</h3>
                <p>مكونات طازجة يومياً</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>👨‍🍳</span>
                <h3>طهاة محترفون</h3>
                <p>خبرة تمتد لسنوات</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚚</span>
                <h3>توصيل سريع</h3>
                <p>خدمة توصيل لجميع المناطق</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2 className={styles.sectionTitle}>اتصل بنا</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <p>+966 50 123 4567</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <p>info@razyal.com</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <p>من السبت إلى الخميس: 10 ص - 12 م</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 مطعم رزيال - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}
