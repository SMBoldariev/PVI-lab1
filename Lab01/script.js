document.addEventListener("DOMContentLoaded", function () {
    const notificationBell = document.getElementById("notificationBell");
    const notificationDropdown = document.getElementById("notificationDropdown");
    const profile = document.querySelector(".profile");
    const profileDropdown = document.getElementById("profileDropdown");
    const addStudentButton = document.getElementById("addStudent");
    const selectAllCheckbox = document.getElementById("selectAll");
    const studentTableBody = document.getElementById("studentTableBody");

    // Click on the bell
    notificationBell.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents closing the menu when clicking on the bell itself
        console.log('Notification bell clicked');
        if (notificationDropdown.classList.contains('hidden')) {
            notificationDropdown.classList.remove('hidden');
            notificationDropdown.style.display = 'block'; // Force the menu to open
            notificationDropdown.style.height = 'auto'; // Automatic size for the menu

            // Add dynamic content if it's missing
            if (notificationDropdown.children.length === 0) {
                notificationDropdown.innerHTML = `
                    <p>Admin: New message</p>
                    <p>John K.: Task update</p>
                    <p>Ann S.: Submitted form</p>
                `;
            }
        } else {
            notificationDropdown.classList.add('hidden');
            notificationDropdown.style.display = 'none'; // Hide the menu
            notificationDropdown.style.height = '0'; // Set height to 0
        }
    });

    // Click on the profile
    profile.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents closing the menu when clicking on the profile itself
        console.log('Profile clicked');
        if (profileDropdown.classList.contains('hidden')) {
            profileDropdown.classList.remove('hidden');
            profileDropdown.style.display = 'block'; // Force the menu to open
            profileDropdown.style.height = 'auto'; // Automatic size for the menu

            // Add dynamic content if it's missing
            if (profileDropdown.children.length === 0) {
                profileDropdown.innerHTML = `
                    <p>Profile</p>
                    <p>Log Out</p>
                `;
            }
        } else {
            profileDropdown.classList.add('hidden');
            profileDropdown.style.display = 'none'; // Hide the menu
            profileDropdown.style.height = '0'; // Set height to 0
        }
    });

    document.addEventListener("click", (e) => {
        if (!notificationBell.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.add("hidden");
        }
        if (!profile.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.add("hidden");
        }
    });

    // Select/Deselect all checkboxes
    selectAllCheckbox.addEventListener("change", function () {
        document.querySelectorAll("tbody input[type='checkbox']").forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    // Add new student
    addStudentButton.addEventListener("click", function () {
        const name = prompt("Enter student name:");
        if (!name) return;
        const group = prompt("Enter group:");
        if (!group) return;
        const gender = prompt("Enter gender (M/F):");
        if (!gender) return;
        const birthday = prompt("Enter birthday (DD.MM.YYYY):");
        if (!birthday) return;
        
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${group}</td>
            <td>${name}</td>
            <td>${gender}</td>
            <td>${birthday}</td>
            <td><span class="status offline"></span></td>
            <td>
                <button class="edit">✏️</button>
                <button class="delete">🗑️</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });

    // Delete student
    studentTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            if (confirm("Are you sure you want to delete this student?")) {
                e.target.closest("tr").remove();
            }
        }
    });
});
