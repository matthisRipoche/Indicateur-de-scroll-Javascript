window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  //   Code
  const bar = document.getElementById("bar");
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY + 238;
    let minScroll = 0;
    let maxScroll = 762;
    const scrollAdvancement = scroll/maxScroll * 100 + "%";
    console.log(scrollAdvancement);
    bar.style.width = scrollAdvancement;
  });

}
