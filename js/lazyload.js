// Lazy load

  try {
    

if ("IntersectionObserver" in window == true) {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
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
         alert('elsellImage');
      });

  }




  } catch(e) {
    // statements
    alert(e);
  }
  // if ("IntersectionObserver" in window === false){
  //   var els = document.getElementsByClassName("lazyload");

  //     Array.prototype.forEach.call(els, function(el) {
  //        var img = el.src = el.dataset.src;
  //        alert('elsellImage');
  //     });
  // }



