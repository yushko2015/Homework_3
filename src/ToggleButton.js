import React, { useState } from "react";

const ToggleButton = ({ onSortChange }) => {
  const [toggled, setToggled] = useState(false);
  const handleToggleChange = e => {
    onSortChange(e.target.checked);
    setToggled(e.target.checked);
  };

  return (
    <div className="toggle-container">
      <span className="toggle-container__title">Top Rated TV shows:</span>
      <label className="switch">
        <input
          ckecked={toggled}
          onChange={handleToggleChange}
          id="toggle-input"
          type="checkbox"
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ToggleButton;
