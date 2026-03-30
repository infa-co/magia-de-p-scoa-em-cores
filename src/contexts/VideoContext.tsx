import { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextType {
  videoFinished: boolean;
  setVideoFinished: (v: boolean) => void;
}

const VideoContext = createContext<VideoContextType>({
  videoFinished: false,
  setVideoFinished: () => {},
});

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoFinished, setVideoFinished] = useState(false);
  return (
    <VideoContext.Provider value={{ videoFinished, setVideoFinished }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
