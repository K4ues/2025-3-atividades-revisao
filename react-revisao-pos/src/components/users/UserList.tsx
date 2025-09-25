import { useState, useEffect } from 'react';
import { UserCard } from './UserCard';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { User } from '@/types/dummyjson';
import { api } from '@/services/api';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);
  const limit = 6;

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getUsers(limit, skip);
      setUsers(prev => skip === 0 ? data.users : [...prev, ...data.users]);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [skip]);

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const loadMore = () => setSkip(prev => prev + limit);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Usuários</h2>
        <Input
          placeholder="Buscar usuários..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
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