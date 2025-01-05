import type { NextConfig } from "next";
import GaladrielWebpackClient from "@galadrielcss/webpack";

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.plugins.push(new GaladrielWebpackClient());

        return config;
    },
};

export default nextConfig;
