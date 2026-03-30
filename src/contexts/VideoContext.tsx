import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface VideoContextType {
  videoFinished: boolean;
  setVideoFinished: (v: boolean) => void;
  unlockProgress: number;
}

const VideoContext = createContext<VideoContextType>({
  videoFinished: false,
  setVideoFinished: () => {},
  unlockProgress: 0,
});

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [started, setStarted] = useState(false);

  // Start the 60s timer when video starts playing
  const handleSetVideoFinished = (v: boolean) => {
    if (v) {
      setVideoFinished(true);
    }
  };

  // Start timer on first interaction (play button click triggers re-render)
  useEffect(() => {
    if (videoFinished) return;

    const timer = setTimeout(() => {
      setStarted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoFinished]);

  useEffect(() => {
    if (!started || videoFinished) return;

    const duration = 60000; // 60 seconds
    const interval = 50; // update every 50ms for smooth animation
    let elapsed = 0;

    const id = setInterval(() => {
      elapsed += interval;
      const progress = Math.min(elapsed / duration, 1);
      setUnlockProgress(progress);

      if (progress >= 1) {
        clearInterval(id);
        setVideoFinished(true);
      }
    }, interval);

    return () => clearInterval(id);
  }, [started, videoFinished]);

  return (
    <VideoContext.Provider value={{ videoFinished, setVideoFinished: handleSetVideoFinished, unlockProgress }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
