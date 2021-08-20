import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";

const RadioSelection = ({ text = "", currentValue, values, onChange }) => {
  return (
    <RadioGroup
      onChange={onChange}
      value={currentValue}
      p={2}
      border="1px solid #e2e8f0"
      borderRadius="md"
      colorScheme="purple"
    >
      <Flex direction={["column", "row"]} justifyContent="space-between">
        <Text fontSize={["sm", "sm", "md", "md"]} textAlign="left">
          {text}
        </Text>
        <Flex direction={["column", "row"]}>
          {values.map((value, idx) => (
            <Radio key={idx} value={value.toUpperCase()} size="sm" px={1}>
              {value}
            </Radio>
          ))}
        </Flex>
      </Flex>
    </RadioGroup>
  );
};

export default RadioSelection;
