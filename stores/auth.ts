import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any | null,
    token: Cookies.get('authToken') || null,
  }),
  actions: {
    async login(credentials: { email: string; password: string }) {
      const mockUsers = [
        { email: 'user@example.com', password: 'password123', name: 'John Doe' },
        { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
      ];

      const user = mockUsers.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }

      this.token = 'mock-token';
      Cookies.set('authToken', this.token, { expires: 7 });
      this.user = { name: user.name, email: user.email };
    },
    logout() {
      this.token = null;
      this.user = null;
      Cookies.remove('authToken');
      window.location.href = '/login'
    },
  },
});
