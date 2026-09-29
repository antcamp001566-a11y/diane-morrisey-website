import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A text-based social preview card generated at build/request time — not a
// stand-in for a real photo, just a clean branded card for link previews
// until a real photography-based OG image is supplied per page.
export default async function OpengraphImage() {
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
          backgroundColor: "#fdf6ec",
          backgroundImage: "linear-gradient(135deg, #fdf6ec 0%, #f5e9d6 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#e0503a",
            color: "#fdf6ec",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          DM
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#3a2e28",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#5f6f47",
            fontWeight: 600,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
