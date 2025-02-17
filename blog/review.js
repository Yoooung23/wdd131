const articles = [
    {
        id: 1,
        title: "Fablehaven",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/91/Fablehaven_book_cover.jpg",
        imgAlt: "Book cover for Fablehaven Book One",
        ages: "6-12",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "The Lightning Thief",
        date: "June 28, 2005",
        description: "12-year-old Percy Jackson discovers he is the son of Poseidon in the opener to the hilarious, fast-paced adventure fantasy series for young readers; Percy Jackson and the Olympians.",
        imgSrc: "https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg",
        imgAlt: "Book cover The Lightning Thief",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 4,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 5,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
];

// Get form elements
const ageFilter = document.getElementById('age-range');
const genreFilter = document.getElementById('genre');
const ratingFilter = document.getElementById('rating');
const filterForm = document.querySelector('form');
const nav = document.querySelector('nav');

// Track form position
function updateFormPosition() {
    const navBottom = nav.getBoundingClientRect().bottom;
    if (navBottom > 0) {
        filterForm.classList.remove('fixed-top');
        filterForm.classList.add('sticky-nav');
    } else {
        filterForm.classList.remove('sticky-nav');
        filterForm.classList.add('fixed-top');
    }
}

window.addEventListener('scroll', updateFormPosition);
updateFormPosition(); // Initial check

const bookList = document.querySelector('.cards');

// Function to clear book list
function clearBooks() {
    bookList.innerHTML = '';
}

// Function to render books
function renderBooks(filteredArticles) {
    clearBooks();
    filteredArticles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description}</p>
            </div>
            <div class="data">
                <p>${article.date}</p>
                <p>${article.ages}</p>
                <p>${article.genre}</p>
                <p>${article.stars}</p>
            </div>
        `;

        bookList.appendChild(card);
    });
}

// Filtering logic
function filterBooks() {
    const ageValue = ageFilter.value;
    const genreValue = genreFilter.value;
    const ratingValue = ratingFilter.value;

    const filtered = articles.filter(article => {
        // Age filter
        const ageMatch = !ageValue || 
            (ageValue === 'kids' && article.ages === '6-12') ||
            (ageValue === 'teens' && article.ages === '12-17') ||
            (ageValue === 'adults' && article.ages === '18+');

        // Genre filter
        const genreMatch = !genreValue || 
            article.genre.toLowerCase() === genreValue.toLowerCase();

        // Rating filter
        const ratingMatch = !ratingValue || 
            article.stars.length >= parseInt(ratingValue);

        return ageMatch && genreMatch && ratingMatch;
    });

    renderBooks(filtered);
}

// Initial render
renderBooks(articles);

// Event listeners
filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterBooks();
});

ageFilter.addEventListener('change', filterBooks);
genreFilter.addEventListener('change', filterBooks);
ratingFilter.addEventListener('change', filterBooks);
