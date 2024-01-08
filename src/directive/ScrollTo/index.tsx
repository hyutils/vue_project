// directive/ScrollTo.js

export const scrollToDirective = {
  mounted(el: any, binding: any) {
    el.addEventListener('click', () => {
      const targetId = binding.value;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },
};
