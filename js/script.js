

//Set Current Year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;



//Make mobile navigation work
const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');

btnNav.addEventListener('click',()=>header.classList.toggle('nav--open'));

//Smooth scrolling animation

const body = document.querySelector('body');
body.addEventListener('click', function(e){
  if(!e.target.closest('a:link')) return;
  const link = e.target.closest('a:link');
  e.preventDefault();

  const href = link.getAttribute('href');
  //Scroll back to top

  if(href==='#') window.scrollTo({top:0, behavior: 'smooth'});

  //Scroll to other links

  if(href!=='#' && href.startsWith('#')){
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({behavior: 'smooth'});
  }

  //Close mobile navigation
  if(link.classList.contains('main-nav-link')) 
      header.classList.toggle('nav--open');

})


////////////////////////////////////////////////////////////

//Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
if(ent.isIntersecting)
 document.body.classList.remove('sticky');
else
  document.body.classList.add('sticky');
},
{
  //In the viewport
  root: null, 
  threshold:0,
  rootMargin: '-80px'
})

observer.observe(sectionHeroEl);



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  




// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
