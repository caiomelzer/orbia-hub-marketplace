import { Product } from '@/types/product';

const API_URL = 'http://localhost:3000'; // Replace with your BFF URL

export const getHighlightedProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products/highlights`);
    if (!response.ok) {
      throw new Error('Failed to fetch highlighted products');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching highlighted products:', error);
    return [];
  }
};