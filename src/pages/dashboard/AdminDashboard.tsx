import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, UserPlus, User, Trash2 } from "lucide-react";
import {
  getAllNutritionists,
  getAllClients,
  getAdminProfile,
  createNutritionist,
  updateNutritionist,
  deleteNutritionist,
  createClient,
  updateClient,
  deleteClient,
  Nutritionist,
  Client,
  AdminProfile,
} from "../../api/admin";
import UserModal from "./UserModal";

interface DashboardLayoutProps {
  title: string;
  userRole: string;
  children: React.ReactNode;
}

const AdminDashboard: React.FC = () => {
  const [nutritionists, setNutritionists] = useState<Nutritionist[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalUser, setModalUser] = useState<Nutritionist | Client | null>(null);
  const [modalType, setModalType] = useState<"nutritionist" | "client" | "">("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const [nutritionistsData, clientsData, profileData] = await Promise.all([
        //   // getAllNutritionists(),
        //   // getAllClients(),
        //   // getAdminProfile(),
        // ]);
        // setNutritionists(nutritionistsData);
        // setClients(clientsData);
        // setAdminProfile(profileData);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (type: "nutritionist" | "client") => {
    setModalType(type);
    setModalUser(null);
    setModalOpen(true);
  };

  const handleEdit = (user: Nutritionist | Client, type: "nutritionist" | "client" | "") => {
    setModalType(type);
    setModalUser(user);
    setModalOpen(true);
  };

  const handleDelete = async (id: number, type: "nutritionist" | "client") => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      if (type === "nutritionist") {
        await deleteNutritionist(id);
        setNutritionists(nutritionists.filter((n) => n.id !== id));
      } else {
        await deleteClient(id);
        setClients(clients.filter((c) => c.id !== id));
      }
      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete";
      toast.error(errorMessage);
    }
  };

  const handleSave = async (formData: Omit<Nutritionist, "id" | "clients"> | Omit<Client, "id">) => {
    if (!modalType) return;

    try {
      if (modalType === "nutritionist") {
        if (modalUser && (modalUser as Nutritionist).id) {
          const updated = await updateNutritionist(
            (modalUser as Nutritionist).id,
            formData as Omit<Nutritionist, "id" | "clients">
          );
          setNutritionists(nutritionists.map((n) => (n.id === (modalUser as Nutritionist).id ? updated : n)));
        } else {
          const created = await createNutritionist(formData as Omit<Nutritionist, "id" | "clients">);
          setNutritionists([...nutritionists, created]);
        }
      } else if (modalType === "client") {
        if (modalUser && (modalUser as Client).id) {
          const updated = await updateClient(
            (modalUser as Client).id,
            formData as Omit<Client, "id">
          );
          setClients(clients.map((c) => (c.id === (modalUser as Client).id ? updated : c)));
        } else {
          const created = await createClient(formData as Omit<Client, "id">);
          setClients([...clients, created]);
        }
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to save";
      toast.error(errorMessage);
      throw err;
    }
  };

  const handleView = (id: number, type: "nutritionist" | "client") => {
    navigate(`/dashboard/admin/${type}/${id}`);
  };

  if (loading) {
    return (
      <DashboardLayout title="Admin Dashboard" userRole="admin">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading...</div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Admin Dashboard" userRole="admin">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Admin Dashboard" userRole="admin">
      <div className="space-y-6">
        {adminProfile && (
          <Card>
            <CardHeader>
              <CardTitle>Admin Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-medium">{adminProfile.name}</p>
                  <p className="text-sm text-gray-500">{adminProfile.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
                {nutritionists.length > 0 ? (clients.length / nutritionists.length).toFixed(1) : "0.0"}
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-primary-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Nutritionists</CardTitle>
            <Button
              size="sm"
              className="bg-primary-500 hover:bg-primary-600"
              onClick={() => handleAdd("nutritionist")}
            >
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
                {nutritionists.length > 0 ? (
                  nutritionists.map((nutritionist) => (
                    <tr key={nutritionist.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2">{nutritionist.name}</td>
                      <td className="py-3 px-2">{nutritionist.email}</td>
                      <td className="py-3 px-2">{nutritionist.specialty}</td>
                      <td className="py-3 px-2">{nutritionist.clients}</td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleView(nutritionist.id, "nutritionist")}
                          >
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(nutritionist, "nutritionist")}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(nutritionist.id, "nutritionist")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-3 px-2 text-center text-gray-500">
                      No nutritionists found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Clients</CardTitle>
            <Button
              size="sm"
              className="bg-primary-500 hover:bg-primary-600"
              onClick={() => handleAdd("client")}
            >
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
                {clients.length > 0 ? (
                  clients.map((client) => (
                    <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2">{client.name}</td>
                      <td className="py-3 px-2">{client.email}</td>
                      <td className="py-3 px-2">{client.nutritionist}</td>
                      <td className="py-3 px-2">{client.plan}</td>
                      <td className="py-3 px-2">
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleView(client.id, "client")}
                          >
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(client, "client")}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(client.id, "client")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-3 px-2 text-center text-gray-500">
                      No clients found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {modalType !== "" && (
        <UserModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setModalType("");
            setModalUser(null);
          }}
          user={modalUser}
          onSave={handleSave}
          userType={modalType}
          nutritionists={nutritionists}
        />
      )}
    </div>
    </DashboardLayout >
  );
};

export default AdminDashboard;