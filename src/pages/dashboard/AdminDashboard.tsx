
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for the demo
const MOCK_DATA = {
  nutritionists: [
    { id: 1, name: "Dr. Emma Smith", email: "emma@example.com", clients: 8, specialty: "Sports Nutrition" },
    { id: 2, name: "Dr. John Davis", email: "john@example.com", clients: 12, specialty: "Weight Management" },
    { id: 3, name: "Dr. Sarah Johnson", email: "sarah@example.com", clients: 5, specialty: "Pediatric Nutrition" },
  ],
  clients: [
    { id: 1, name: "Michael Brown", email: "michael@example.com", nutritionist: "Dr. Emma Smith", plan: "Weight Loss" },
    { id: 2, name: "Jennifer Wilson", email: "jennifer@example.com", nutritionist: "Dr. John Davis", plan: "Muscle Gain" },
    { id: 3, name: "Robert Garcia", email: "robert@example.com", nutritionist: "Dr. Sarah Johnson", plan: "Diabetes Management" },
    { id: 4, name: "Lisa Martinez", email: "lisa@example.com", nutritionist: "Dr. Emma Smith", plan: "General Health" },
    { id: 5, name: "David Thompson", email: "david@example.com", nutritionist: "Dr. John Davis", plan: "Sports Performance" }
  ]
};

const AdminDashboard = () => {
  const [nutritionists, setNutritionists] = useState(MOCK_DATA.nutritionists);
  const [clients, setClients] = useState(MOCK_DATA.clients);
  const navigate = useNavigate();


  return (
    <DashboardLayout title="Admin Dashboard" userRole="admin">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Nutritionists</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{nutritionists.length}</div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-primary-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">{clients.length}</div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Clients per Nutritionist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">
                  {(clients.length / nutritionists.length).toFixed(1)}
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-primary-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Nutritionists Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Nutritionists</CardTitle>
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                Add Nutritionist
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Name</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Email</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Specialty</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Clients</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {nutritionists.map((nutritionist) => (
                    <tr key={nutritionist.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2">{nutritionist.name}</td>
                      <td className="py-3 px-2">{nutritionist.email}</td>
                      <td className="py-3 px-2">{nutritionist.specialty}</td>
                      <td className="py-3 px-2">{nutritionist.clients}</td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Clients Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Clients</CardTitle>
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                Add Client
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Name</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Email</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Nutritionist</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Plan</th>
                    <th className="py-3 px-2 text-left font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2">{client.name}</td>
                      <td className="py-3 px-2">{client.email}</td>
                      <td className="py-3 px-2">{client.nutritionist}</td>
                      <td className="py-3 px-2">{client.plan}</td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
