var btn = document.querySelectorAll(".btn");
var cards = document.querySelectorAll(".item")
var changetext = document.querySelector(".change")
var searchBar = document.querySelector("input")

btn.forEach(function (element) {
    element.addEventListener('click', function () {
        var btnClick = element.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
                changetext.textContent = "MembER"
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = "block"
                    changetext.textContent = btnClick.charAt(0).toUpperCase() + btnClick.slice(1);

                } else {
                    card.style.display = "none"
                }
            })
        }
    });
})

// btn[0].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         card.style.display = "block"
//         changetext.textContent = "membERs"
//     })
// });
// btn[1].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         if (card.classList.contains('cat')) {
//             card.style.display = "block"
//             changetext.textContent = "cat"
//         } else {
//             card.style.display = "none"
//         }
//     })
// });
// btn[2].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         if (card.classList.contains('dog')) {
//             card.style.display = "block"
//             changetext.textContent = "dog"
//         } else {
//             card.style.display = "none"
//         }
//     })
// });
// btn[3].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         if (card.classList.contains('hamster')) {
//             card.style.display = "block"
//             changetext.textContent = "hamster"
//         } else {
//             card.style.display = "none"
//         }
//     })
// });
// btn[4].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         if (card.classList.contains('others')) {
//             card.style.display = "block"
//             changetext.textContent = "others"
//         } else {
//             card.style.display = "none"
//         }
//     })
// });
var imageall = document.querySelectorAll(".card-img-top")
imageall.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "100%";
        element.style.height = "70%";
    });
});
imageall.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "100%";
        element.style.height = "55%";
    });
});
searchBar.addEventListener('keyup', function (event) {
    var userInput = event.target.value.toLowerCase().trim()
    cards.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block'
        } else
            card.style.display = 'none'
    })
})
