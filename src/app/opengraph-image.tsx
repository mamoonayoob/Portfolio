import { ImageResponse } from "next/og";

export const alt = "Mamoon Ayoob — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(145deg, #060b18 0%, #0b1224 45%, #12203a 100%)",
          color: "#e8eefc",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#60a5fa",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Mamoon Ayoob
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8", maxWidth: 900 }}>
            Full Stack / MERN Developer — Tranzo portals & Ordinify HRMS
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#60a5fa", fontSize: 22 }}>
          <span>WMS</span>
          <span>·</span>
          <span>Portals</span>
          <span>·</span>
          <span>HRMS</span>
        </div>
      </div>
    ),
    size,
  );
}
