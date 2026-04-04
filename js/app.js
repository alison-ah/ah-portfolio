const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;


// To click through multiple examples of custom giving page
const options = [
    { 
        id: "2006", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=1845&customid=2006", 
        title:"View the Minnesota Urolith Center's custom cart page", src: "img/custom/2006.png", 
        alt:"Preview of the Minnesota Urolith Center's custom cart page"
    },
    { 
        id: "2010", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=23312&customid=2010", 
        title:"View the Masonic Institute for the Developing Brain Program Fund's custom cart page", src: "img/custom/2010.png", 
        alt:"Preview of the Masonic Institute for the Developing Brain Program Fund's custom cart page"
    },
    { 
        id: "2009", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=20959&customid=2009", 
        title:"View the Parkinson's Disease Research in Neurology Fund's custom cart page", src: "img/custom/2009.png", 
        alt:"Preview of the Parkinson's Disease Research in Neurology Fund's custom cart page"
    },
    { 
        id: "2007", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=25816&customid=2007", 
        title:"View the Weisman Art Museum's student engagement fund custom cart page", src: "img/custom/2007.png", 
        alt:"Preview of the Weisman Art Museum's student engagement fund custom cart page"
    },
    { 
        id: "", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=18704&customid=2004", 
        title:"View the Masonic Cancer Center's custom cart page", src: "img/custom/2004.png", 
        alt:"Preview of the Masonic Cancer Center's custom cart page"
    },
    { 
        id: "", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=8522&customid=2003", 
        title:"View the Bell Musuem's custom cart page", src: "img/custom/2003.png", 
        alt:"Preview of the Bell Musuem's custom cart page"
    },
    { 
        id: "", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=1040&customid=2002", 
        title:"View the Carlson School of Management's custom cart page", src: "img/custom/2002.png", 
        alt:"Preview of the Carlson School of Management's custom cart page"
    },
    { 
        id: "2001", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=1684&customid=2001", 
        title:"View the Raptor Center's custom cart page", src: "img/custom/2001.png", 
        alt:"Preview of the Raptor Center's custom cart page"
    },
    { 
        id: "1002", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=25721&customid=1002", 
        title:"View the UMN Founation's interest-based marketing custom cart page", src: "img/custom/1002.png", 
        alt:"Preview of the UMN Founation's interest-based marketing custom cart page"
    },
    { 
        id: "1003", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=22745&customid=1003", 
        title:"View the Voyageurs Wolf Project's custom cart page", src: "img/custom/1003.png", 
        alt:"Preview of the Voyageurs Wolf Project's custom cart page"
    },
    { 
        id: "3002", 
        link: "https://makingagift.umn.edu/give/customgift.html?pageType=AL&cart=2084&customid=3002", 
        title:"View the Weisman Art Museum's membership custom cart page", src: "img/custom/3002.png", 
        alt:"Preview of the Weisman Art Museum's membership custom cart page"
    }
]

const controls = document.getElementById('controls');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const link = document.getElementById('figure-link');
const img = document.getElementById('figure-img');

if (!link || !img) {
  console.warn('Missing #figure-link or #figure-img in DOM; carousel not initialized.');
} else {
  let index = 0;

  const len = () => options.length;

  function updateControlsVisibility() {
    if (!controls) return;
    controls.style.display = len() <= 1 ? 'none' : '';
  }

  // normalize index to 0..len-1 (works for negative values too)
  function normalize(i) {
    const n = len();
    return n ? ((i % n) + n) % n : 0;
  }

  function showIndex(i) {
    if (len() === 0) {
      link.href = '#';
      img.src = '';
      img.alt = '';
      return;
    }
    const idx = normalize(i);
    const item = options[idx];
    if (!item) return;
    link.href = item.link || '#';
    link.title = item.title || '';
    img.src = item.src || '';
    img.alt = item.alt || item.title || '';
    index = idx;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => showIndex(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showIndex(index + 1));

  document.addEventListener('keydown', (e) => {
    if (len() <= 1) return;
    if (e.key === 'ArrowLeft') showIndex(index - 1);
    if (e.key === 'ArrowRight') showIndex(index + 1);
  });

// init
updateControlsVisibility();
showIndex(0);