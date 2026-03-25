/**
 * useAnalytics — rastreia cliques nos links e armazena em localStorage.
 * Estrutura: { [linkId]: { count: number, lastClick: ISO string } }
 */
export function useAnalytics() {
  function track(linkId, label) {
    try {
      const raw = localStorage.getItem("mylinks-analytics") || "{}";
      const data = JSON.parse(raw);
      const prev = data[linkId] || { count: 0 };
      data[linkId] = {
        label,
        count: prev.count + 1,
        lastClick: new Date().toISOString(),
      };
      localStorage.setItem("mylinks-analytics", JSON.stringify(data));
    } catch {
      // silently fail — analytics never quebra a UI
    }
  }

  function getAll() {
    try {
      return JSON.parse(localStorage.getItem("mylinks-analytics") || "{}");
    } catch {
      return {};
    }
  }

  return { track, getAll };
}
