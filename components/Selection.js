import { Select } from "@chakra-ui/react";
import React from "react";

const Selection = ({ placeholder, options, onSelect }) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={onSelect}
      variant="filled"
      mb={4}
      w={["xs", "sm", "xl", "2xl"]}
      mx="auto"
    >
      {options.map((opt) => (
        <option value={opt.toUpperCase()} key={opt}>
          {opt}
        </option>
      ))}
    </Select>
  );
};

export default Selection;
