import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const size = {
  width: 1200,
  height: 630,
};

/** Homepage-only share image — not attached as default OG for other routes. */
export async function GET() {
  const logoBuffer = await readFile(join(process.cwd(), "public/brand/apexone-logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #fbfcfe 0%, #e8f1f5 48%, #d4e8f0 100%)",
        }}
      >
        <img
          src={logoSrc}
          width={260}
          height={260}
          alt="ApexOne"
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#104c68",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            ApexOne
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#667085",
              marginTop: 14,
              textAlign: "center",
              maxWidth: 760,
            }}
          >
            Software that transforms how businesses run.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#3a7a94",
              marginTop: 18,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            apexonemm.tech
          </div>
        </div>
      </div>
    ),
    size,
  );
}
