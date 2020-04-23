// Lazy load
alert('Try');

// try {
//   let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
//   if ("IntersectionObserver" in window || "IntersectionObserverEntry" in window || "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
//     let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           let lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           // lazyImage.srcset = lazyImage.dataset.srcset;
//           lazyImage.classList.remove("lazyload");
//           lazyImageObserver.unobserve(lazyImage);
//         }
//       });
//     });

//     [].forEach.call(lazyImages,function(lazyImage) {
//       lazyImageObserver.observe(lazyImage);
//     }); 

//   }


// } catch(e) {
  
//  alert(e);
// }


//   if (document.getElementsByClassName("lazyload")[0].src == false) {

//      var els = document.getElementsByClassName("lazyload");

//       Array.prototype.forEach.call(els, function(el) {
//          var img = el.src = el.dataset.src;
//          alert(img);
//       });

//       // [].forEach.call(document.getElementsByClassName('lazyload'), function(el) {
//       //   el.src = el.dataset.src;
//       // });


//   }



  
      
