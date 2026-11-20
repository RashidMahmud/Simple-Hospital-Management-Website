import Chart from 'chart.js/auto'

const metrics = [
  ['Patients Served', '5000', '+10%'],
  ['Surgical Success Rate', '98%', 'N/A'],
  ['Patient Satisfaction', '95%', '+5%'],
]

export const Performance = () => `
<section id="performance" class="border-t border-slate-100">
  <div class="mx-auto max-w-5xl px-6 py-20 text-center">
    <h2 class="font-display text-4xl font-bold">Hospital Performance</h2>
    <p class="mt-3">Key metrics showcasing our efficiency</p>
    <a href="#" class="mt-6 inline-block rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 px-6 py-3 text-sm font-medium text-white">View Detailed Report</a>

    <div class="mt-12 grid gap-6 sm:grid-cols-3 text-left">
      ${metrics.map(([l, v, c]) => `
        <div class="rounded-lg border border-slate-200 p-5">
          <p class="text-sm text-slate-500">${l}</p>
          <p class="mt-1 text-3xl">${v}</p>
          <p class="text-sm">${c}</p>
        </div>`).join('')}
    </div>

    <div class="mt-10 rounded-lg border border-slate-200 p-5">
      <canvas id="patientsChart" height="110" aria-label="Patients served per month"></canvas>
    </div>
  </div>
</section>`

export function initPerformanceChart() {
  const el = document.getElementById('patientsChart')
  if (!el) return
  new Chart(el, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Patients served',
        data: [3600, 3800, 4000, 4150, 4400, 4600, 4800, 5000],
        borderColor: '#002855',
        backgroundColor: 'rgba(0,40,85,0.08)',
        fill: true,
        tension: 0.35,
      }],
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false } } },
  })
}
