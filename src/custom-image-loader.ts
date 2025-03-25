//custom-image-loader.js

import config from "../next.config";
import path from "path";

export default function myImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  if (config.basePath && path.isAbsolute(src)) {
    return `${config.basePath}${src}?width=${width}`;
  }
  return `${src}?width=${width}`;
}
