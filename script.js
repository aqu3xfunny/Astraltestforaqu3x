// Background Image Randomizer
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-scaled.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGpyTSzKZU9hS-ptH3WJZQ0TMGDqczO0-5A&s"
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});

// Copy to clipboard function for Servers page
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied: " + text);
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}

// Password-protected new update post
function checkPassword() {
    const password = prompt("Enter password:");
    if (password === "thisissigmachat") {
        const newText = prompt("Enter your update:");
        if (newText) {
            const updatesDiv = document.getElementById("updates");
            const newUpdate = document.createElement("div");
            newUpdate.classList.add("update-box");
            newUpdate.innerHTML = `<h3>Update from The TALW</h3><p>${newText}</p>`;
            updatesDiv.appendChild(newUpdate);
        }
    } else {
        alert("Incorrect password!");
    }
}

//Function to load random selenite links
function openRandomSite() {
            // List of random websites
            const sites = [
                "https://about-psi.vercel.app",
                "https://unblooker-kappa.vercel.app",
                "https://english-delta-jet.vercel.app"
            ];

            // Select a random site
            const randomSite = sites[Math.floor(Math.random() * sites.length)];

            // Open the site in a new tab
            window.open(randomSite, "_blank");
        }

// Function to load updates from Firebase
function loadUpdates() {
    const updatesRef = db.ref("updates");
    updatesRef.on("value", (snapshot) => {
        const updatesDiv = document.getElementById("updates");
        updatesDiv.innerHTML = ""; // Clear old updates before loading new ones

        snapshot.forEach((childSnapshot) => {
            const updateData = childSnapshot.val();
            const updateBox = document.createElement("div");
            updateBox.classList.add("update-box"); // Apply the curved rectangle class
            updateBox.innerHTML = `<h3>Update from The TALW</h3><p>${updateData.text}</p>`;
            updatesDiv.appendChild(updateBox);
        });
    });
}

