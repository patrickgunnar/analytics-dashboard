import type { NextConfig } from "next";
import GaladrielWebpackClient from "@galadrielcss/webpack";

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config, { isServer }) {
        config.plugins.push(new GaladrielWebpackClient());

        if (!isServer) config.cache = false;

        return config;
    },
};

export default nextConfig;
