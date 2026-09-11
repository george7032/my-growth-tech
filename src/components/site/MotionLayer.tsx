import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Site-wide motion layer.
 * - Adds a scroll progress bar at the top of the viewport.
 * - Auto-reveals page sections on scroll with a staggered cascade.
 * Respects prefers-reduced-motion.
 */
export function MotionLayer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
      bar.style.transform = `scaleX(${pct})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.classList.remove("motion-ready");
      return;
    }

    const targets: HTMLElement[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const collect = () => {
      const blocks = Array.from(
        document.querySelectorAll<HTMLElement>("main > section, main > div, main > article, main section"),
      );
      blocks.forEach((block, blockIndex) => {
        const container = block.querySelector<HTMLElement>(":scope > .container-page") ?? block;
        const children = Array.from(container.children) as HTMLElement[];

        children.forEach((child) => {
          if (child.hasAttribute("data-reveal") || child.closest("[data-reveal]")) return;
          if (child.classList.contains("absolute")) return;
          if (child.querySelector("section")) return;

          // Grid / card lists animate item-by-item for a nicer cascade
          const isList = child.childElementCount > 2 && /grid|flex/.test(child.className);
          const group = isList ? (Array.from(child.children) as HTMLElement[]) : [child];

          group.forEach((el, i) => {
            el.setAttribute("data-reveal", "");
            el.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 80}ms`);
            targets.push(el);
          });
        });

        // First screenful reveals immediately so nothing looks blank on load
        if (blockIndex === 0) {
          block.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
            el.classList.add("is-revealed");
          });
        }
      });

      targets.forEach((el) => {
        if (!el.classList.contains("is-revealed")) io.observe(el);
      });
    };

    // Wait until hydration has settled before touching the DOM.
    const timer = window.setTimeout(collect, 150);

    return () => {
      window.clearTimeout(timer);
      io.disconnect();
      targets.forEach((el) => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-revealed");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      <div id="scroll-progress" className="scroll-progress-bar" />
    </div>
  );
}
