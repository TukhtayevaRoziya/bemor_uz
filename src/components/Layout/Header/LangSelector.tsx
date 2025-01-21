import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarTranslateProps {
  onLanguageChange: (language: 'ru' | 'uz') => void;
}
const NavbarTranslate: React.FC<NavbarTranslateProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'ru' | 'uz'>('ru');
  useEffect(() => {
    i18n.changeLanguage('ru');
    onLanguageChange('ru');
  }, [i18n, onLanguageChange]); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLanguageChange = (language: 'ru' | 'uz') => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    onLanguageChange(language);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <div
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="hidden sm:block">{selectedLanguage === 'ru' ? 'RU' : 'UZ'}hey</span>
        <svg
          className="h-4 w-4 md:ml-2 ml-1 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="dropdown-menu absolute right-0 mt-2 w-24  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <li
            onClick={() => handleLanguageChange('ru')}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <span>RU</span>
          </li>
          <li
            onClick={() => handleLanguageChange('uz')}
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <span>UZ</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarTranslate;
