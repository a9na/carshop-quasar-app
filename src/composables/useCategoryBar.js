const categoryBarOpen = ref(false);

export default () => {
  const toggleCategoryBar = () => {
    categoryBarOpen.value = !categoryBarOpen.value;
  };

  const openCategoryBar = () => {
    categoryBarOpen.value = true;
  };

  const closeCategoryBar = () => {
    categoryBarOpen.value = false;
  };
  return {
    toggleCategoryBar,
    categoryBarOpen,
    closeCategoryBar,
    openCategoryBar,
  };
};
