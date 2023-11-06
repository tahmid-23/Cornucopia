"use client";

import StringConversionTool from "@/components/tool/StringConversionTool";

export default function Page() {
  return (
    <StringConversionTool
      title="JavaScript String Escape"
      encodeKeyword="Escape"
      decodeKeyword="Unescape"
      encode={(input) =>
        input.replace(/[\\'"]/g, "\\$&").replaceAll("\n", "\\n")
      }
      decode={(input) =>
        input.replace(/(?<!\\)\\n/g, "\n").replace(/\\([\\'"])/g, "$1")
      }
    />
  );
}
