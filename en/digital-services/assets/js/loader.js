(()=>{
const randHashString = (len) => {
  return "x".repeat(len).replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
function getLoaderElement(loaderId, dim, maxSize = Infinity) {
  const loader = document.createElement("div");
  loader.style = `
        width: ${dim.width}px;
        height: ${dim.height}px;
        top: ${dim.top}px;
        bottom: ${dim.bottom}px;
        left: ${dim.left}px;
        right: ${dim.right}px;
        position: fixed;
        zIndex: 200;
        display: grid;
        place-items: center;
    `;
  let size = Math.min(dim.width, dim.height, maxSize);
  const bSize = Math.max(2, size / 8);
  size = size - bSize * 2;
  const spin = document.createElement("div");
  spin.style = `
        border: ${bSize}px solid #f3f3f3;
        border-top: ${bSize}px solid #46f1c3;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        animation: loader_spin 1s linear infinite;
    `;
  loader.appendChild(spin);
  loader.id = loaderId;
  return loader;
}
function startLoading(elem,spinnerElem, maxSize) {
  if (typeof elem === "string") elem = document.querySelector(elem);
  if (!elem) return;
  const id = elem.getAttribute("loader-id");
  if (id) return;
  const dim = elem.getBoundingClientRect();
  const loaderId = randHashString(8);
  // document.body.appendChild(getLoaderElement(loaderId, dim, maxSize));
  // elem.setAttribute("loader-id", loaderId);
  elem.style.display = "none";
    spinnerElem.style.display = "block"
  return loaderId;
}
function stopLoading(elem,spinnerElem, isLoaderId = false) {
  let id;
  if (isLoaderId) {
    // id = elem;
    // elem = document.querySelector(`[loader-id="${elem}"]`);
  } else if (typeof elem === "string") elem = document.querySelector(elem);
  // id = id || (elem && elem.getAttribute("loader-id"));
  // if (!id) return;
  // const _elem = document.getElementById(id);
  // if(_elem)_elem.remove();
  if (elem) {
    // elem.removeAttribute("loader-id");
    elem.style.display = "block";
    spinnerElem.style.display = "none"
  }
}
window.start_loading = startLoading;
window.stop_loading = stopLoading;
})()