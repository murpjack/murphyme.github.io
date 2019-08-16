let originalPrice = 0;
let currentPrice = 1;

function displayPriceChange() {
  let value = document.getElementsByClassName("value")[index];
  if (originalPrice > currentPrice) {
    // SHOW RED
    updateExtensionRateRed(value);
    updateBadgeRed(badge)
    updateBadgeText(badge);

  } else if (originalPrice < currentPrice) {
    // SHOW GREEN
    updateExtensionRateGreen(value);
    updateBadgeGreen(badge)
    updateBadgeText(badge);
  }
  // default to green only toggle one class *** TODO ***
  function updateExtensionRateGreen(el) {
    el.classList.remove("value--down");
    el.classList.add("value--up");
  }

  function updateExtensionRateRed(el) {
    el.classList.remove("value--up");
    el.classList.add("value--down");
  }

  function updateBadgeGreen(badge) {

  }

  function updateBadgeRed(badge) {

  }

  function updateBadgeText(badge) {

  }
  updateBadge();

}

// fired on opening extenison && when refresh clicked || polling??
displayPriceChange();
