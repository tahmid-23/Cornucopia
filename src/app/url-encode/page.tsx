"use client";

import StringConversionTool from "@/components/tool/StringConversionTool";

export default function Page() {
  return (
    <StringConversionTool
      title="URL Encoder/Decoder"
      encodeKeyword="Encode"
      decodeKeyword="Decode"
      encode={encodeURIComponent}
      decode={decodeURIComponent}
    />
  );
}
