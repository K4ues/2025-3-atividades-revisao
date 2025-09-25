import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Product } from '@/types/dummyjson';
import { api } from '@/services/api';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const limit = 9;

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts(limit, skip);
      setProducts(prev => skip === 0 ? data.products : [...prev, ...data.products]);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [skip]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => setSkip(prev => prev + limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <Input
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}

      {!loading && (
        <div className="flex justify-center">
          <Button onClick={loadMore} variant="outline">
            Carregar Mais
          </Button>
        </div>
      )}
    </div>
  );
}