// Step 1: Create and style the container
const navContainer = document.createElement("div");
navContainer.classList.add("scrollable-nav");
document.querySelector(".hero-banner").before(navContainer); // Insert above hero banner

// Step 2: Array of items with links and images
const navItems = [
  {
    text: "Best Sellers",
    link: "/collections/jm-best-sellers",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png",
  },
  {
    text: "New",
    link: "/collections/jm-new-arrivals",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png",
  },
  {
    text: "Necklaces",
    link: "/collections/necklaces",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png",
  },
  {
    text: "Rings",
    link: "/collections/rings",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png",
  },
  {
    text: "Earrings",
    link: "/collections/bracelets",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png",
  },
  {
    text: "Personalized",
    link: "/collections/personalized",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png",
  },
  {
    text: "Fine",
    link: "/collections/fine",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png",
  },
  {
    text: "Clearance",
    link: "/collections/clearance",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png",
  },
  {
    text: "Sale",
    link: "/collections/fine-sample-sale",
    image:
      "https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png",
  },
];

// Step 3: Loop through items to create elements
navItems.forEach((item) => {
  const link = document.createElement("a");
  link.href = item.link;
  link.classList.add("nav-item");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.text;

  const text = document.createElement("p");
  text.textContent = item.text;

  link.appendChild(img);
  link.appendChild(text);
  navContainer.appendChild(link);
});

// Step 4: Add styling using JavaScript
const styles = `
.scrollable-nav {
  display: flex;
  overflow-x: scroll;
  padding: 10px;
  background-color: #fff;
}

.nav-item {
  display: block;
  margin-right: 20px;
  text-align: center;
  flex: 0 0 auto;
}

.nav-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: block;
}

.nav-item p {
  margin: 10px 0 0;
  font-size: 14px;
}
`;

// Step 5: Append the styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
