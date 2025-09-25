import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { User } from '@/types/dummyjson';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <CardTitle>{user.firstName} {user.lastName}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Idade:</span> {user.age}
          </div>
          <div>
            <span className="font-medium">Gênero:</span> 
            <Badge variant="outline" className="ml-2">{user.gender}</Badge>
          </div>
          <div>
            <span className="font-medium">Telefone:</span> {user.phone}
          </div>
          <div>
            <span className="font-medium">Username:</span> {user.username}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Endereço:</span> {user.address.address}, {user.address.city}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}