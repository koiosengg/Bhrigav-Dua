import React, { useState, useEffect, useRef } from "react";

const getYoutubeId = (url) => {
  if (!url) return "";
  // If it's already an 11-character video ID, return it directly
  if (url.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }
  const reg = new RegExp(
    '(?:youtube\\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\\.be/)([^"&?/\\s]{11})'
  );
  const match = url.match(reg);
  return match ? match[1] : "";
};

function YoutubePlayer({ url, title, autoplay = false, mute = true, loop = true, controls = true, rel = false }) {
  const videoId = getYoutubeId(url);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" } // trigger load before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoplay]);

  if (!videoId) {
    return <div style={{ color: "red" }}>Invalid YouTube Link</div>;
  }

  // Construct iframe source URL
  const queryParams = new URLSearchParams({
    autoplay: autoplay || isLoaded ? "1" : "0",
    mute: mute ? "1" : "0",
    loop: loop ? "1" : "0",
    playlist: videoId,
    controls: controls ? "1" : "0",
    rel: rel ? "1" : "0",
    modestbranding: "1",
    enablejsapi: "1",
    cc_load_policy: "3"
  });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${queryParams.toString()}`;

  if (autoplay) {
    // For autoplaying loop videos, we wait until they enter viewport, then mount the iframe
    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#000",
          aspectRatio: "16/9"
        }}
      >
        {isLoaded ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
          ></iframe>
        ) : (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1
              }}
            />
          </div>
        )}
      </div>
    );
  }

  // Click-to-play for standard videos
  if (isLoaded) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%", aspectRatio: "16/9" }}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
        ></iframe>
      </div>
    );
  }

  // Thumbnail overlay with play button
  const thumbnailUrl = hasError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsLoaded(true);
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        aspectRatio: "16/9",
        cursor: "pointer",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        onError={() => setHasError(true)}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth === 120 && e.currentTarget.naturalHeight === 90) {
            setHasError(true);
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)")}
      />
      {/* Play button */}
      <div
        className="youtube-play-btn"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #fff",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.15)";
          e.currentTarget.style.backgroundColor = "#ff0000";
          e.currentTarget.style.borderColor = "#ff0000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          e.currentTarget.style.borderColor = "#fff";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          width="30"
          height="30"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

export default YoutubePlayer;
