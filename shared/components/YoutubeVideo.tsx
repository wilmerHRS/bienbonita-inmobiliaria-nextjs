export interface YoutubeVideoProps {
  videoId: string;
  sizePx: string;
}

const YouTubeVideo = ({ videoId, sizePx }: YoutubeVideoProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&showinfo=0`;

  const iframeStyles: React.CSSProperties = {
    position: 'absolute',
    height: '100%',
    minWidth: '100%',
    minHeight: '56.25vw',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    pointerEvents: 'none',
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden z-0"
      style={{ height: sizePx }}
    >
      <iframe
        src={embedUrl}
        allow="autoplay; encrypted-media; loop"
        allowFullScreen
        title="Video de fondo sin controles"
        style={iframeStyles}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
