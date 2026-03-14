/*
 treeMenu - Vanilla JS
 version: 0.6 (converted from jQuery)
 Tailwind CSS version

 Copyright 2014 Stepan Krapivin
 Vanilla JS conversion
*/

function treemenu(element, options) {
  options = options || {};
  options.delay = options.delay || 0;
  options.openActive = options.openActive || false;
  options.closeOther = options.closeOther || false;
  options.activeSelector = options.activeSelector || ".active";

  // treemenu + treemenu-root → just mark with data attributes; style via Tailwind in HTML
  element.dataset.treemenu = "true";

  if (!options.nonroot) {
    element.dataset.treemenuRoot = "true";
  }

  options.nonroot = true;

  const listItems = element.querySelectorAll("li");
  listItems.forEach(function (li) {
    const subtree = li.querySelector(":scope > ul");
    let closeTimer;

    if (subtree) {
      subtree.classList.add("hidden", "overflow-hidden");
      li.dataset.treeState = "closed";

      li.addEventListener("mouseenter", function () {

        clearTimeout(closeTimer);

        // close siblings
        if (options.closeOther) {
          const siblings = li.parentElement.querySelectorAll(":scope > li");
          siblings.forEach(function (sibling) {
            if (sibling !== li) {
              const sibSub = sibling.querySelector(":scope > ul");
              if (sibSub) slideUp(sibSub, options.delay);
              sibling.dataset.treeState = "closed";
            }
          });
        }

        if (li.dataset.treeState === "closed") {
          slideDown(subtree, options.delay);
          li.dataset.treeState = "open";
        }
      });

      li.addEventListener("mouseleave", function () {

        closeTimer = setTimeout(() => {
          if (li.dataset.treeState === "open") {
            slideUp(subtree, options.delay);
            li.dataset.treeState = "closed";
          }
        }, 200); // small delay for UX
      });

      treemenu(subtree, options);
    } else {
      li.dataset.treeState = "empty";
    }
  });
  return element;
}

// Slide helpers using Tailwind-compatible approach
function slideDown(el, duration) {
  duration = duration || 300;
  el.classList.remove("hidden");
  const height = el.scrollHeight + "px";
  el.style.overflow = "hidden";
  el.style.height = "0";
  el.style.transition = `height ${duration}ms ease`;
  requestAnimationFrame(() => {
    el.style.height = height;
  });
  setTimeout(() => {
    el.style.height = "";
    el.style.overflow = "";
    el.style.transition = "";
  }, duration);
}

function slideUp(el, duration) {
  duration = duration || 300;
  el.style.height = el.scrollHeight + "px";
  el.style.overflow = "hidden";
  el.style.transition = `height ${duration}ms ease`;
  requestAnimationFrame(() => {
    el.style.height = "0";
  });
  setTimeout(() => {
    el.classList.add("hidden");
    el.style.height = "";
    el.style.overflow = "";
    el.style.transition = "";
  }, duration);
}
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view'); // trigger animation
      } else {
        entry.target.classList.remove('in-view'); // reset when out of view
      }
    });
  },
  { threshold: 0.1 } // trigger when 10% visible
);


document.addEventListener("DOMContentLoaded", () => {
  treemenu(document.querySelector("#mainnav"), {
    delay: 440,
    closeOther: false,
  });
  document.querySelectorAll(".animate-children").forEach((el) => observer.observe(el));

});




