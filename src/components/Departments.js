// Drop your own photos into /public/images and set `img` (e.g. '/images/cardiology.jpg')
const departments = [
  { name: 'Cardiology', sub: 'Heart Care Specialists', text: 'We offer advanced cardiac care solutions to keep your heart healthy.', tag: 'Specialty Care', doctor: 'Dr. Smith', icon: 'heart-pulse', img: '' },
  { name: 'Orthopedics', sub: 'Bone and Joint Experts', text: 'Our orthopedic team delivers personalized treatment for orthopedic conditions.', tag: 'Surgical Services', doctor: 'Dr. Johnson', icon: 'bone', img: '' },
  { name: 'Neurology', sub: 'Brain and Nervous System Care', text: 'Expert neurologists providing cutting-edge treatments for neurological disorders.', tag: 'Diagnostic Services', doctor: 'Dr. Williams', icon: 'brain', img: '' },
]

const card = d => `
<article class="flex gap-5 rounded-lg border border-slate-200 bg-white p-4 shadow-sm w-full md:w-[calc(50%-0.75rem)]">
  ${d.img
    ? `<img src="${d.img}" alt="${d.name}" class="size-28 rounded object-cover shrink-0" />`
    : `<div class="grid place-items-center size-28 shrink-0 rounded bg-navy text-white"><i data-lucide="${d.icon}" class="size-10"></i></div>`}
  <div>
    <h3 class="text-xl font-medium">${d.name}</h3>
    <p class="text-sm text-slate-500">${d.sub}</p>
    <p class="mt-2">${d.text}</p>
    <span class="mt-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-xs">${d.tag}</span>
    <p class="mt-2 flex items-center gap-2 text-sm font-medium"><i data-lucide="circle-user" class="size-5 text-slate-400"></i>${d.doctor}</p>
  </div>
</article>`

export const Departments = () => `
<section id="departments" class="mx-auto max-w-6xl px-6 py-20">
  <h2 class="text-center font-display text-4xl font-bold">Our Departments</h2>
  <p class="mt-2 text-center text-slate-500">Specialist teams for every kind of care</p>
  <div class="mt-12 flex flex-wrap justify-center gap-6">${departments.map(card).join('')}</div>
  <p class="mt-8 text-center"><a href="#" class="text-sky-500 underline underline-offset-4 text-lg">View more</a></p>
</section>`
