import api from "../lib/api";

interface Client {
  id: number;
  name: string;
  email: string;
  plan: string;
  lastCheckIn: string;
  progress: string;
}

interface Appointment {
  id: number;
  clientName: string;
  date: string;
  time: string;
  type: string;
}

interface NutritionistProfile {
  name: string;
  email: string;
  specialty: string;
  clients: Client[];
  appointments: Appointment[];
}

interface Message {
  clientId: number;
  content: string;
}

export const getNutritionistProfile = async (): Promise<NutritionistProfile> => {
  const response = await api.get("/nutritionist/profile");
  return response.data as NutritionistProfile;
};

export const addClient = async (data: Omit<Client, "id">): Promise<Client> => {
  const response = await api.post("/nutritionist/clients", data);
  return response.data as Client;
};

export const updateClient = async (id: number, data: Omit<Client, "id">): Promise<Client> => {
  const response = await api.put(`/nutritionist/clients/${id}`, data);
  return response.data as Client;
};

export const deleteClient = async (id: number): Promise<void> => {
  await api.delete(`/nutritionist/clients/${id}`);
};

export const createAppointment = async (data: Omit<Appointment, "id">): Promise<Appointment> => {
  const response = await api.post("/nutritionist/appointments", data);
  return response.data as Appointment;
};

export const updateAppointment = async (id: number, data: Omit<Appointment, "id">): Promise<Appointment> => {
  const response = await api.put(`/nutritionist/appointments/${id}`, data);
  return response.data as Appointment;
};

export const deleteAppointment = async (id: number): Promise<void> => {
  await api.delete(`/nutritionist/appointments/${id}`);
};

export const sendMessage = async (data: Message): Promise<void> => {
  await api.post("/nutritionist/messages", data);
};