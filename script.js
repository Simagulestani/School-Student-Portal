// ================= HOME PAGE ================

let enrollBtn = document.getElementById("enrollBtn");

if (enrollBtn) {

    enrollBtn.addEventListener("click", function () {

    // Get Input Values
    let studentName = document.getElementById("studentName").value;
    let age = document.getElementById("age").value;
    let gradeLevel = document.getElementById("gradeLevel").value;

    // Error and Output Elements
    let errorMessage = document.getElementById("errorMessage");
    let welcomeMessage = document.getElementById("welcomeMessage");
    let studentSummary = document.getElementById("studentSummary");

    // Validation
    if (studentName === "" || age === "" || gradeLevel === "") {

        errorMessage.textContent = "Please fill in all fields.";
        welcomeMessage.textContent = "";
        studentSummary.innerHTML = "";

    } else {

        errorMessage.textContent = "";

        let student = {

            studentName: studentName,
            age: age,
            gradeLevel: gradeLevel
        };

        welcomeMessage.textContent =
            "Welcome " + student.studentName + " To Mirwali Girls High School!";

        studentSummary.innerHTML = `

            <h3>Student Summary</h3>

            <p><strong>Name:</strong> ${student.studentName}</p>

            <p><strong>Age:</strong> ${student.age}</p>

            <p><strong>Grade Level:</strong> ${student.gradeLevel}</p>
        `;
    }

});
}

// ================= PROFILE PAGE =================

// Contact Information Buttons
let showEmailBtn = document.getElementById("showEmailBtn");
let showPhoneBtn = document.getElementById("showPhoneBtn");
let hideContactBtn = document.getElementById("hideContactBtn");

let contactInfo = document.getElementById("contactInfo");

// Show Email
if (showEmailBtn) {

    showEmailBtn.addEventListener("click", function () {

        contactInfo.textContent =
            "Email: amina@student.com";

    });

}
// Show Phone
if (showPhoneBtn) {

    showPhoneBtn.addEventListener("click", function () {

        contactInfo.textContent =
            "Phone: 012-3456789";

    });

}
// Hide Contact Information
if (hideContactBtn) {

    hideContactBtn.addEventListener("click", function () {

        contactInfo.textContent = "";

    });

}
// Update Student Status
let updateStatusBtn =
    document.getElementById("updateStatusBtn");

if (updateStatusBtn) {

    updateStatusBtn.addEventListener("click", function () {

        let statusInput =
            document.getElementById("statusInput").value;

        let studentStatus =
            document.getElementById("studentStatus");

        if (statusInput === "") {

            alert("Please enter a status.");

        } else {

            studentStatus.textContent = statusInput;

        }

    });
}

// ================= COURSES PAGE =================

// Courses Array
let courses = [
    {
        courseName: "Introduction to Python",
        instructor: "Mr. John",
        gradeLevel: "Beginner",
        description: "Learn algebra and geometry.",
        image: "/Users/simagulestani/WEB_AI/School Portal Project/python.png"
    },

    {
        courseName: "Applied Data Science",
        instructor: "Ms. Sarah",
        gradeLevel: "Intemediate",
        description: "Explore physics and chemistry.",
        image: "/Users/simagulestani/WEB_AI/School Portal Project/science.png"
    }

];

// Get Elements
let coursesContainer =
    document.getElementById("coursesContainer");

let courseDetails =
    document.getElementById("courseDetails");

// Render Courses Function
function renderCourses(courseArray = courses) {

    if (!coursesContainer) {
        return;
    }

    coursesContainer.innerHTML = "";

    courseArray.forEach(function (course, index) {

        coursesContainer.innerHTML += `

            <div class="course-card">

                <img src="${course.image}">

                <h3>${course.courseName}</h3>

                <p>${course.gradeLevel}</p>

                <button class="detailsBtn"

                    data-name="${course.courseName}"

                    data-instructor="${course.instructor}"

                    data-grade="${course.gradeLevel}"

                    data-description="${course.description}"

                    data-image="${course.image}">

                    View Course Details

                </button>

            </div>

        `;
    });

    // Select All Detail Buttons
    let detailsButtons =
        document.querySelectorAll(".detailsBtn");

    detailsButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            let name = this.dataset.name;
            let instructor = this.dataset.instructor;
            let grade = this.dataset.grade;
            let description =
                this.dataset.description;

            let image = this.dataset.image;

            courseDetails.style.display = "block";

            courseDetails.innerHTML = `

                <h2>${name}</h2>

                <img src="${image}" width="250">

                <p><strong>Instructor:</strong>
                ${instructor}</p>

                <p><strong>Grade:</strong>
                ${grade}</p>

                <p><strong>Description:</strong>
                ${description}</p>

            `;

        });

    });

}

// Initial Render
renderCourses();

// ================= ADD NEW COURSE =================

let addCourseBtn =
    document.getElementById("addCourseBtn");

if (addCourseBtn) {

    addCourseBtn.addEventListener("click", function () {
// input 
        let courseName =
            document.getElementById("courseName").value;

        let instructor =
            document.getElementById("instructor").value;

        let gradeLevel =
            document.getElementById("gradeLevel").value;

        let description =
            document.getElementById("description").value;

        let image =
            document.getElementById("image").value;

        let courseError =
            document.getElementById("courseError");

        // Validation
        if (
            courseName === "" ||
            instructor === "" ||
            gradeLevel === "" ||
            description === "" ||
            image === ""
        ) {

            courseError.textContent =
                "Please fill in all fields.";

        } else {

            courseError.textContent = "";

            // New Course Object
            let newCourse = {

                courseName: courseName,
                instructor: instructor,
                gradeLevel: gradeLevel,
                description: description,
                image: image

            };
            courses.push(newCourse);

            renderCourses();

            // Reset Form
            document.getElementById("courseName").value = "";
            document.getElementById("instructor").value = "";
            document.getElementById("gradeLevel").value = "";
            document.getElementById("description").value = "";
            document.getElementById("image").value = "";

        }
    });
}
// ==== SEARCH COURSES ====

let searchCourse =
    document.getElementById("searchCourse");

if (searchCourse) {

    searchCourse.addEventListener("keyup", function () {

        let searchValue =
            this.value.toLowerCase();

        let filteredCourses =
            courses.filter(function (course) {

                return course.courseName
                    .toLowerCase()
                    .includes(searchValue);

            });

        renderCourses(filteredCourses);

    });

}

// ========= FILTER BUTTONS ===========

let filterButtons =
    document.querySelectorAll(".filterBtn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let selectedGrade =
            this.dataset.grade;

        if (selectedGrade === "All") {

            renderCourses(courses);

        } else {

            let filteredCourses =
                courses.filter(function (course) {

                    return course.gradeLevel ===
                        selectedGrade;

                });

            renderCourses(filteredCourses);

        }

    });

});
// ================= CONTACT PAGE =================

let sendMessageBtn =
    document.getElementById("sendMessageBtn");

if (sendMessageBtn) {

    sendMessageBtn.addEventListener("click", function () {

   // Get Input Values
        let contactName =
            document.getElementById("contactName").value;

        let contactEmail =
            document.getElementById("contactEmail").value;

        let contactMessage =
            document.getElementById("contactMessage").value;

        let contactResult =
            document.getElementById("contactResult");
    // condition for validation
        if (
            contactName === "" ||
            contactEmail === "" ||
            contactMessage === ""
        ) {

            alert("Please fill in all fields.");

            contactResult.textContent = "";

        } else {
            contactResult.textContent =
                "Message sent successfully!";

            resetContactForm();

        }

    });

}
function resetContactForm() {

    document.getElementById("contactName").value = "";

    document.getElementById("contactEmail").value = "";

    document.getElementById("contactMessage").value = "";

}
// changing the theme

let themeToggle =
    document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}
