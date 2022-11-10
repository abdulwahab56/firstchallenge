function buttonsreset() {
  for (let i = 0; i < all_button.length; i++) {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-success");
  }
}
