"use client";

import { Paper, Stack, Textarea, Group, Button } from "@mantine/core";
import { useState } from "react";
import ToolBase from "./ToolBase";

export interface StringConversionToolProps {
  title: string;
  encodeKeyword: string;
  decodeKeyword: string;
  encode: (input: string) => string;
  decode: (input: string) => string;
}

export default function StringConversionTool({
  title,
  encodeKeyword,
  decodeKeyword,
  encode,
  decode,
}: StringConversionToolProps) {
  const [input, setInput] = useState("");

  return (
    <ToolBase title={title}>
      <Paper className="w-80">
        <Stack gap="sm">
          <Textarea
            label="Input text"
            autosize
            minRows={4}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <Group>
            <Button onClick={() => setInput(encode)}>{encodeKeyword}</Button>
            <Button onClick={() => setInput(decode)}>{decodeKeyword}</Button>
          </Group>
        </Stack>
      </Paper>
    </ToolBase>
  );
}
