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
  listItems.forEach(function(li) {
    const subtree = li.querySelector("ul");

    if (subtree) {
      // Hide subtree using Tailwind's hidden class
      subtree.classList.add("hidden", "overflow-hidden");
      li.dataset.treeState = "closed";

      li.addEventListener("mouseenter", function() {
        if (options.closeOther && li.dataset.treeState === "closed") {
          const siblings = li.parentElement.querySelectorAll(":scope > li:not([data-tree-state='empty'])");
          siblings.forEach(function(sibling) {
            if (sibling !== li) {
              sibling.dataset.treeState = "closed";
              sibling.classList.remove(options.activeSelector.replace(".", ""));
              const sibSubtree = sibling.querySelector(":scope > ul");
              const sibButton = sibling.querySelector(".toggler");
              if (sibSubtree) slideUp(sibSubtree, options.delay);
              if (sibButton) sibButton.classList.remove("rotate-90");
            }
          });
        }

        const childUl = li.querySelector(":scope > ul");
        if (childUl) slideToggle(childUl, options.delay);

        const isOpening = li.dataset.treeState === "closed";
        li.dataset.treeState = isOpening ? "open" : "closed";

        // Toggle active class if provided
        const activeClass = options.activeSelector.replace(".", "");
        if (activeClass) li.classList.toggle(activeClass, isOpening);
      });

      treemenu(subtree, options);
    } else {
      li.dataset.treeState = "empty";
      // Hide toggler for leaf nodes
    }
  });

  if (options.openActive) {
    const activeEls = element.querySelectorAll(options.activeSelector);

    activeEls.forEach(function(activeEl) {
      let el = activeEl.parentElement;

      while (el && el !== element) {
        if (el.tagName === "UL") {
          el.classList.remove("hidden");
        } else if (el.tagName === "LI") {
          const childUl = el.querySelector(":scope > ul");
          if (childUl) childUl.classList.remove("hidden");
          el.dataset.treeState = "closed";
          const btn = el.querySelector(".toggler");
          if (btn) btn.classList.add("rotate-90");
        }
        el = el.parentElement;
      }
    });
  }

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
  requestAnimationFrame(() => { el.style.height = height; });
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
  requestAnimationFrame(() => { el.style.height = "0"; });
  setTimeout(() => {
    el.classList.add("hidden");
    el.style.height = "";
    el.style.overflow = "";
    el.style.transition = "";
  }, duration);
}

function slideToggle(el, duration) {
  if (el.classList.contains("hidden") || getComputedStyle(el).display === "none") {
    slideDown(el, duration);
  } else {
    slideUp(el, duration);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  treemenu(document.querySelector("#mainnav"), {
    delay: 220,
    closeOther: false
  });
});
