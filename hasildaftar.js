const hasildaftar = document.getElementById("hasildaftar");

const apiUrl = "https://be-semarang-16-production.up.railway.app/course";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const lastBooking = data[data.length - 1];
    const bookingDetails = `
            <h2>Booking Information</h2>
            <p><span class="booking-label">CourseID</span><span class="booking-value">${lastBooking.course_id}</span></p>
            <p><span class="booking-label">Course Name:</span><span class="booking-value">${lastBooking.course_name}</span></p>
            <p><span class="booking-label">Course Category:</span><span class="booking-value">${lastBooking.course_category}</span></p>
            <p><span class="booking-label">Course level:</span><span class="booking-value">${lastBooking.course_level}</span></p>
        `;
    hasilBooking.innerHTML = bookingDetails;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
