"use client";
import { useState } from 'react';
import { ProductList } from '@/src/components/products/ProductList';
import { UserList } from '@/src/components/users/UserList';
import { Button } from '@/src/components/ui/button';

type ViewMode = 'products' | 'users';

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>('products');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Gerenciamento
          </h1>
          <p className="text-lg text-gray-600">
            Dados consumidos da API DummyJSON
          </p>
        </header>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <Button
              variant={viewMode === 'products' ? 'default' : 'outline'}
              onClick={() => setViewMode('products')}
            >
              Produtos
            </Button>
            <Button
              variant={viewMode === 'users' ? 'default' : 'outline'}
              onClick={() => setViewMode('users')}
            >
              Usuários
            </Button>
          </div>
        </div>

        <main>
          {viewMode === 'products' ? <ProductList /> : <UserList />}
        </main>
      </div>
    </div>
  );
}