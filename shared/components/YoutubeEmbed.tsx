import YouTubeVideo from './YoutubeVideo';

export interface YoutubeEmbedProps {
  videoId: string;
  sizePx?: string;
  children?: React.ReactNode;
}

const YouTubeEmbed = ({ videoId, sizePx, children }: YoutubeEmbedProps) => {
  const size = sizePx || '550px';

  return (
    <div className="relative" style={{ height: size }}>
      <YouTubeVideo videoId={videoId} sizePx={size} />
      <div
        className="relative z-10 text-white flex items-center"
        style={{ height: size }}
      >
        {/* Contenedor del MAIN: Se centra verticalmente y tiene el fondo */}
        <div className="p-6 md:p-12 md:ps-16">{children}</div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
