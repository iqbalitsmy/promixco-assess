const feedbacks = [
    {
        mes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        name: "Mitchell Marsh",
        designation: "CEO",
        company: "Bexon Agency",
    },
    {
        mes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        name: "Sakib Marsh",
        designation: "CEO",
        company: "OMS Agency",
    },
    {
        mes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
        name: "Tamim Iqbal",
        designation: "CEO",
        company: "Air Agency",
    },
]
// Feedback section

let current = 0;
const carouselInner = document.querySelector('#carousel-inner');

// print default feedback
function printFeedback() {
    let printCarousel = "";
    feedbacks.map((feedback) => {
        return (
            printCarousel += `<div class="min-w-full">
                <p class="italic text-2xl font-medium mb-4">“${feedback.mes}”</p>
                <div>
                    <p class="text-lg font-semibold text-gray-800">${feedback.name}</p>
                    <p class="text-sm text-[#616161]">${feedback.designation}, ${feedback.company}</p>
                </div>
            </div>`
        )
    })
    carouselInner.innerHTML = printCarousel
}
printFeedback()


document.querySelector('#prevFeedback').disabled = true;

function carousel(index) {
    if (index >= feedbacks.length)
        current = 0;
    else if (index < 0)
        current = feedbacks.length - 1;
    else {
        current = index
    }
    // console.log(current)
    if (current === 0) {
        document.querySelector('#prevFeedback').disabled = true;
    } else if (current === feedbacks.length - 1) {
        document.querySelector('#nextFeedback').disabled = true;
    } else {
        document.querySelector('#prevFeedback').disabled = false;
        document.querySelector('#nextFeedback').disabled = false;
    }

    carouselInner.style.transform = `translateX(${-current * 100}%)`;
}

function prevFeedback() {
    carousel(current - 1);
}
function nextFeedback() {
    carousel(current + 1);
}

// navigation drawer
document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('drawer').classList.toggle('hidden-drawer');
    document.getElementById('drawer').classList.toggle('visible-drawer');
});

document.getElementById('closeDrawer').addEventListener('click', function () {
    document.getElementById('drawer').classList.toggle('hidden-drawer');
    document.getElementById('drawer').classList.toggle('visible-drawer');
});