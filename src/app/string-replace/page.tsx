"use client";

import ToolBase from "@/components/tool/ToolBase";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useCallback, useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [useRegex, setUseRegex] = useState(false);
  const [replacement, setReplacement] = useState("");

  const doReplacement = useCallback(() => {
    if (useRegex) {
      const re = new RegExp(search, "g");
      setInput((oldInput) => oldInput.replaceAll(re, replacement));
    } else {
      setInput((oldInput) => oldInput.replaceAll(search, replacement));
    }
  }, [replacement, search, useRegex]);

  return (
    <ToolBase title="String Replacement">
      <Paper className="w-80">
        <Stack>
          <Textarea
            label="Input text"
            autosize
            minRows={4}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <TextInput
            label="Search for:"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Checkbox
            label="Use regex"
            checked={useRegex}
            onChange={(e) => setUseRegex(e.currentTarget.checked)}
          />
          <TextInput
            label="Replace with:"
            value={replacement}
            onChange={(e) => setReplacement(e.currentTarget.value)}
          />
          <Button onClick={doReplacement}>Replace</Button>
        </Stack>
      </Paper>
    </ToolBase>
  );
}
