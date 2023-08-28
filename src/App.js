import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitchers from "../src/LanguageSwitcher";

function App() {
  let { t } = useTranslation();
  let name = "shreyanshi Shukla";
  return (
    <div className="App">
      <LanguageSwitchers />

      {t("good_morning")}
      <br />
      {t("Welcome", { name: name })}
    </div>
  );
}

export default App;
