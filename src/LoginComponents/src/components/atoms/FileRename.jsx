import React, { useState, useEffect } from "react";
import { InputAdornment } from "@material-ui/core";
import { CssTextField } from "../MaterialUIStyledComponents/CssTextField";
import { isNotEmpty, splitFileNameAndExt, hasSpecialCharacter } from '../../utils/helper'


const FileRename = ({ required = false, label = null, variant = "standard", value, onInputChange }) => {
  const [fileName, setFileName] = useState("");
  const [fileExt, setFileExt] = useState("");

  useEffect(() => {
    if (isNotEmpty(value)) {
      const { ext, fileName } = splitFileNameAndExt(value);
      setFileExt(ext);
      setFileName(fileName);
    }
  }, [value]);

  const handleChange = (e) => {
    if (!hasSpecialCharacter(e.target.value)) {
      onInputChange(`${e.target.value}.${fileExt}`)
    }
  }

  return (
    <CssTextField
      autoFocus
      fullWidth
      required={required}
      label={label}
      InputProps={{
        endAdornment: <InputAdornment position="end">{`.${fileExt}`}</InputAdornment>
      }}
      variant={variant}
      value={fileName}
      onChange={handleChange}
    />
  )
}

export default FileRename;