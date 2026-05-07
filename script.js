var odList = [
    "Outworld Devourer",
    "Obsidian Destroyer",
    "Outworld Destroyer",
    "Outworld Demolisher",
    "Outhouse Destroyer",
    "Outhouse Defecator",
    "Overdose",
    "Orb Dispenser",
    "Oppenheimer Deluxe",
    "Ohio Destroyer",
    "Orangutan Dismantler",
    "Organ Donor",
    "Organ Distributer",
    "Outdated Dumbledore",
    "Outside Decorator",
    "Ousmane Dembele",
    "Obnoxious Dinkleberg",
    "Overused Dankmeme",
    "Outsource Developer",
    "Overestimated Drummer",
    "Obsolete Designator",
    "Omnidirectional Diarrhea",
    "Overloaded Dishwasher",
    "Overflowing Diaper",
    "Outside Drifter",
    "Outstanding Demonstrator",
    "Outdoors Dining",
];

const images = [
    "assets/od1.png",
    "assets/od2.jpg",
    "assets/od3.jpg",
    "assets/od4.jpg",
    "assets/od5.jpg",
    "assets/od6.jpg",
    "assets/od7.jpg",
    "assets/od8_by_Alakazam1111.png",
    "assets/od9.jpg",
    "assets/od10.webp",
]

const button = document.getElementById("theButton");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    result.textContent = randomName();
})

function randomName() {
    const index = Math.floor(Math.random() * odList.length);
    return odList[index].toUpperCase();
}

function randomImage() {
    const img = document.getElementById("randomImage");
    const credit = document.getElementById("credit");

    const index = Math.floor(Math.random() * images.length);
    const selected = images[index];

    img.src = selected;

    if (selected.includes("Alakazam1111")) {
        credit.textContent = "Art by u/alakazam1111 from Reddit";
    } else {
        credit.textContent = "";
    }
}

window.addEventListener("load", randomImage);