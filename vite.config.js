import { resolve } from "path";
import { defineConfig } from "vite";
<<<<<<< HEAD

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
=======
>>>>>>> parent of ab82f9e (fix(scripts): fixed scripts, deleted output, added tailwind/vite plugin)

export default defineConfig({
  appType: "mpa",
  base: "",
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./auth/login/index.html"),
        auth: resolve(__dirname, "./auth/index.html"),
        register: resolve(__dirname, "./auth/register/index.html"),
        profile: resolve(__dirname, "./profile/index.html"),
        post: resolve(__dirname, "./post/index.html"),
        editPost: resolve(__dirname, "./post/edit/index.html"),
        createPost: resolve(__dirname, "./post/create/index.html"),
      },
    },
  },
<<<<<<< HEAD
  plugins: ['./postcss.config.js',],
=======
>>>>>>> parent of ab82f9e (fix(scripts): fixed scripts, deleted output, added tailwind/vite plugin)
});
