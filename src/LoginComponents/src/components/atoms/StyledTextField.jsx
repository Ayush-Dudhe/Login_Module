import React, { useState, useEffect } from "react";
import "./atoms.css";

function StyledTextField({
  value,
  placeholder,
  type,
  onInputChange,
  autofocus,
  onKeyUp,
  readOnly,
  rows,
}) {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    if (_value !== value) {
      setValue(value);
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    onInputChange(event.target.value);
  };

  return type === "textarea" ? (
    <textarea
      className="input"
      // type={type}
      placeholder={placeholder}
      onChange={handleChange}
      required
      value={_value}
      autoFocus={autofocus}
      onKeyUp={onKeyUp}
      readOnly={readOnly ? readOnly : false}
      disabled={readOnly ? true : false}
      style={{resize: "none"}}
      rows={rows ? rows : "1"}
    />
  ) : (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      required
      value={_value}
      autoFocus={autofocus}
      onKeyUp={onKeyUp}
      readOnly={readOnly ? readOnly : false}
      disabled={readOnly ? true : false}
    />
  );
}

export default StyledTextField;
