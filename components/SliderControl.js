import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SliderControl = ({
  minValue,
  maxValue,
  currentValue,
  defaultValue,
  onChange,
}) => {
  return (
    <Box>
      <Center>
        <Text>
          Superficie: {currentValue}
          <sup>2</sup>
        </Text>
      </Center>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={defaultValue}
        value={currentValue}
        onChange={onChange}
        min={minValue}
        max={maxValue}
        colorScheme="purple"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default SliderControl;
