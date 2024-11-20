import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ["image/webp"],
        loader: "default",
        path: "/_next/image",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "zdmvmqnfxspqronkjrxn.supabase.co",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "kuqudkdgwebajssmbczl.supabase.co",
                port: "",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
