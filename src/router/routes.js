const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainPage.vue") },

      {
        path: "/product/:productId",
        name: "ProductPage",
        component: () => import("src/pages/product/ProductPage.vue"),
      },

      {
        path: "/category/:categoryId",
        name: "CategoryPage",
        component: () => import("src/pages/category/CategoryPage.vue"),
      },
      {
        path: "/category/:categoryId",
        name: "CategoryPage",
        component: () => import("src/pages/category/CategoryPage.vue"),
      },
      {
        path: "/ReviewPage",
        name: "ReviewPage",
        component: () => import("src/pages/ReviewPage.vue"),
      },
      {
        path: "/ServicePage",
        name: "ServicePage",
        component: () => import("src/pages/ServicePage.vue"),
      },
      {
        path: "/WishlistPage",
        name: "WishlistPage",
        component: () => import("src/pages/WishlistPage.vue"),
      },
      {
        path: "/CartPage",
        name: "CartPage",
        component: () => import("src/pages/CartPage.vue"),
      },
      {
        path: "/ContactPage",
        name: "ContactPage",
        component: () => import("src/pages/ContactPage.vue"),
      },
      {
        path: "/AccountPage",
        name: "AccountPage",
        component: () => import("src/pages/AccountPage.vue"),
      },
      {
        path: "/AboutPage",
        name: "AboutPage",
        component: () => import("src/pages/AboutPage.vue"),
      },
    ],
  },
];

export default routes;
