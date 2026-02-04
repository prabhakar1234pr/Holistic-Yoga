import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  title: string;
  subtitle: string;
};

export const HeroBreathingDot: React.FC<Props> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const breathe = spring({
    frame,
    fps,
    config: {
      damping: 18,
      stiffness: 80,
      mass: 0.7,
    },
    durationInFrames: 90,
  });

  const scale = interpolate(breathe, [0, 1], [0.85, 1.1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 30% 30%, #ecfdf5 0%, #ffffff 45%, #f5f3ff 100%)",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", opacity }}>
        <div
          style={{
            width: 140,
            height: 140,
            margin: "0 auto 40px",
            borderRadius: 999,
            transform: `scale(${scale})`,
            background: "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.95), rgba(139,92,246,0.25) 60%, rgba(16,185,129,0.10) 80%, transparent 100%)",
            boxShadow: "0 18px 55px rgba(16, 185, 129, 0.25)",
          }}
        />
        <div style={{ fontSize: 92, fontWeight: 700, color: "#111827", lineHeight: 1.05 }}>
          {title}
        </div>
        <div style={{ marginTop: 18, fontSize: 40, color: "#374151", fontWeight: 300 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

