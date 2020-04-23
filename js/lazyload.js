document.addEventListener("DOMContentLoaded", function() {


  var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
  var lazyImagesMobile = document.querySelectorAll("img.lazyload");

  if (window.innerWidth < 1000) {
    lazyImagesMobile.forEach(function(event){
      var img = event.src = event.dataset.src;


    });

  }
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazyload");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});