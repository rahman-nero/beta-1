// Lazy load
alert("IntersectionObserver" in window);
alert("IntersectionObserverEntry" in window);

try {
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
      alert('LAzyImgae');
    }); 

  }else{
    var els = document.getElementsByClassName("lazyload");

      Array.prototype.forEach.call(els, function(el) {
         var img = el.src = el.dataset.src;
         alert('elseImage');
      });
  }


} catch(e) {
  
 alert('Ошибка в внутри');
}


  if (document.getElementsByClassName("lazyload")[0].src == undefined) {

     var els = document.getElementsByClassName("lazyload");

      Array.prototype.forEach.call(els, function(el) {
         var img = el.src = el.dataset.src;
         alert(img);
      });

      // [].forEach.call(document.getElementsByClassName('lazyload'), function(el) {
      //   el.src = el.dataset.src;
      // });


  }



  
      
