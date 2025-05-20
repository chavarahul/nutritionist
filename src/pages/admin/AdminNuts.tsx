import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from '@/components/DashboardLayout';

interface Nutritionist {
  id: string;
  name: string;
  email: string;
  specialization: string;
  clientCount: number;
  status: 'active' | 'inactive';
  joinDate: string;
}

const AdminNutritionists: FC = () => {
  const dummyNutritionists: Nutritionist[] = [
    {
      id: '1',
      name: 'Dr. Smith',
      email: 'smith@example.com',
      specialization: 'Sports Nutrition',
      clientCount: 15,
      status: 'active',
      joinDate: '2024-01-01',
    },
    {
      id: '2',
      name: 'Dr. Johnson',
      email: 'johnson@example.com',
      specialization: 'Weight Management',
      clientCount: 12,
      status: 'active',
      joinDate: '2024-01-15',
    },
  ];

  const activeCount = dummyNutritionists.filter(n => n.status === 'active').length;
  const totalClients = dummyNutritionists.reduce((sum, n) => sum + n.clientCount, 0);

  return (
    <DashboardLayout title="Nutritionist Management" userRole="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Nutritionist Management</h1>
          <Button className="bg-primary-500">Add New Nutritionist</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Nutritionists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{dummyNutritionists.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Nutritionists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{activeCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalClients}</p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Nutritionist List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Clients</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyNutritionists.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell>{n.name}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>{n.specialization}</TableCell>
                    <TableCell>{n.clientCount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          n.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {n.status}
                      </span>
                    </TableCell>
                    <TableCell>{n.joinDate}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminNutritionists;
