export function ThemeScript() {
  const script = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "dark" || stored === "light"
        ? stored
        : "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
