const field = (id, label, type, ph) => `
  <label for="${id}" class="block text-sm font-medium">${label}</label>
  <input id="${id}" name="${id}" type="${type}" placeholder="${ph}" ${id !== "message" ? "required" : ""}
    class="mt-2 mb-6 w-full rounded-md bg-neutral-100 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-2 focus:outline-sky-400" />`;

export const Booking = () => `
<section id="booking" class="bg-navy text-white">
  <div class="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div class="text-center ">
      <h2 class="font-bold text-5xl sm:text-6xl leading-tight">Book an Appointment</h2>
      <p class="mt-6">Fill in your details to schedule a visit</p>
    </div>
    <form id="bookingForm" novalidate>
      ${field("name", "Full Name", "text", "Enter your name")}
      ${field("phone", "Phone Number", "tel", "Enter your phone number")}
      ${field("date", "Preferred Date", "date", "Select a date")}
      ${field("message", "Message", "text", "Any additional information")}
      <button type="submit" class="w-full rounded-md bg-sky-500 py-3 font-medium hover:bg-sky-400 transition-colors">Submit</button>
      <p id="bookingStatus" class="mt-4 text-sm" role="status"></p>
    </form>
  </div>
</section>`;

export function initBookingForm() {
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("bookingStatus");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    console.log("Appointment request:", data);
    status.textContent = `Thanks ${data.name}, we received your request for ${data.date}.`;
    form.reset();
  });
}
