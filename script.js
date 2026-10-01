// Film Verileri, Fragmanlar ve Gerçek İzleme Linkleri
const MOVIES_DATA = [
   {
        id: 1,
        title: "Inception (Başlangıç)",
        category: "Bilim Kurgu, Aksiyon",
        rating: "8.8",
        poster: "https://img.fullhdfilmizlesene.now/poster/izle/baslangic-izle-1-89750.webp",
        iframeUrl: "https://s28.cdnimg1399.shop/mm/FJ5wMKO0nJ9hYwVjZGNhExuRYxWfqIWurF54ZwL0YxEIDHjhEzyfoJWioNd0zxL2EhnJ1aZGZ5BF5mnT9js0xi28vr1b480",
        description: "Hırsız Dom Cobb, insanların rüyalarından sırları çalan bir uzmandır. Bu kez görevi bir fikri çalmak değil, yerleştirmektir."
    },
    {
        id: 2,
        title: "Interstellar (Yıldızlararası)",
        category: "Bilim Kurgu, Dram",
        rating: "8.7",
        poster: "https://img.fullhdfilmizlesene.now/poster/izle/yildizlararasi-2-91588.webp",
        iframeUrl: "https://s27.imgscdn2677.shop/m8/FJ50MKWmqTIfoTSlYwVjZGDhIHuRYxWfqKWurF5WGHSLYwRjBQOjYxEIDHjhrQV2AP1VER0d0zxnJ1ap2AxowV2Amphp2uipNs0xi27vr1b360",
        description: "Bir grup astronot, insanlığın hayatta kalmasını sağlamak için solucan deliğinden geçerek yeni bir gezegen arayışına çıkar."
    },
    {
        id: 3,
        title: "The Dark Knight (Kara Şövalye)",
        category: "Aksiyon, Suç",
        rating: "9.0",
        poster: "https://img.fullhdfilmizlesene.now/poster/izle/batman-2-kara-sovalye-izle-3-59964.webp",
        iframeUrl: "https://s2.cdnimages6326.shop/mh/ITuyYxEupzfhF25cM2u0YwVjZQthZGN4ZUNhMUIuoNd0zxL2EhnJ1uM2ImAwZlAv5mnT9js0xi2vr1b360 "
,
        description: "Batman, Gotham şehrini kaosa sürüklemeye çalışan gizemli ve sadist suçlu Joker ile karşı karşıya gelir."
    },
    {
        id: 4,
        title: "The Hangover (Felekten Bir Gece)",
        category: "Komedi",
        rating: "7.7",
        poster: "https://img.fullhdfilmizlesene.now/poster/izle/felekten-bir-gece-full-hd-turkce-dublaj-izle870.webp",
        iframeUrl: "https://s8.cdnimg5544.shop/mf/EzIfMJg0MJ4hDzylYxqyL2HhZF5HnTHhFTShM292MKVhZF4lZQN5YwRjBQOjYxE1LJjd0zxL2EhnJ1aAGH0AP5mnT9js0xi8vr1b360",
        description: "Bekarlığa veda partisi için Las Vegas'a giden dört arkadaş, ertesi sabah damat kayıp olarak ve hiçbir şey hatırlamayarak uyanır."
    },
        {
        id: 5,
        title: "kaşmir baskını türkçe dublaj izle",
        category: "Aksiyon",
        rating: "6.6",
        poster: "https://turkcealtyazi.org/film/200/0248185.jpg",
        iframeUrl: "https://dn711303.ca.archive.org/0/items/mission-kashmir-2000-dv-drip-charme-leon-silver-rg/Mission%20Kashmir%202000%20DvDRip%20CharmeLeon%20Silver%20RG.mp4",
        description: "Yıllardır kanayan bir yara olan Kashmir bölgesinde Müslüman polis teşkilatında çalışan Sanjay, peşine düştüğü azılı bir teröristle savaşırken kazara, gene Müslüman olan bir ailenin, Altaaf adlı bir bebek hariç, tümünün ölmesine neden olur.Kısa bir süre önce kendi bebeğini de kaybetmiş olan Sanjay, karısının ısrarları üzerine bu bebeği evlatlık edinir. Ailesini öldüren maskeli kişiyi kabuslarında gören Altaaf, o maskeli kişinin kendisini evlatlık edinen Sanjay olduğunu öğrenince, intikam yemini ederek oradan kaçar.Yıllar sonra tam bir savaş makinesi haline gelmiş acımasız bir savaşçı olarak geri dönen Altaaf, nasıl bir intikam alacağını planlamaya başlar.."
    },
    {
    id: 6,
    title: "The Dark Knight (Kara Şövalye)",
    category: "Aksiyon, Suç",
    rating: "9.0",
    poster: "https://unsplash.com",
    iframeUrl: "",
    // Sitenin içinde görünecek kısa özet:
    description: "Batman, Gotham şehrini kaosa sürüklemeye çalışan gizemli ve sadist suçlu Joker ile karşı karşıya gelir.",
    // Google ve arama motorları için optimize edilmiş 150-160 karakterlik yeni alan:
    seoDescription: "The Dark Knight (Kara Şövalye) filmini kesintisiz, Türkçe dublaj ve altyazı seçenekleriyle full HD 1080p kalitesinde izlemek için hemen tıklayın!"
},
    {
    id: 7,
    title: "zübük vhs izle",
    category: "Komedi",
    rating: "8.5",
    poster: " https://filmmakinesi.to/uploads/postlar/afis/zubuk-1980.jpg-thumb-liste.webp ",
    iframeUrl: " https://dn790001.ca.archive.org/0/items/zubuk_1980/Z%C3%BCb%C3%BCk.mp4 ",
    description: " Zübük, Aziz Nesin’in aynı adlı romanından uyarlanan ve kurnaz, çıkarcı bir politikacının yükselişini anlatan klasik bir taşlamadır. ",    
    seoDescription: "zübük vhs izle "
    },
     {
    id: 8,
    title: "Örümcek-Adam: Yepyeni Bir Gün Spider-Man: Brand New Day",
    category: "Bilim Kurgu",
    rating: "8.0",
    poster: " https://img.fullhdfilmizlesene.now/poster/izle/orumcek-adam-yepyeni-bir-gun-spider-man-brand-new-day-33975.webp ",
    iframeUrl: " https://s33.imgscdn6902.shop/mn/H3OcMTIlYH1uov5PpzShMP5BMKphETS5YwVjZwLhIwZhZGN4ZUNhIRIZEIAMGxZhrQV2AP1Rd0zxnJ1ap2AxowL5ZQVhp2uipPkwMT5coJSaMGD0BQphp2uipPkwMT5coJSaMKZ4Amp2YaAbo3NfnJ1aL2EhZGH4Zl5mnT9jYTAxozygMmZkBQRhp2uipNs0xi33vr1b360 ",
    description: " Peter Parker, artık kimsenin kendisini hatırlamadığı bir dünyada yaşamaktadır. Eski arkadaşları hayatlarına onsuz devam ederken o da bütün zamanını Örümcek Adam olarak geçirir. Bir yandan bu sorumluluğu üstlenmek, diğer yandan bir zamanlar parçası olduğu hayatların dışında kalmak Peter’ın üzerindeki baskıyı artırır. Bu baskı, onda kendi kontrolünün dışında gelişen bir değişimi tetikler. Aynı sırada, hem şehri hem de sevdiği insanları tehdit eden yeni bir düşman ortaya çıkar. Peter’ın, güçlü olmasının yanı sıra kimse tarafından görülemeyen bu düşmanı durdurması gerekir. Kendi iradesiyle kontrol edemediği bu değişim ise görünmeyen düşmanın yarattığı tehdide karşı koyabilmek için elindeki tek imkân olabilir. ",    
    seoDescription: "Örümcek-Adam: Yepyeni Bir Gün Spider-Man: Brand New Day izle "
    }
 ];



    





const movieGrid = document.getElementById('movie-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const listTitle = document.getElementById('list-title');
const modal = document.getElementById('movie-modal');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// İlk yükleme
displayMovies(MOVIES_DATA);

function displayMovies(movies) {
    movieGrid.innerHTML = "";
    if(movies.length === 0) {
        movieGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted);">Aradığınız kriterde film bulunamadı.</p>`;
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year} | ${movie.genre}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openMovieDetail(movie));
        movieGrid.appendChild(card);
    });
}

// Detay Penceresi ve "Filmi İzle" Butonu Entegrasyonu
function openMovieDetail(movie) {
    modalBody.innerHTML = `
        <div class="video-container">
            <iframe id="trailer-video" src="${movie.trailer}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="modal-desc">
            <h2>${movie.title}</h2>
            <div style="margin-bottom: 15px;">
                <span class="badge">${movie.genre}</span>
                <span style="margin-left:15px; color:#ffb400; font-weight:bold;"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                <span style="margin-left:15px; color:var(--text-muted);">${movie.year}</span>
            </div>
            <p>${movie.desc}</p>
            
            <!-- YENİ EKLENEN FİLMİ İZLE BUTONU -->
            <a href="${movie.watch_url}" target="_blank" class="btn btn-primary" style="margin-top: 20px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
                <i class="fa-solid fa-circle-play"></i> Filmi Full İzle
            </a>
        </div>
    `;
    modal.style.display = "flex";
}

function openHeroTrailer() {
    openMovieDetail(MOVIES_DATA[0]);
}

function filterGenre(genreName) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));
    if(event) event.target.classList.add('active');

    if(genreName === 'Tümü') {
        listTitle.innerText = "Tüm Filmler";
        displayMovies(MOVIES_DATA);
    } else {
        listTitle.innerText = `${genreName} Türündeki Filmler`;
        const filtered = MOVIES_DATA.filter(m => m.genre === genreName);
        displayMovies(filtered);
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query !== "") {
        listTitle.innerText = `"${query}" İçin Arama Sonuçları`;
        const filtered = MOVIES_DATA.filter(m => 
            m.title.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query)
        );
        displayMovies(filtered);
    } else {
        listTitle.innerText = "Tüm Filmler";
        displayMovies(MOVIES_DATA);
    }
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') handleSearch(); });

function stopAndCloseModal() {
    const iframe = document.getElementById('trailer-video');
    if (iframe) {
        iframe.setAttribute('src', '');
    }
    modal.style.display = "none";
}

closeModal.addEventListener('click', stopAndCloseModal);
window.addEventListener('click', (e) => { if(e.target === modal) stopAndCloseModal(); });
