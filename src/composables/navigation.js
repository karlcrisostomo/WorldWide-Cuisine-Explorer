import router from "@/router";
import { ref } from "vue";
export default {
  setup() {
    const isMenuOpen = ref(true);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
