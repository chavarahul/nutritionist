import api from "../lib/api";

export interface Nutritionist {
  id: number;
  name: string;
  email: string;
  clients: number;
  specialty: string;
}

 export interface Client {
  id: number;
  name: string;
  email: string;
  nutritionist: string;
  plan: string;
}

export interface AdminProfile {
  id: number;
  email: string;
  name: string;
  role: string;
}

export const getAllNutritionists = async (): Promise<Nutritionist[]> => {
  try {
    const response = await api.get("/nutritionists");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch nutritionists");
  }
};

export const createNutritionist = async (data: Omit<Nutritionist, "id" | "clients">): Promise<Nutritionist> => {
  try {
    const response = await api.post("/nutritionists", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create nutritionist");
  }
};

export const updateNutritionist = async (id: number, data: Omit<Nutritionist, "id" | "clients">): Promise<Nutritionist> => {
  try {
    const response = await api.put(`/nutritionists/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update nutritionist");
  }
};

export const deleteNutritionist = async (id: number): Promise<void> => {
  try {
    await api.delete(`/nutritionists/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete nutritionist");
  }
};

export const getAllClients = async (): Promise<Client[]> => {
  try {
    const response = await api.get("/clients");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch clients");
  }
};

export const createClient = async (data: Omit<Client, "id">): Promise<Client> => {
  try {
    const response = await api.post("/clients", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create client");
  }
};

export const updateClient = async (id: number, data: Omit<Client, "id">): Promise<Client> => {
  try {
    const response = await api.put(`/clients/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update client");
  }
};

export const deleteClient = async (id: number): Promise<void> => {
  try {
    await api.delete(`/clients/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete client");
  }
};

export const getAdminProfile = async (): Promise<AdminProfile> => {
  try {
    const response = await api.get("/admin/profile");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch admin profile");
  }
};