// 1. Elementləri seçirik
const area = document.getElementById('area');
const sektorMenyusu = document.getElementById('sektor-menyusu');
const xaritaSahasi = document.getElementById('xarita-sahasi');
const sektorAdiYazisi = document.getElementById('sektor-adi');
const geriBtn = document.getElementById('geri-btn');
const totalElement = document.getElementById('total-price');

// 2. Hesablama dəyişənləri
let total = 0;
let cariSektorQiymeti = 0;

// Qiymət cədvəli
const qiymetler = {
    'Sektor A': 10,
    'Sektor B': 15,
    'VIP Sektor': 50
};

// 3. ƏSAS FUNKSİYA: Sektoru işə salan hissə
function sektoruBaslat(yerSayi, ad) {
    // Sektor dəyişəndə hər şeyi sıfırlayırıq
    total = 0;
    totalElement.innerText = total;
    cariSektorQiymeti = qiymetler[ad]; 
    
    // Vizual keçid
    sektorMenyusu.style.display = "none";
    xaritaSahasi.style.display = "block";
    sektorAdiYazisi.innerText = ad;
    area.innerHTML = ""; // Köhnə oturacaqları silirik

    for (let i = 1; i <= yerSayi; i++) {
        const seat = document.createElement('div');
        seat.classList.add("seat");
        seat.innerText = i;

        // Təsadüfi doluluq
        if (Math.random() > 0.7) {
            seat.classList.add("occuped");
        }

        // Oturacağa klikləmə hadisəsi
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occuped')) {
                seat.classList.toggle('selected');
                
                if (seat.classList.contains('selected')) {
                    total += cariSektorQiymeti;
                } else {
                    total -= cariSektorQiymeti;
                }
                
                totalElement.innerText = total; 
            }
        });

        area.appendChild(seat);
    }
}

// 4. "Geri" düyməsi üçün hadisə
geriBtn.addEventListener('click', () => {
    xaritaSahasi.style.display = "none";
    sektorMenyusu.style.display = "block";
    // Menyunu açanda hesabı yenidən sıfırlamaq yaxşı olar
    total = 0;
    totalElement.innerText = total;
});