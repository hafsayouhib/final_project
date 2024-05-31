import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"
dotenv.config()


export default defineConfig({
	plugins: [react()],
	server: {
		port: process.env.VITE_PORT,
		proxy: {
			"/api": {
				target: process.env.VITE_PROXY_TARGET,
			},
		},
	},
});