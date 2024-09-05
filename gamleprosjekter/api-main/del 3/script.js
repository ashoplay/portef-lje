const apiUrl = 'https://graphql.anilist.co';
let currentPage = 1;

async function fetchAnimeAndMangaList(searchTerm = '', page = 1) {
    const query = `
        query ($search: String, $page: Int) {
            anime: Page (page: $page, perPage: 10) {
                media (type: ANIME, search: $search) {
                    id
                    title {
                        romaji
                    }
                    description
                    siteUrl
                }
            }
            manga: Page (page: $page, perPage: 10) {
                media (type: MANGA, search: $search) {
                    id
                    title {
                        romaji
                    }
                    description
                    siteUrl
                }
            }
        }
    `;

    const variables = { search: searchTerm, page };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    return data.data;
}

async function fetchTopRatedAnimeAndManga() {
    const query = `
        query {
            anime: Page(page: 1, perPage: 5) {
                media(sort: SCORE_DESC, type: ANIME) {
                    id
                    title {
                        romaji
                    }
                    description
                    siteUrl
                }
            }
            manga: Page(page: 1, perPage: 5) {
                media(sort: SCORE_DESC, type: MANGA) {
                    id
                    title {
                        romaji
                    }
                    description
                    siteUrl
                }
            }
        }
    `;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();

    return data.data;
}

async function renderAnimeAndMangaList(searchTerm = '') {
    const { anime, manga } = await fetchAnimeAndMangaList(searchTerm, currentPage);

    clearLists(); // Clear the lists before rendering

    if (anime.media.length > 0) {
        renderMediaList(anime.media, 'anime-list', 'Anime');
    }

    if (manga.media.length > 0) {
        renderMediaList(manga.media, 'manga-list', 'Manga');
    }
}

function clearLists() {
    document.getElementById('anime-list').innerHTML = '';
    document.getElementById('manga-list').innerHTML = '';
}

async function renderTopRatedAnimeAndManga() {
    const { anime, manga } = await fetchTopRatedAnimeAndManga();

    clearLists(); // Clear the lists before rendering

    renderMediaList(anime.media, 'anime-list', 'Anime');
    renderMediaList(manga.media, 'manga-list', 'Manga');

    const topRatedButton = document.getElementById('top-rated-button');
    topRatedButton.textContent = 'Go Back';
}

function renderMediaList(mediaList, containerId, mediaType) {
    const mediaListContainer = document.getElementById(containerId);

    const mediaTypeHeading = document.createElement('h3');
    mediaTypeHeading.textContent = mediaType;
    mediaListContainer.appendChild(mediaTypeHeading);

    mediaList.forEach(media => {
        const mediaItem = document.createElement('div');
        mediaItem.classList.add('media-item');

        const titleElement = document.createElement('div');
        titleElement.classList.add('media-title');
        const titleLink = document.createElement('a');
        titleLink.textContent = media.title.romaji;
        titleLink.href = media.siteUrl;
        titleLink.target = '_blank';
        titleElement.appendChild(titleLink);

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('media-description');
        descriptionElement.textContent = media.description;

        mediaItem.appendChild(titleElement);
        mediaItem.appendChild(descriptionElement);

        mediaListContainer.appendChild(mediaItem);
    });
}

document.getElementById('search-button').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.trim();
    currentPage = 1;
    renderAnimeAndMangaList(searchTerm);
});

document.getElementById('top-rated-button').addEventListener('click', function() {
    const topRatedButton = document.getElementById('top-rated-button');
    if (topRatedButton.textContent === 'Top Rated') {
        renderTopRatedAnimeAndManga();
    } else {
        renderAnimeAndMangaList();
        topRatedButton.textContent = 'Top Rated';
    }
});

renderAnimeAndMangaList();
