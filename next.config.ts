import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory otherwise wins the root inference.
  outputFileTracingRoot: __dirname,

  // The site previously shipped as loose .html files. Keep those URLs working
  // for anyone holding an old link or bookmark.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      {
        source: "/Nadi_Nakshatra_Astrology.html",
        destination: "/nadi-nakshatra-astrology",
        permanent: true,
      },
      { source: "/mental-health.html", destination: "/mental-health", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
