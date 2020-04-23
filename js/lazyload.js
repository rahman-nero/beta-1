// Lazy load

let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
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
  }else{
    var lazyImagesMobile = document.getElementsByClassName("lazyload");
        [].forEach.call(lazyImagesMobile, function(event){
         event.src = event.dataset.src;
    });

  }



  
      
