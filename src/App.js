import "./App.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [options, setOptions] = useState([
    {
      text: "English",
      ln: "en",
    },
    {
      text: "संस्कृत",
      ln: "sanskrit",
    },
    {
      text: "हिंदी",
      ln: "hn",
    },
  ]);
  const arr = [
    {
      text: "English",
      ln: "en",
    },
    {
      text: "संस्कृत",
      ln: "sanskrit",
    },
    {
      text: "हिंदी",
      ln: "hn",
    },
  ];
  const [filterOption, setFilterOption] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    const filter = arr.filter((language) => {
      return language.ln ===  storedLanguage;
    });
    return filter
  });
  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
 
  useEffect(() => {
   if(filterOption.length !==0 )
   {
    const updatedArr = arr.filter(item => item.ln !== filterOption[0].ln);
    setOptions(updatedArr);
  }
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
      changeLanguage(storedLanguage);
    }
  }, []);
  return (
    <div className="App">
      <h1>{t("headerTitle")}</h1>
      <h3>Current Language: {currentLanguage}</h3>
      <select
        type="button"
        style={{ width: 200 }}
        onChange={handleChangeLanguage}
      >
      {( filterOption.length !==0 ? <option  value={filterOption[0].ln}>
          {filterOption[0].text}
        </option>:<option value="en">English</option>)}
        {options.map((option, index) => (
          <option key={index} value={option.ln}>
            {option.text}
          </option>
        ))}
      </select>
      <h3>{t("name")}</h3>
      <h3>{t("nameValue")}</h3>
      <h3>{t("prayer")}</h3>
      <h1>{t("maharani")}</h1>
    </div>
  );
}

export default App;
