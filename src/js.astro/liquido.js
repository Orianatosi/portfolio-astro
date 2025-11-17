export default function initLiquify() {
  const container = document.querySelector(".liquify");
  const img = container?.querySelector("img");

  if (!container || !img) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * 10;
    const rotateY = x * 10;
    const translateX = x * 8;
    const translateY = y * 8;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px) scale(1.02)`;
  });

  container.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg) translate(0px, 0px) scale(1)";
  });
}
