import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from '@/components/DashboardLayout';

interface Client {
  id: string;
  name: string;
  email: string;
  goal: string;
  progress: number;
  nextSession: string;
  status: 'active' | 'pending' | 'completed';
}

const NutClients: FC = () => {
  const clients: Client[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      goal: 'Weight Loss',
      progress: 65,
      nextSession: '2024-02-01',
      status: 'active'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      goal: 'Muscle Gain',
      progress: 40,
      nextSession: '2024-02-03',
      status: 'active'
    }
  ];

  return (
    <DashboardLayout title="My Clients" userRole="nutritionist">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Client Management</h1>
          <div className="space-x-4">
            <Button variant="outline">Send Bulk Message</Button>
            <Button className="bg-primary-500">Add New Client</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{clients.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {clients.filter(c => c.status === 'active').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {clients.filter(c => new Date(c.nextSession) > new Date()).length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Client List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Goal</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Next Session</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.goal}</TableCell>
                    <TableCell>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary-500 h-2.5 rounded-full"
                          style={{ width: `${client.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{client.progress}%</span>
                    </TableCell>
                    <TableCell>{client.nextSession}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        client.status === 'active' ? 'bg-green-100 text-green-800' :
                        client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {client.status}
                      </span>
                    </TableCell>
                    <TableCell className="space-x-2">
                      <Button variant="ghost" size="sm">View Details</Button>
                      <Button variant="ghost" size="sm">Schedule</Button>
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

export default NutClients;
