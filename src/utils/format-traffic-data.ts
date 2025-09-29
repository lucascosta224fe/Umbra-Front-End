export const formatTrafficRate = (bytes?: number): string => {
  if (!bytes || bytes === 0) {
    return "0 B/s";
  }

  const sizes = ["B/s", "KB/s", "MB/s", "GB/s"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  if (i === 0) {
    return `${bytes} ${sizes[i]}`;
  }

  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};