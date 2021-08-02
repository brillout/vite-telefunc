import reactRefresh from "@vitejs/plugin-react-refresh";
import ssr from "vite-plugin-ssr/plugin";
import telefunc from "telefunc/vite";
import { UserConfig } from "vite";

const config: UserConfig = {
  ssr: { external: ["telefunc"] },
  optimizeDeps: { include: ["telefunc/client"] },
  plugins: [reactRefresh(), ssr(), telefunc()],
};

export default config;
