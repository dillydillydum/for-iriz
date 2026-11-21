const messages = [
  "Hi Iriz! 👀",
  "Sebelum km wondering kenapa aku bikin beginian, harusnya kamu udah tau ini apa 🤪 Ini bukan link judol atau pinjol, dan bukan iseng juga 🥹",
  "Aku cuma mau menyampaikan sesuatu. Tapi karena aku orangnya suka banyak basa-basi, kayaknya bakal lebih seru klo aku bikin begini. Ehehe 🤪",
  "Like I told you multiple times. You’re probably my favorite plot twist this year.",
  "Lucu gak sih klo dipikir-pikir. Kita pernah saling kenal sekitar 2020–2021, lalu sempet lodt contact. Sampe akhirnya kita ketemu dan komunikasi lagi setelah sekian lama.",
  "Sejak saat itu, banyak hal udah berubah between us. Kamu pindah dari Jakarta ke Dubai, sampe akhirnya sekarang di Saudi Arabia. Sementara aku sendiei sempet kabur aja dulu ke US dan akhirnya kembali ke Bekashit 🤧",
  "And somehow, here we are. Aku seneng banget ternyata kita punya kesempatan untuk saling kenal lagi. Kali ini dengan cerita dan versi diri kita yang mungkin udah jauh berbeda dari dulu. I’m genuinely grateful we’re talking again. 💖",
  "Ada banyak hal tentang kamu yang masih mau aku pahamin dan coba ngertiin. Tentang keseharianmu, hal-hal yang kamu suka, keluargamu, mimpi-mimpimu, bahkan cerita random yang mungkin menurutmu gak penting dan omong kosong belaka menurutmu 😛",
  "Untuk perjalanan baru di pekerjaanmu, semoga kamu bisa menikmati proses adaptasinya, menemukan banyak hal baik, dan tetap punya waktu untuk dirimu sendiri… dan buat aku juga 😌🤏🏻",
  "Dan semoga kamu selalu sehat ya. Jangan lupa jaga diri, istirahat yang cukup, dan jangan terlalu memaksakan diri sayangku 💕",
  "Aku sebenernya mau sok cool, tapi kayaknya ada yang salah sama diriku. Kok bisa-bisanya aku senyum sendiri gara-gara seseorang yang bahkan belum pernah aku temuin in person?",
  "Hal-hal kecil tentang kamu ternyata bisa jadi sesuatu yang aku tunggu-tunggu. Bahkan percakapan sederhana sebelum kamu tidur pun bisa bikin hariku terasa berbeda 🫶",
  "Ini aku yang gampang jatuh hati atau kamu emang loveable ya? 🫠",
  "Klo perasaan suka ada formulir pendaftarannya, kayaknya aku udah isi semuanya. Tinggal nunggu hasil keputusan dari pihak yang berwenang 😌",
  "Dan pihak yang berwenang itu ya kamu bub xixixi 🫵🏻",
  "Tapi dibalik semua candaan ini, ada beberapa hal yang serius mau aku sampaikan sayang",
  "Aku mau mengenal kamu lebih jauh. Bukan cuma bagian dirimu yang menyenangkan, tetapi juga cerita, pemikiran, dan sisi-sisi dirimu yang mungkin belum banyak orang tau dan bisa pahamin",
  "Kamu gak harus selalu ceria atau selalu punya energi. Kamu boleh punya hari yang buruk, boleh capek, dan boleh jadi diri sendiri tanpa harus merasa perlu menyenangkan semua orang, terutama aku.",
  "Aku gak bisa menjanjikan hubungan yang selalu sempurna. Tapi aku mau menjadi seseorang yang mau belajar, mendengarkan, menghargai, dan berusaha memahami kamu.",
  "Babe, kalau kamu mulai curiga dan paham aku lagi ngomong apa, kamu boleh pura-pura kaget sambil cepirit dikit 🤏🏻",
  "Can’t tell you how much I fancy you, Iriz. More than I probably know how to explain ✨",
  "Iya, kamu 🔫",
  "I’ve got your back through anything. Aku mau kamu tau klo kamu gak harus menghadapi semuanya sendirian. Aku ingin jadi seseorang yang bisa kamu cari ketika kamu butuh temen, dukungan, atau sekadar tempat bercerita.",
  "I will always work on myself to become someone who deserves you. Aku mau terus berproses bareng kamu. Bukan untuk menjadi sempurna, tapi untuk menjadi pasangan yang bisa kamu percaya dan andalkan 💪🏻",
  "Aku mau terus mendengar cerita tentang harimu, ikut bahagia atas pencapaian kecilmu, mendukung hal-hal yang sedang kamu perjuangkan, termasuk goals kamu, dan menemani kamu melewati hari-hari yang biasa saja.",
  "Kalau suatu hari kita berbeda pendapat atau salah paham, aku berharap kita bisa membicarakannya baik-baik dan mencari jalan keluar bersama. We compromise, we understand, and we meet halfway. We fight, we fix, we stay 🤝",
  "Aku nggak mau cuma mengumbar janji manis atau overpromise. Aku lebih ingin membuktikan niat baikku lewat hal-hal kecil dan konsistensi 😎",
  "Aku mau hubungan yang membuat kita sama-sama merasa aman untuk menjadi diri sendiri, bertumbuh, berproses, saling membersamai, dan tetap punya ruang untuk mengejar mimpi masing-masing.",
  "Aku gak mau kita cuma jadi dua orang yang saling flirting tanpa tahu ke mana arah hubungan ini. Aku mau memperjelas hubungan kita, sayang.",
  "Terima kasih sudah mau hadir (lagi) dan menjadi bagian dari hari-hariku. Bahkan lewat hal-hal sederhana yang mungkin nggak kamu sadari, tapi bisa aku rasakan 💖",
  "Kalau kamu masih baca sampai sini, terima kasih sudah bertahan melewati presentasi cinta yang nggak diminta ini. WKWKWK 🤣",
  "Aku nggak tahu bagaimana perjalanan kita nanti, tapi aku tau klo aku mau memberi diriku kesempatan untuk mengenal dan mencintai kamu dengan lebih sungguh-sungguh. I love you, forever and always babe ✨ Aku ingin kalimat ini jadi sesuatu yang bukan cuma kamu baca hari ini, tetapi juga bisa kamu rasakan dari caraku memperlakukanmu.",
  "Okiiii, kayaknya basa-basinya udah cukup. Aku mulai gugup sendiri padahal yang harus jawab nanti bukan aku 😭"
];

const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const ending = document.getElementById("ending");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const messageText = document.getElementById("messageText");
const messageNumber = document.getElementById("messageNumber");
const counter = document.getElementById("counter");
const progressFill = document.getElementById("progressFill");
const popupCard = document.getElementById("popupCard");
const whatsappBtn = document.getElementById("whatsappBtn");

let currentIndex = 0;

function showMessage(index) {
  currentIndex = index;
  messageNumber.textContent = String(index + 1).padStart(2, "0");
  counter.textContent = `${String(index + 1).padStart(2, "0")} / 33`;
  messageText.textContent = messages[index];
  progressFill.style.width = `${((index + 1) / messages.length) * 100}%`;

  popupCard.style.animation = "none";
  void popupCard.offsetWidth;
  popupCard.style.animation = "appear .35s ease both";

  nextBtn.textContent = index === messages.length - 1 ? "Satu hal lagi… →" : "Lanjut →";
}

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  experience.classList.remove("hidden");
  showMessage(0);
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < messages.length - 1) {
    showMessage(currentIndex + 1);
  } else {
    experience.classList.add("hidden");
    ending.classList.remove("hidden");
  }
});

// WhatsApp CTA. The message is pre-filled; the recipient can edit it before sending.
const phoneNumber = "14242433057";
const waMessage = "Iya, aku mau jadi pacar kamu! 🤪💚";
whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
