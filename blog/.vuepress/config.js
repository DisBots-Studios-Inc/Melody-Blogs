module.exports = {
  title: "Melody Blogs",
  description: "Latest updates about the Melody Discord bot.",
  base: "/",
  dest: "dist/",
  theme: "ououe",
  themeConfig: {
    overrideTheme: 'dark',
    cover: "/cover.jpg",
    logo: "/logo.png",
    backgroundImage: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/" },
      { text: "Tags", link: "/tag/" },
      { text: "Categories", link: "/category/" },
      { text: "About", link: "/about/" },
    ],
    footer: [
      {
        text: "Github",
        link: "https://github.com/DisBots-Studios-Inc/Melody-Blogs",
      },
      { text: "Support Server", link: "https://discord.gg/Fjrvtq4mZc" },
    ],
  },
  plugins: [
    // permalink for posts
    [
      "blog-multidir",
      {
        postsDir: {
          posts: "posts/:year/:month/:day/:slug",
        },
      },
    ],
    // add vuepress-plugin-container
    [
      "container",
      {
        type: "right",
        defaultTitle: "",
      },
    ],
    [
      "container",
      {
        type: "tip",
        before: (info) => `<div class="tip"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "warning",
        before: (info) => `<div class="warning"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "container",
      {
        type: "danger",
        before: (info) => `<div class="danger"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
  ],
};
