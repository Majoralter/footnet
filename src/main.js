import "./app.scss";
import "./scores"
import "./stats"
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;