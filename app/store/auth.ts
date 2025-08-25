import { defineStore } from "pinia";
import type { ApiResponse } from "~/types/api";
import type { Profile } from "~/types/profile";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    profile: null as Profile | null,
    pending: false,
  }),

  getters: {
    getProfile: (state) => state.profile,
  },

  actions: {
    async fetchProfile() {
      const {
        public: { apiBaseUrl },
      } = useRuntimeConfig();

      const { fetch, session } = useUserSession();

      this.pending = true;

      try {
        const response = await $fetch<ApiResponse<Profile>>(
          `${apiBaseUrl}/auth/user`,
          {
            headers: {
              Authorization: `Bearer ${session.value.token}`,
            },
          }
        );
        this.profile = response.data;

        console.log(this.profile);
      } catch (error) {
        const errResponse = error as { status?: number; statusCode?: number };

        if (errResponse.statusCode != 401) return;
        this.profile = null;

        await $fetch("/api/logout");
        await fetch();

        return navigateTo("/login");
      } finally {
        this.pending = false;
      }
    },
  },
});
