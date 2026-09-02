import dns from "node:dns";

// Ruter deli samo link-local IPv6 DNS (fe80::1); Node/c-ares to ne ume da parsira
// i padne na 127.0.0.1 gde nista ne slusa -> "querySrv ECONNREFUSED".
// Forsiramo javne DNS servere za ceo Next proces (dev i build).
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8"]);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
