"use client";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [isDropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="container px-16 py-4 bg-white">
      <Head>
        <title>HCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-between items-center py-4">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-sm text-black">
              MENSWEAR
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-black">
              WOMENSWEAR
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-black">
              EVERYTHING ELSE
            </a>
          </li>
          <li onClick={toggleSearchVisibility}>
            <a href="#" className="text-sm text-black">
              SEARCH
            </a>
            {isSearchVisible && (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="px-2 py-1 border"
                />
              </div>
            )}
          </li>
        </ul>
        <a href="#" className="text-3xl  text-black">
          HCI
        </a>
        <ul className="flex space-x-4">
          <li></li>
          <li>
            <a href="#" className="text-sm text-black">
              ENGLISH
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-black">
              LOGIN
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-black">
              WISHLIST
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-black">
              SHOPPING BAG (0)
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex justify-between">
        {/* Left Aside */}
        <div className="flex-col my-8">
          <aside>
            <ul>
              <li>
                {/* <span
                  className="cursor-pointer text-sm text-black"
                  onClick={toggleDropdown}
                >
                  &#9776; {/* Unicode character for the hamburger icon 
                </span> */}
                <a href="#" className="text-sm text-black">
                  ALL CATEGORIES
                </a>
                {/* <span className=" cursor-pointer" onClick={toggleDropdown}>
                  &#9662;
                </span> */}
              </li>
              {isDropdownVisible && (
                <>
                  <li>
                    <a href="#" className="text-xs text-black">
                      ACTIVITY
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-black">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-black">
                      KIDS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-black">
                      PETS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-black">
                      SELF-CARE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-xs text-black">
                      TECHNOLOGY
                    </a>
                  </li>
                </>
              )}
            </ul>
          </aside>

          <aside className="mt-8">
            <h1 className="text-sm text-black">CLOTHING</h1>
            <ul>
              <li>
                <a href="#" className="text-xs text-black">
                  Bodysuits & Camis
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Tanks & Tees
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Blouses & Shirts
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Sweatshirts & Hoodies
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Sweaters
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Skirts
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Shorts
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Pants
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Jeans
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Dresses & Jumpsuits
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Vests
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-black">
                  Cardigans
                </a>
              </li>
            </ul>
          </aside>
        </div>

        {/* Center Section */}
        <section className="my-8 mr-8 ml-8 items-center ">
          <ul className="flex justify-center items-start grid grid-cols-4 gap-4">
            <li className="flex-1 text-left mx-4">
              <img src="https://via.placeholder.com/180" alt="Product 1" />
              <p className="text-xs text-black">SATTA Khaki Wall Organizer</p>
              <p className="text-xs text-black">$65</p>
            </li>
            <li className="flex-1 text-left mx-4">
              <img src="https://via.placeholder.com/180" alt="Product 2" />
              <p className="text-xs text-black">
                EX NIHILO PARIS Fascination Eau de Parfum Travel Set
              </p>
              <p className="text-xs text-black">$195</p>
            </li>
            <li className="flex-1 text-left mx-4">
              <img src="https://via.placeholder.com/180" alt="Product 3" />
              <p className="text-xs text-black">
                FLOS Purple Lampadina Table Lamp
              </p>
              <p className="text-xs text-black">$170</p>
            </li>
            <li className="flex-1 text-left mx-4">
              <img src="https://via.placeholder.com/180" alt="Product 1" />
              <p className="text-xs text-black">SATTA Khaki Wall Organizer</p>
              <p className="text-xs text-black">$65</p>
            </li>
            <li className="flex-1 text-left mx-4">
              <img src="https://via.placeholder.com/180" alt="Product 1" />
              <p className="text-xs text-black">SATTA Khaki Wall Organizer</p>
              <p className="text-xs text-black">$65</p>
            </li>
          </ul>
        </section>

        {/* Right Aside */}
        <aside className="my-8">
          <h2 className="text-sm text-black">SORT</h2>
          <ul>
            <li>
              <a href="#" className="text-xs text-black">
                Latest arrivals
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Price: Low to high
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Price: High to low
              </a>
            </li>
          </ul>

          <h1 className="mt-8 text-sm text-black">COLORS</h1>
          <ul>
            <li>
              <a href="#" className="text-xs text-black">
                Black
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Blue
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Brown
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Burgundy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Gray
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Green
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Navy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Orange
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Pink
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Purple
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Red
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Tan
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                White
              </a>
            </li>
            <li>
              <a href="#" className="text-xs text-black">
                Yellow
              </a>
            </li>
          </ul>
        </aside>
      </main>

      {/* ... (existing code) */}
    </div>
  );
}
