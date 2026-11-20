const stat = (n, l, c) => `<div><p class="text-3xl font-display font-bold ${c}">${n}</p><p class="text-sm text-slate-500">${l}</p></div>`
const mini = (label, value, note, color) => `
  <div class="rounded-xl border border-slate-100 bg-white p-4">
    <p class="text-sm text-slate-500">${label}</p>
    <p class="text-2xl font-display font-bold">${value}</p>
    <p class="text-xs ${color}">${note}</p>
  </div>`
const tile = (n, l, c) => `<div class="rounded-xl ${c} p-3 text-center"><p class="font-display font-bold">${n}</p><p class="text-xs text-slate-500">${l}</p></div>`

export const Hero = () => `
<section class="relative overflow-hidden bg-gradient-to-br from-blue-50/60 via-white to-pink-50/60">
  <div class="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
    <div>
      <span class="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 text-sm shadow-sm">
        <i data-lucide="zap" class="size-4 text-brand-purple"></i> Trusted by 500+ Hospitals Worldwide
      </span>
      <h1 class="mt-6 font-display font-bold text-5xl sm:text-6xl leading-[1.1]">
        <span class="text-brand-gradient">Smart Hospital</span> Management System
      </h1>
      <p class="mt-6 max-w-xl text-lg text-slate-600">Transform your healthcare operations with our comprehensive, cloud-based platform. Streamline workflows, enhance patient care, and boost efficiency across all departments.</p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="#booking" class="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 font-medium text-white shadow-lg shadow-purple-500/25">Book a Demo <i data-lucide="arrow-right" class="size-4"></i></a>
        <a href="#about" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-medium"><i data-lucide="play" class="size-4 text-brand-blue"></i> Watch Video</a>
      </div>
      <div class="mt-12 flex gap-12">
        ${stat('500+', 'Hospitals', 'text-brand-blue')}${stat('1M+', 'Patients', 'text-brand-purple')}${stat('99.9%', 'Uptime', 'text-brand-pink')}
      </div>
    </div>

    <div class="rounded-3xl bg-white/70 p-6 shadow-2xl shadow-purple-200/40 border border-white">
      <div class="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-5 text-white flex items-center justify-between">
        <div><p class="text-sm">Total Patients Today</p><p class="text-3xl font-display font-bold">1,247</p></div>
        <i data-lucide="activity" class="size-10"></i>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        ${mini('Appointments', '342', '↑ 12% today', 'text-green-600')}
        ${mini('Operations', '28', '5 scheduled', 'text-brand-blue')}
      </div>
      <div class="mt-4 rounded-xl border border-purple-100 bg-purple-50/40 p-4">
        <p class="flex items-center gap-2 text-sm"><i data-lucide="shield" class="size-4 text-brand-purple"></i> Security Status</p>
        <div class="mt-3 flex items-center gap-3">
          <div class="h-2 flex-1 rounded-full bg-slate-200"><div class="h-2 w-[95%] rounded-full bg-green-500"></div></div>
          <span class="text-xs text-green-600">95%</span>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-3">
        ${tile('89', 'Doctors', 'bg-blue-50 text-brand-blue')}${tile('156', 'Nurses', 'bg-purple-50 text-brand-purple')}${tile('24/7', 'Support', 'bg-pink-50 text-brand-pink')}
      </div>
    </div>
  </div>
</section>`
