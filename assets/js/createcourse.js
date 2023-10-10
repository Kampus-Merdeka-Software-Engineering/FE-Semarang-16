 document.getElementById("myForm").addEventListener("submit", function (e) {
            e.preventDefault();
         const nama = document.getElementById("nama").value;
         const mapel = document.getElementById("mapel").value;
         const level = document.getElementById("level").value;
         const course_url = "https://be-semarang-16-production.up.railway.app/course";

            // Send a POST request to the server
            fetch(course_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                 course_name : nama,
                 course_category : mapel,
                 course_level : level,
            }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the response from the server here
                    console.log(data);
                    alert("Daftar Course Sukses");
                    window.location.href = 'https://fe-semarang-16-production.up.railway.app/index.html'
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
