import { ProductsResponse, UsersResponse } from '@/types/dummyjson';

const BASE_URL = 'https://dummyjson.com';

export const api = {
  async getProducts(limit: number = 10, skip: number = 0): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    return response.json();
  },

  async getProduct(id: number) {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar produto');
    return response.json();
  },

  async getUsers(limit: number = 10, skip: number = 0): Promise<UsersResponse> {
    const response = await fetch(`${BASE_URL}/users?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Erro ao buscar usuários');
    return response.json();
  },

  async getUser(id: number) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Erro ao buscar usuário');
    return response.json();
  },
};