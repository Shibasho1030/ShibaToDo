import Closing from "./Closing";
import ColorPalette from "./ColorPalette";
import FigmaDesignProcess from "./FigmaDesignProcess";
import Hello from "./Hello";
import History from "./History";
import Improvements from "./Improvements";
import LearningResources from "./LearningResources";
import Overview from "./Overview";
import Requirements from "./Requirements";
import Structure from "./Structure";
import TechStack from "./TechStack";

function Readme() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-4xl border border-white/40 bg-white/70 shadow-[0_20px_80px_rgba(39,55,77,0.12)] backdrop-blur-md">
        <Hello />
        <div className="space-y-12 px-6 py-8 sm:px-10 sm:py-10">
          <Overview />
          <History />
          <FigmaDesignProcess />
          <Requirements />
          <Improvements />
          <TechStack />
          <ColorPalette />
          <LearningResources />
          <Structure />
          <Closing />
        </div>
      </div>
    </section>
  );
}

export default Readme;
