import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Foodora_Logo.png";
import map from "../../assets/map-pin.svg";
import primary from "../../assets/primary.svg";
import basket from "../../assets/basket.svg";
import language from "../../assets/language.svg";

import { Bike, ChevronDown, CircleCheck, Footprints, Search, ShoppingBag, Store } from "lucide-react";

import "./header.css";

function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <section className="section-header-navbar">
      <header className="header">
        <NavLink to="/" className="logo" end>
          <img src={logo} alt="Fodora Food Deliveery logo" />
        </NavLink>

        <div className="location-selector">
          <button
            type="button"
            aria-label="Select delivery address"
            onClick={() => {}}
          >
            <img src={map} alt="map-pin" />
            <span className="location">Select delivery address</span>
          </button>
        </div>

        <div className="nav-links-btns">
          <NavLink to="/" className="auth-btn">
            Log in
          </NavLink>

          <NavLink to="/" className="login-btn-link">
            Sign up for free delivery
          </NavLink>

          <div className="language-selector-container">
            <button
              type="button"
              className="language-trigger"
              aria-label="Select language"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
            >
              <img
                src={language}
                alt="language"
                className="language"
                style={{ width: "18px", height: "18px" }}
              />
              <span className="language-value">{selectedLanguage}</span>
              <span
                className={`language-arrow ${isLanguageOpen ? "open" : ""}`}
              >
                <ChevronDown />
              </span>
            </button>

            {isLanguageOpen && (
              <div className="language-dropdown">
                <button
                  type="button"
                  className={`language-option ${selectedLanguage === "HU" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedLanguage("HU");
                    setIsLanguageOpen(false);
                  }}
                >
                  Hungarian
                  {selectedLanguage === "HU" && (
                    <span className="language-check">
                      <CircleCheck />
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  className={`language-option ${selectedLanguage === "EN" ? "active" : ""}`}
                  onClick={() => {
                    setSelectedLanguage("EN");
                    setIsLanguageOpen(false);
                  }}
                >
                  English
                  {selectedLanguage === "EN" && (
                    <span className="language-check">
                      <CircleCheck />
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="right-icons-container">
          <div>
            <span className="right-icon-primary">
              <img
                src={primary}
                alt="primary"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
          </div>
          <div>
            <span className="right-icon-basket">
              <img
                src={basket}
                alt="basket"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
          </div>
        </div>
      </header>

      <div className="navbar-bottom">
        <div className="tab-container">
          <ul className="tab-list">
            <li>
              <NavLink to="/delivery" className="tab-item">
                <Bike /> Food delivery
              </NavLink>
            </li>

            <li>
              <NavLink to="/pickup" className="tab-item">
                 <Footprints />Pick up
              </NavLink>
            </li>
            <li>
              <NavLink to="/pickup" className="tab-item">
                <ShoppingBag /> foodora market
              </NavLink>
            </li>
            <li>
              <NavLink to="/pickup" className="tab-item">
                <Store /> Shops
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <Search />
          <input
            type="text"
            className="search-input"
            placeholder="Search something tasty..."
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
