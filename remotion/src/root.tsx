import { Composition } from "remotion";
import { HeroBreathingDot } from "./templates/HeroBreathingDot";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroBreathingDot"
        component={HeroBreathingDot}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Holistic Yoga",
          subtitle: "Your Online Yoga Sanctuary",
        }}
      />
    </>
  );
};

