 document.getElementById("myForm").addEventListener("submit", function (e) {
            e.preventDefault();
         const nama = document.getElementById("nama").value;
        const mapel = document.getElementById("mapel").value;
        const level = document.getElementById("level").value;
          const url = "https://localhost:3000"

            // Send a POST request to the server
            fetch(url, {
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
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
