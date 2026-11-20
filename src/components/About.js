const points = [
  'Integrated patient records management',
  'Real-time departmental coordination',
  'Advanced analytics and reporting',
  'HIPAA compliant security standards',
]
const card = (icon, n, l, bg, extra = '') => `
  <div class="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/60 ${extra}">
    <span class="grid place-items-center size-14 rounded-xl ${bg} text-white"><i data-lucide="${icon}" class="size-6"></i></span>
    <p class="mt-4 text-2xl font-display font-bold">${n}</p>
    <p class="text-slate-500">${l}</p>
  </div>`

export const About = () => `
<section id="about" class="bg-gradient-to-br from-indigo-50/60 to-pink-50/50">
  <div class="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
    <div>
      <span class="inline-block rounded-full border border-purple-100 bg-white px-4 py-2 text-sm font-semibold text-brand-purple">About Medicore Vault</span>
      <h2 class="mt-6 font-display font-bold text-4xl sm:text-5xl leading-tight">Centralized Healthcare <span class="text-brand-gradient">Operations Platform</span></h2>
      <p class="mt-6 max-w-lg text-slate-600 leading-relaxed">Medicore Vault is a comprehensive hospital management system designed to streamline every aspect of healthcare delivery. From patient registration to discharge, our platform ensures seamless coordination across all departments.</p>
      <ul class="mt-8 space-y-4">
        ${points.map(p => `<li class="flex items-center gap-3"><i data-lucide="circle-check" class="size-6 text-green-500"></i>${p}</li>`).join('')}
      </ul>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div class="space-y-6">
        ${card('target', '500+', 'Healthcare Facilities', 'bg-gradient-to-br from-blue-500 to-blue-600')}
        ${card('users', '1M+', 'Active Patients', 'bg-gradient-to-br from-fuchsia-500 to-purple-600')}
      </div>
      <div class="space-y-6 pt-12">
        ${card('trending-up', '99.9%', 'System Uptime', 'bg-gradient-to-br from-pink-500 to-rose-500')}
        <div class="rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-6 text-white shadow-lg">
          <p class="text-3xl font-display font-bold">24/7</p><p>Support Available</p>
        </div>
      </div>
    </div>
  </div>
</section>`
