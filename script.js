/* script.js
   Replace the images array entries with your own 101 image paths and optional notes.
   Each item: { src: "path/to/image.jpg", note: "Your placeholder note here" }
   Recommended: use relative paths or absolute URLs you control.
*/

/* ----------------- CONFIG: Replace these 101 entries ----------------- */
const images = [
  // Example entries (you MUST replace these with your 101 actual image paths)
  { src: "mygirl/1.jpg", note: "10/14/25 Hi my dearest, I just wanted you to know, I had a tiring day. I keep thinking about you while im in class, I really miss you, I want to hear your voice to cleans my fatigue. I love you always" },
  { src: "mygirl/2.jpg", note: "Your pic going to work, Saw you as a hard working woman" },
  { src: "mygirl/3.jpg", note: "You said you didn't like chem but loved teaching, I can definitely see it in the future" },
  { src: "mygirl/4.jpg", note: "One of your favorite poses, which suites you. You look cute TT" },
  { src: "mygirl/5.jpg", note: "That smile of yours captivates me" },
  { src: "mygirl/6.jpg", note: "The shape of your eyes that oddly fits your glasses" },
  { src: "mygirl/7.jpg", note: "Your silliness makes me giggle T_T " },
  { src: "mygirl/8.jpg", note: "A simple, yet captivating image of yours " },
  { src: "mygirl/9.jpg", note: "I love the flower on your hair, your face gives me a melancholic vibe " },
  { src: "mygirl/10.jpg", note: "How can someone be hot and cute at the same time?" },
  { src: "mygirl/11.jpg", note: "close your eyes, open your eyes close again" },
  { src: "mygirl/12.jpg", note: "why you pouting (omg omg omg so cute)" },
  { src: "mygirl/13.jpg", note: "Happpyyyy birthdayyyy, you without glasses is deadly TVT" },
  { src: "mygirl/14.jpg", note: "MAMA MIA" },
  { src: "mygirl/15.jpg", note: "MAMA MIA AGAIN" },
  { src: "mygirl/16.jpg", note: "hehe I remember this, you were matching my weirdness" },
  { src: "mygirl/17.jpg", note: "MAMA MIA 3" },
  { src: "mygirl/18.jpg", note: "I just wanna lay on your lap and eep" },
  { src: "mygirl/19.jpg", note: "You in your workplaceeee hehehe hardworking bebe" },
  { src: "mygirl/20.jpg", note: "Oh nooo ndi ordered yung pics...EXCUSE MEEE SO PRETTYYY" },
  { src: "mygirl/21.jpg", note: "O_O" },
  { src: "mygirl/22.jpg", note: "HI MARIN KITAGAWA" },
  { src: "mygirl/23.jpg", note: "OMYYYY THAT LOOOOOK OF YOURS SO DEADLY" },
  { src: "mygirl/24.jpg", note: "hi tita na galing abroad (compliment)" },
  { src: "mygirl/25.jpg", note: "aaackk the bangsss so cute babyyy" },
  { src: "mygirl/26.jpg", note: "uhmmm lips looks kissable (mwah)" },
  { src: "mygirl/27.jpg", note: "DROP DEAD GORG(i cant spell)" },
  { src: "mygirl/28.jpg", note: "you just look soooo incredible here" },
  { src: "mygirl/29.jpg", note: "MAMA MIA 4" },
  { src: "mygirl/30.jpg", note: "you look so dreamy AAAAAA" },
  { src: "mygirl/31.jpg", note: "grabe yung ngiti baby nakaka HAAAAAAAAAAAA" },
  { src: "mygirl/32.jpg", note: "Working babyyy~~~Cute fit" },
  { src: "mygirl/33.jpg", note: "I remember you telling me that you donwanna work anymore in this pic T_T " },
  { src: "mygirl/34.jpg", note: "AAAAAAAAAAAAAAAA IM SIMPING FOR YOU" },
  { src: "mygirl/35.jpg", note: "HI AGAIN TITA" },
  { src: "mygirl/36.jpg", note: "your eyes, nose, lips" },
  { src: "mygirl/37.jpg", note: "Your touch that used to touch me (get it?) hehehe" },
  { src: "mygirl/38.jpg", note: "uhm naulit ba ito? ang ganda kasi hehe" },
  { src: "mygirl/39.jpg", note: "If that's the case then everything about you is pretty kasi lahat ng pics dito pretty" },
  { src: "mygirl/40.jpg", note: "you're so cute, I miss you :(" },
  { src: "mygirl/41.jpg", note: "my first wallpaper of you!!!! ofc di to mawawala" },
  { src: "mygirl/42.jpg", note: "if only wala yang light na yan so i could look directly into your eyes" },
  { src: "mygirl/43.jpg", note: "MWAAAAAAAAAAAAA MWAAAAAAAAAAAA MWAAAAAAAAAAAA" },
  { src: "mygirl/44.jpg", note: "this pic gives i wanna hug you vibes, I miss youuuuu" },
  { src: "mygirl/45.jpg", note: "Oh how good you look in yukata" },
  { src: "mygirl/46.jpg", note: "your roblox pfp fits you perfectly T_T" },
  { src: "mygirl/47.jpg", note: "My magnolia, the prettiest in the world" },
  { src: "mygirl/48.jpg", note: "Kiss meeee hold me and adore meeee" },
  { src: "mygirl/49.jpg", note: "I wont go to japan without you huhu" },
  { src: "mygirl/50.jpg", note: "Pics from event hehehe you scrunching is so adorable" },
  { src: "mygirl/51.jpg", note: "We had a fight sa pics ng mga to eee im sorry babyyy (you look pretty always)" },
  { src: "mygirl/52.jpg", note: "MAMA MIA IDK PANG ILAN NA" },
  { src: "mygirl/53.jpg", note: "HI MALOIIIIII" },
  { src: "mygirl/54.jpg", note: "yung eyes mo talagaaaa" },
  { src: "mygirl/55.jpg", note: "You look so damn hot and pretty and fierce" },
  { src: "mygirl/56.jpg", note: "Working bebe!!! so prettyyyyy" },
  { src: "mygirl/57.jpg", note: "I will spoil you with flowers in the future hmp" },
  { src: "mygirl/58.jpg", note: "You look like a japanese actress here baby huhu so ganda" },
  { src: "mygirl/59.jpg", note: "hi babyyyy hi mimiiii (was my comment here if i can remember)" },
  { src: "mygirl/60.jpg", note: "Las vegas girlie" },
  { src: "mygirl/61.jpg", note: "Ni hao fine shyt" },
  { src: "mygirl/62.jpg", note: "kunin ko yang potat from ur mouth using mine ;)" },
  { src: "mygirl/63.jpg", note: "Imagine waking up look at that face" },
  { src: "mygirl/64.jpg", note: "OMAGAHHHHHHHHHHHHH UGH" },
  { src: "mygirl/65.jpg", note: "HI again titaaaaaa spoil moko pls" },
  { src: "mygirl/66.jpg", note: "You going to school, Take care lagiiii tangiii" },
  { src: "mygirl/67.jpg", note: "Dito mo talaga naging kamukhang kamukha mga kapatid mo" },
  { src: "mygirl/68.jpg", note: "Isang halik para sa magandang dalaga" },
  { src: "mygirl/69.jpg", note: "Sige gawin kong marami para di ka magtampo" },
  { src: "mygirl/70.jpg", note: "YAYYYYY TINANGGAP" },
  { src: "mygirl/71.jpg", note: "naulit yung pic huhu bug ata to, sorryryyy" },
  { src: "mygirl/72.jpg", note: "yes tita spoil moko" },
  { src: "mygirl/73.jpg", note: "yeheyyyyyyy" },
  { src: "mygirl/74.jpg", note: "hi again maloiiiii pero hm mas maganda ka sakanya" },
  { src: "mygirl/75.jpg", note: "MWAAAAAAAAAAAAAAAAAAAA" },
  { src: "mygirl/76.jpg", note: "I love you always" },
  { src: "mygirl/77.jpg", note: "Yes I do my baby" },
  { src: "mygirl/78.jpg", note: "Yes really fr fr love na love kita" },
  { src: "mygirl/79.jpg", note: "MWAAAAAAAAAAAAAAAAAA" },
  { src: "mygirl/80.jpg", note: "Ginawa ko tong bnw , I love it, para kang nasa old films" },
  { src: "mygirl/81.jpg", note: "grabe yung tingin mo dito baby ko hehehe am melting " },
  { src: "mygirl/82.jpg", note: "eep na us pag inaantok hehehe" },
  { src: "mygirl/83.jpg", note: "bleeeeeeee" },
  { src: "mygirl/84.jpg", note: "hehehhe feelin mischievous" },
  { src: "mygirl/85.jpg", note: "hala nagising" },
  { src: "mygirl/86.jpg", note: "sorryyyy maingay hehehehehe " },
  { src: "mygirl/87.jpg", note: "naulit nanaman hala T_T sorry baby ko" },
  { src: "mygirl/88.jpg", note: "I love you" },
  { src: "mygirl/89.jpg", note: "Naulit againnn aaaaaaa" },
  { src: "mygirl/90.jpg", note: "So cute :(" },
  { src: "mygirl/91.jpg", note: "Bagay mo short hair babyyy" },
  { src: "mygirl/92.jpg", note: "The wallpaper I kept the longest, when i first saw it, It made me think that i have this beautiful girl that I should keep her always and love her with all my heart." },
  { src: "mygirl/93.jpg", note: "Your love for drinks, When I get rich, I'll let you buy any drink you want." },
  { src: "mygirl/94.jpg", note: "I love you" },
  { src: "mygirl/95.jpg", note: "Hehe this will be the first pic we are together in this whole website, Gusto ko siya ilagay sa last para maganda yung ending once you swipe along these images ofc hehehee" },
  { src: "mygirl/96.jpg", note: "Gusto kita halikan sa pic na to, but I was so shy cause we were in public" },
  { src: "mygirl/97.jpg", note: "SSa top floor to ng moa, we ate good food before I was going back to Baguio, spent the time nicely together. hehe Umiyak me sa bus nung with the though of not being with you for months again" },
  { src: "mygirl/98.jpg", note: "Yung sinurprise mo ako pero it failed kasi nakita ko sa 360 yung location mo HAHAHAHAHAHA" },
  { src: "mygirl/99.jpg", note: "This park was one of the prettiest place I've ever seen, thank you for taking me there I really loved it. I saw my spirit animal. Sana sa future sa totoong Japan na " },
  { src: "mygirl/100.jpg", note: "Ang cute natin sa pic na to huhu. Mahal na mahal kita baby ko" },
  { src: "mygirl/101.jpg", note: "Alas, for the 101th picture, this is my favorite. You gave me a sense of security that nabahala ako, I take accountability for that. This image tells a cute litte story in 6 frames, just us smiling, mcdo pose, me huging your head, me kissing your cheek, we quote on quote kissing, and you thumbs up while me, smiling. This little moments tells me that '''Ah im so inlove with you''' Thank you baby and sorry for being incompetent. I promise to change. I love you and happy 8th. " },
];

/* Auto-fill to 101 placeholders if developer hasn't added 101 (so layout still works).
   Remove or ignore this block if you already included 101 real entries above.
*/
(function ensure101(){
  if (images.length >= 101) return;
  const start = images.length + 1;
  for (let i = start; i <= 101; i++){
    images.push({
      src: `images/placeholder-${String(i).padStart(3,"0")}.jpg`,
      note: `Placeholder note for image ${i} — replace me in script.js`
    });
  }
})();

/* ----------------- END CONFIG ----------------- */

const galleryEl = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const noteTextarea = document.getElementById('noteTextarea');
const saveBtn = document.getElementById('saveNote');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const exportBtn = document.getElementById('exportBtn');
const clearLocalBtn = document.getElementById('clearLocal');

let currentIndex = 0;

/* Load saved notes from localStorage if present */
const STORAGE_KEY = 'happy8_notes_v1';
let savedNotes = {};
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) savedNotes = JSON.parse(raw);
} catch (e) {
  console.warn('Could not parse saved notes', e);
}

/* Build gallery */
function buildGallery(){
  galleryEl.innerHTML = '';
  images.forEach((it, idx) => {
    const tile = document.createElement('button');
    tile.className = 'tile';
    tile.setAttribute('aria-label', `Open image ${idx+1}`);
    tile.dataset.index = idx;

    const img = document.createElement('img');
    img.alt = `Image ${idx+1}`;
    img.src = it.src;

    const caption = document.createElement('div');
    caption.className = 'caption';

    const idxBadge = document.createElement('div');
    idxBadge.className = 'index';
    idxBadge.textContent = `${idx+1}`;

    caption.appendChild(idxBadge);
    tile.appendChild(img);
    tile.appendChild(caption);

    tile.addEventListener('click', () => openModal(idx));
    galleryEl.appendChild(tile);

    // graceful image error handler (in case path missing)
    img.addEventListener('error', () => {
      img.src = generateSVGDataUrl(idx+1);
      img.alt = `Missing image ${idx+1}`;
    });
  });
}

/* Create a simple SVG placeholder for missing images */
function generateSVGDataUrl(num){
  const text = `Image ${num}\n(Replace path)`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
    <rect width='100%' height='100%' fill='#fff1f6'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' fill='#7a2943' font-size='28'>${escapeHtml(text)}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* Open modal for index */
function openModal(index){
  currentIndex = index;
  const it = images[index];
  modalImg.src = it.src;
  modalImg.alt = `Image ${index+1}`;
  // select saved note if available, else default note in images array
  noteTextarea.value = savedNotes[index] ?? (it.note ?? '');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  noteTextarea.focus();
}

/* Close modal */
function closeModal(){
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* Save note for current index */
function saveNote(){
  savedNotes[currentIndex] = noteTextarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedNotes));
  // feedback: small transient visual change
  saveBtn.textContent = 'Saved ✓';
  setTimeout(()=> saveBtn.textContent = 'Save', 1200);
}

/* Prev / Next */
function showPrev(){
  const next = (currentIndex - 1 + images.length) % images.length;
  openModal(next);
}
function showNext(){
  const next = (currentIndex + 1) % images.length;
  openModal(next);
}

/* Keyboard handlers */
document.addEventListener('keydown', (e) => {
  const isOpen = modal.getAttribute('aria-hidden') === 'false';
  if (!isOpen) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

/* Click outside to close */
modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

/* Buttons */
saveBtn.addEventListener('click', saveNote);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

exportBtn.addEventListener('click', () => {
  const exportObj = images.map((it, idx) => ({
    index: idx+1,
    src: it.src,
    note: savedNotes[idx] ?? it.note ?? ''
  }));
  const blob = new Blob([JSON.stringify(exportObj, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'happy8_notes.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

clearLocalBtn.addEventListener('click', () => {
  if (confirm('Remove saved notes from this browser? This will not change the code file.')) {
    localStorage.removeItem(STORAGE_KEY);
    savedNotes = {};
    alert('Saved notes cleared locally.');
  }
});

/* Initialize */
buildGallery();
