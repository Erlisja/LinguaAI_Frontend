import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'al', name: 'Albanian', flag: '🇦🇱' },
  { code: 'gr', name: 'Greek', flag: '🇬🇷' },
];

const LanguageSelector = ({ type, onSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setTimeout(() => {
      onSelect(language);
    }, 500);
  };

  const handleBack = () => navigate('/');

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-rounded-full bg-radial-[at_50%_50%] from-white to-blue-400 to-85% text-black">
        <h1 className="text-3xl font-bold mb-6">
          {type === 'native'
            ? 'Select Your Native Language'
            : 'Select the Language You Want to Learn'}
        </h1>

        <div className="grid grid-cols-3 gap-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`p-4 rounded-full shadow-lg border-2 ${
                selectedLanguage?.code === lang.code
                  ? 'border-blue-500'
                  : 'border-gray-300'
              } hover:scale-105 transition`}
              onClick={() => handleLanguageSelect(lang)}
            >
              <span className="text-4xl">{lang.flag}</span>
              <p className="mt-2 font-semibold">{lang.name}</p>
            </button>
          ))}
        </div>

        {selectedLanguage && (
          <p className="mt-6 text-lg font-semibold text-green-600">
            Selected: {selectedLanguage.name}
          </p>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
