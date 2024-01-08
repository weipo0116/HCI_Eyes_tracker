// CategoriesList.js

import React from 'react';

function CategoriesList() {
  return (
    <aside>
      <ul>
        <li>
          <a href="#" className="text-sm text-black">
            ALL CATEGORIES
          </a>
        </li>
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
      </ul>
    </aside>
  );
}

export default CategoriesList;
