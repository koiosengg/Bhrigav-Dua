const CLOUD_NAME = "hozb8ehy";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Generates an optimized Cloudinary URL for an image.
 * @param {string} publicId - The public ID of the uploaded image (usually filename without extension).
 * @param {number} [width] - Optional width to resize the image.
 * @returns {string} Cloudinary Image URL
 */
export const getCloudinaryImageUrl = (publicId, width) => {
  const resizeParam = width ? `,w_${width}` : "";
  return `${BASE_URL}/image/upload/f_auto,q_auto${resizeParam}/${publicId}`;
};

/**
 * Generates an optimized Cloudinary URL for a video.
 * @param {string} publicId - The public ID of the uploaded video.
 * @returns {string} Cloudinary Video URL
 */
export const getCloudinaryVideoUrl = (publicId) => {
  return `${BASE_URL}/video/upload/q_auto/${publicId}.mp4`;
};
