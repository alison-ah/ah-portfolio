const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;


//
const options = [
{ id: "one", link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=1845&customid=2006", title:"View the Minnesota Urolith Center's custom cart page", src: "img/custom-giving-ur.png", alt:"preview of the Minnesota Urolith Center's custom cart page"}
// { id: "two", link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=1845&customid=2006", title:"View the Minnesota Urolith Center's custom cart page", src: "img/makingagift.png", alt:"preview of the Minnesota Urolith Center's custom cart page"}

]

const controls = document.getElementById('controls'); // wrapper for prev/next
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const link = document.getElementById('figure-link');
const img = document.getElementById('figure-img');
const caption = document.getElementById('figure-caption');

let index = 0;

function updateControlsVisibility(){
  if (!controls) return;
  controls.style.display = options.length <= 1 ? 'none' : '';
}

function showIndex(i){
  const len = options.length;
  if (len === 0) {
    link.href = '#';
    img.src = '';
    img.alt = '';
    caption.textContent = '';
    return;
  }
  const idx = ((i % len) + len) % len; // normalize for looping
  const item = options[idx];
  link.href = item.link || '#';
  link.title = item.title || '';
  img.src = item.src || '';
  img.alt = item.alt || item.title || '';
  index = idx;
}

prevBtn.addEventListener('click', () => showIndex(index - 1));
nextBtn.addEventListener('click', () => showIndex(index + 1));

document.addEventListener('keydown', (e) => {
  if (options.length <= 1) return;
  if (e.key === 'ArrowLeft') showIndex(index - 1);
  if (e.key === 'ArrowRight') showIndex(index + 1);
});

// init
updateControlsVisibility();
showIndex(0);