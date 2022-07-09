import { defineStore } from "pinia";

export const useCategories = defineStore("categories", {
  state() {
    return {
      categories: {
        all: [
          {
            label: "new",
            id: "new",
            tagId: 3,
          },
          {
            label: "used",
            id: "used",
            tagId: 3,
          },
          {
            label: "SUVs",
            id: "suvs",
            tagId: 3,
          },
          {
            label: "Hatchbacks",
            id: "hatchbacks",
            tagId: 4,
          },
          {
            label: "Crossovers",
            id: "crossovers",
            tagId: 5,
          },
          {
            label: "Convertibles",
            id: "convertibles",
            tagId: 6,
          },
          {
            label: "Sedans",
            id: "sedans",
            tagId: 7,
          },
          {
            label: "All",
            id: "all",
            tagId: 8,
          },
        ],
      },
      categoryTags: [
        { label: "new", id: 1 },
        { label: "used", id: 2 },
        { label: "SUVs", id: 3 },
        { label: "Hatchbacks", id: 4 },
        { label: "Crossovers", id: 5 },
        { label: "Convertibles", id: 6 },
        { label: "Sedans", id: 7 },
        { label: "all", id: 8 },
      ],
    };
  },
  getters: {
    allCategories() {
      const allCategories = [];
      Object.entries(this.categories).forEach(([_catName, categories]) => {
        allCategories.push(...categories);
      });
      return allCategories;
    },
  },
  actions: {
    getCategoryById(id) {
      return this.allCategories.find((category) => category.id === id) ?? null;
    },
    getCategoryTag(id) {
      return this.categoryTags.find((tag) => tag.id === id) ?? null;
    },
    getCategoryTags(ids) {
      return ids.map((id) => this.getCategoryTag(id)) ?? [];
    },
  },
});
