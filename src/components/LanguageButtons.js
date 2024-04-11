import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', language: 'English' },
  { code: 'fr', language: 'French' },
  { code: 'hi', language: 'हिन्दी' },
  { code: 'te', language: 'తెలుగు' },
  { code: 'ar', language: 'عربي' },
];

const LanguageButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const code = event.target.selectedOptions[0].id;
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="buttons-container">
      <b className="mr-2">Language</b>
      <select onChange={changeLanguage}>
        {languages.map((lang) => (
          <option
            id={lang.code}
            value={lang.language}
            className={`btn  ${
              lang.code === i18n.language ? 'btn-primary' : ''
            }`}
            key={lang.code}
          >
            {lang.language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageButtons;
