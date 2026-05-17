import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacto" className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">{t('footer.brand')}</p>
          <p className="footer__text">{t('footer.text')}</p>
        </div>
        <div className="footer__contact">
          <p>info@domoinmobiliaria.es</p>
          <p>+34 900 123 456</p>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Mi App Domo. {t('footer.rights')}
      </p>
    </footer>
  )
}
