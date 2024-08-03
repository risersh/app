import "../node_modules/github-markdown-css/github-markdown.css";
import "./app.pcss";
import App from "./app.svelte";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
