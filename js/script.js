let tabLink = document.querySelectorAll(".tab-links");
let tabLinkArray = Array.from(tabLink);
let tabContents = document.querySelectorAll(".tab-contents");
let tabContentsArray = Array.from(tabContents);

tabLinkArray.forEach ((ele) => {
    ele.addEventListener ("click", (e) => {
        // Removing The Active Class From All The Tab Links
        tabLinkArray.forEach ( (ele) => {
            ele.classList.remove("active");
        });
        // Adding The Active Class On The Clicked Tab Link
        e.currentTarget.classList.add("active");
        // Adding The Display NONE To All The Tabs Content
        tabContents.forEach ( (tab) => {
            tab.style.display = "none";
        });
        // Removing The Display NONE From The Selected Tab Content
        document.querySelector(e.currentTarget.dataset.showlink).style.display = "block";
    });
});
// -------------------------About Section End-------------------------

// -------------------------Open And Close Menu Start-------------------------
let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-times");
let navLinks = document.querySelector("#header nav ul");

openMenu.onclick = function() {
    navLinks.style.right = "0";
}
closeMenu.onclick = function () {
    navLinks.style.right = "-200px";
}
// -------------------------Open And Close Menu End-------------------------

// -------------------------Scroll To Top Start-------------------------
let scrollBtn = document.getElementById("scroll");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Function to handle image upload
document.getElementById("imageUploadForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const imageInput = document.getElementById("imageInput");
    const imageGallery = document.getElementById("imageGallery");

    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const image = new Image();
            image.src = e.target.result;
            
            const uploadDate = new Date().toLocaleString();
            
            const imageContainer = document.createElement("div");
            imageContainer.className = "uploaded-image";
            
            const imageElement = document.createElement("img");
            imageElement.src = image.src;
            
            const dateElement = document.createElement("p");
            dateElement.textContent = `Uploaded on: ${uploadDate}`;
            
            imageContainer.appendChild(imageElement);
            imageContainer.appendChild(dateElement);
            
            imageGallery.appendChild(imageContainer);
            
            // Clear the file input
            imageInput.value = "";
        };

        reader.readAsDataURL(file);
    }
});
