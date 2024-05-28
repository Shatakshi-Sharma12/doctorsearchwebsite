function scrollToDoctorSearchArea() {
  // Corrected function name here
  const doctorSearchArea = document.querySelector(".doctor-search-area"); // Corrected query selector
  doctorSearchArea.scrollIntoView({ behavior: "smooth" });
}

function searchDoctors() {
  const specialty = document.getElementById("specialty").value;
  const location = document.getElementById("location").value;
  const doctorList = document.getElementById("doctor-list");
  doctorList.innerHTML = ""; // Clear previous results

  // Sample data (replace with actual data source)
  const doctors = [
    {
      name: "Dr. Rohit Agrawal",
      specialty: "Neurologist",
      location: "Mumbai",
      image: "r.jpg",
    },
    {
      name: "Dr. Sandeep Sharma",
      specialty: "Neurologist",
      location: "Mumbai",
      image: "s.jpg",
    },
    {
      name: "Dr. Yashika Goyal",
      specialty: "Neurologist",
      location: "Mumbai",
      image: "y.jpg",
    },
    {
      name: "Dr. Mahesh Mehta",
      specialty: "Neurologist",
      location: "Mumbai",
      image: "m.jpg",
    },
    {
      name: "Dr. S",
      specialty: "cardio",
      location: "mathura",
      image: "s.jpg",
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      location: "Los Angeles",
      image: "doctor2.jpg",
    },
    {
      name: "Dr. Sarah Brown",
      specialty: "Neurologist",
      location: "Chicago",
      image: "doctor3.jpg",
    },
    {
      name: "Dr. Mike Wilson",
      specialty: "Pediatrician",
      location: "Miami",
      image: "doctor4.jpg",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase()) &&
      doctor.location.toLowerCase().includes(location.toLowerCase())
  );

  if (filteredDoctors.length > 0) {
    filteredDoctors.forEach((doctor) => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("doctor-card");
      doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p><strong>Specialty:</strong> ${doctor.specialty}</p>
                <p><strong>Location:</strong> ${doctor.location}</p>
            `;
      doctorList.appendChild(doctorCard);
    });
  } else {
    doctorList.innerHTML = "<p>No doctors found.</p>";
  }

  // Scroll to the doctor search area after displaying the results
  const doctorSearchArea = document.querySelector(".doctor-search-area");
  const scrollOffset = 300; // Increase the scroll offset
  window.scrollTo({
    top: doctorSearchArea.offsetTop - scrollOffset,
    behavior: "smooth",
  });
}
