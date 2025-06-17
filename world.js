// Only run on world.html
if (window.location.pathname.includes("world.html")) {
    const worldArticles = [
      {
        title: "Global Climate Agreement Reached",
        excerpt: "World leaders signed a historic agreement to tackle climate change and reduce emissions.",
        full: "Leaders from over 150 countries met to finalize a deal to cut carbon emissions by 40% by 2035...",
        image: "images/world1.jpg",
      },
      {
        title: "International Markets Rebound",
        excerpt: "Markets around the globe showed strong recovery signs as economies stabilize.",
        full: "After months of economic instability, global stock markets are showing strong signs of recovery...",
        image: "images/world2.jpg",
      },
      {
        title: "Peace Talks Progress in Middle East",
        excerpt: "Diplomatic efforts are gaining momentum with new initiatives from the United Nations.",
        full: "The UN has deployed more envoys to foster agreements between long-standing rival groups...",
        image: "images/world3.jpg",
      }
    ];
  
    const articleSection = document.querySelector(".articles");
    articleSection.innerHTML = ""; // Clear any static content
  
    worldArticles.forEach((article) => {
      const div = document.createElement("div");
      div.className = "article";
      div.innerHTML = `
        <img src="${article.image}" class="article-image" alt="${article.title}" />
        <h2>${article.title}</h2>
        <p>${article.excerpt}</p>
        <a href="#" class="read-more">Read more</a>
        <p class="full-text" style="display:none;">${article.full}</p>
      `;
      articleSection.appendChild(div);
    });
  
    // Expand full text
    document.querySelectorAll(".read-more").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const fullText = this.nextElementSibling;
        fullText.style.display = fullText.style.display === "none" ? "block" : "none";
        this.textContent = fullText.style.display === "block" ? "Read less" : "Read more";
      });
    });
  }
// Highlight active nav link based on URL
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
};

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// News ticker headlines
const tickerHeadlines = [
    "🔴 Breaking: Global Summit Begins in Geneva",
    "🌍 Earthquake Hits Northern Japan — 6.2 Magnitude",
    "🕊️ Peace Talks Resume in Ukraine",
    "📉 Inflation Rates Drop Slightly in EU",
    "🌐 Internet Access Expands in Rural Africa"
  ];
  
  const tickerContainer = document.getElementById("tickerContent");
  
  if (tickerContainer) {
    tickerContainer.innerHTML = tickerHeadlines.map(headline => `&nbsp;&nbsp;${headline} &bull;`).join(" ");
  }
  
  
  
    