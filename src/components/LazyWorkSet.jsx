import { useRef, useState, useEffect, useCallback } from "react";

function LazyWorkSet({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(null);
  const sentinelRef = useRef(null);
  const resizeRef = useRef(null);

  const FALLBACK_HEIGHT =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 550 : 800;

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "600px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const measureRef = useCallback((node) => {
    if (resizeRef.current) {
      resizeRef.current.disconnect();
    }
    if (!node) return;

    resizeRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const blockSize = entry.borderBoxSize?.[0]?.blockSize;
        if (blockSize) setHeight(blockSize);
      }
    });

    resizeRef.current.observe(node);
  }, []);

  useEffect(() => {
    return () => resizeRef.current?.disconnect();
  }, []);

  if (isVisible) {
    return (
      <div ref={measureRef} style={{ width: "100%" }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={sentinelRef}
      style={{ width: "100%", height: height ?? FALLBACK_HEIGHT }}
    />
  );
}

export default LazyWorkSet;
