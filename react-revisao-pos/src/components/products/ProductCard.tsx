// components/products/ProductCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Product } from '@/types/dummyjson';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{product.title}</CardTitle>
            <CardDescription>{product.brand}</CardDescription>
          </div>
          <Badge variant="secondary">${product.price}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <Badge variant="outline">{product.category}</Badge>
          <div className="flex items-center gap-2">
            <span className="text-sm text-yellow-600">⭐ {product.rating}</span>
            <span className="text-sm text-gray-500">Stock: {product.stock}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}