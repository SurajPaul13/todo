import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', language: 'English' },
  { code: 'fr', language: 'French' },
  { code: 'hi', language: 'हिन्दी' },
  { code: 'te', language: 'తెలుగు' },
  { code: 'ar', language: 'عربي' },
];

const LanguageButtons = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('')

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const code = event.target.value
    i18n.changeLanguage(code);
  };

  useEffect(() => {

    const selectedLanguage = localStorage.getItem('i18nextLng')

    setSelectedLanguage(selectedLanguage)

    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="buttons-container">
      <b className="mr-2">Language</b>
      <select onChange={changeLanguage} value={selectedLanguage}>
        {languages.map((lang) => (
          <option
            value={lang.code}
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
