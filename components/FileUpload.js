import { InputGroup } from "@chakra-ui/react";

import React, { useRef } from "react";

const FileUpload = ({ register, accept, multiple, children }) => {
  const inputRef = useRef();
  const { ref, ...rest } = register;

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup
      onClick={handleClick}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};

export default FileUpload;
