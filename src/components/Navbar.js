const links = [
  ["About", "#about"],
  ["Departments", "#departments"],
  ["Performance", "#performance"],
  ["Book", "#booking"],
];

export const Navbar = () => `
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
  <div class="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
    <a href="#" class="flex items-center gap-3">
      <span class="grid place-items-center size-10 rounded-xl bg-brand-gradient text-white font-display font-bold">M</span>
      <span class="leading-tight">
        <span class="block font-display font-bold text-brand-gradient">Medicore Vault</span>
        <span class="block text-xs text-slate-500">Secure Care, Limitless Trust</span>
      </span>
    </a>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      ${links.map(([t, h]) => `<a href="${h}" class="hover:text-brand-purple ">${t}</a>`).join("")}
      <a href="#booking" class="rounded-full bg-brand-gradient px-6 py-2.5 text-white shadow-lg shadow-purple-500/20">Book Demo</a>
    </nav>
    <a href="#booking" class="md:hidden rounded-full bg-brand-gradient px-4 py-2 text-sm text-white">Book</a>
  </div>
</header>`;
