function showUrlButton() {
  const checkUrlHas_Sub4unlock = document.querySelector(
    'a[href*="sub4unlock.io"]'
  );

  if (checkUrlHas_Sub4unlock) {
    let progressEl = document.getElementById("progress");
    progressEl.innerText = "Bypassed by Nata ✨";
    let anchor = document.querySelector("a.disabled");
    anchor.classList.remove("disabled");
    let spanNode = anchor.querySelectorAll("span");
    let locked = spanNode[0].querySelector("i");
    locked.classList.remove("fa-lock");
    locked.classList.add("fa-unlock");
    let span = spanNode[spanNode.length - 1];
    span.innerText = "Link Unlocked";
  }
}

showUrlButton();
