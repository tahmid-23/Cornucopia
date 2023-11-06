"use client";

import { Button, Group, Paper, Stack, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import ToolBase from "../tool/ToolBase";

export default function UrlEncodeTool() {
  const [input, setInput] = useState("");

  const encode = () => {
    setInput(encodeURIComponent);
  };

  const decode = () => {
    setInput(decodeURIComponent);
  };

  return (
    <ToolBase title={"URL Encoder/Decoder"}>
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
            <Button onClick={encode}>Encode</Button>
            <Button onClick={decode}>Decode</Button>
          </Group>
        </Stack>
      </Paper>
    </ToolBase>
  );
}
