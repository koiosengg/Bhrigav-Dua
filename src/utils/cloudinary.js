const GITHUB_RELEASE_BASE = "https://github.com/koiosengg/Manbhavan-Productions/releases/download/v1.0.0-media";

/**
 * Generates public CDN URL for an image via GitHub Releases.
 */
export const getCloudinaryImageUrl = (publicId) => {
  const fileName = publicId.includes("/") ? publicId.split("/").pop() : publicId;
  return `${GITHUB_RELEASE_BASE}/${fileName}.webp`;
};

/**
 * Generates public CDN URL for a video via GitHub Releases.
 */
export const getCloudinaryVideoUrl = (publicId) => {
  const fileName = publicId.includes("/") ? publicId.split("/").pop() : publicId;
  if (fileName.includes("Father")) {
    return "/assets/videos/Father_sDay_ocqn7w.mp4";
  }
  return `${GITHUB_RELEASE_BASE}/${fileName}.mp4`;
};

