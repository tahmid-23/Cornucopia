"use client";

import ToolBase from "@/components/tool/ToolBase";
import {
  ColorPicker,
  Flex,
  Group,
  NumberInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

export default function Page() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hexInput, setHexInput] = useState("#000000");

  const componentAsHex = (component: number) => {
    const asHex = component.toString(16);
    return asHex.length === 1 ? `0${asHex}` : asHex;
  };

  const updateWithHexString = (hexString: string) => {
    const match = hexString.match(/#(..)(..)(..)/);
    if (match) {
      const newRed = parseInt(match[1], 16),
        newGreen = parseInt(match[2], 16),
        newBlue = parseInt(match[3], 16);
      setRed(newRed);
      setGreen(newGreen);
      setBlue(newBlue);
      setHexInput(
        `#${componentAsHex(newRed)}${componentAsHex(newGreen)}${componentAsHex(
          newBlue,
        )}`,
      );
    }
  };

  const hexString = `#${componentAsHex(red)}${componentAsHex(
    green,
  )}${componentAsHex(blue)}`;

  return (
    <ToolBase title="Color Picker">
      <Flex className="w-fit" direction="column">
        <ColorPicker
          format="hex"
          fullWidth
          value={hexString}
          onChange={updateWithHexString}
        />
        <TextInput
          className="w-fit"
          label="Hex:"
          value={hexInput}
          onChange={(e) => {
            setHexInput(e.currentTarget.value);
            updateWithHexString(e.currentTarget.value);
          }}
        />
        <Group>
          <NumberInput
            className="w-fit"
            label="Red:"
            hideControls
            min={0}
            max={255}
            value={red}
            onChange={(v) => setRed(Number(v))}
          />
          <NumberInput
            className="w-fit"
            label="Green:"
            hideControls
            min={0}
            max={255}
            value={green}
            onChange={(v) => setGreen(Number(v))}
          />
          <NumberInput
            className="w-fit"
            label="Blue:"
            hideControls
            min={0}
            max={255}
            value={blue}
            onChange={(v) => setBlue(Number(v))}
          />
        </Group>
      </Flex>
    </ToolBase>
  );
}
