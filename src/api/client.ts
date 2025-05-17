import api from "../lib/api";

interface Nutritionist {
  name: string;
  email: string;
  specialty: string;
}

interface Appointment {
  date: string;
  time: string;
}

interface Progress {
  week: string;
  weight: number;
}

interface Meal {
  meal: string;
  food: string;
}

interface Plan {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface ClientProfile {
  name: string;
  email: string;
  plan: string;
  startDate: string;
  nutritionist: Nutritionist;
  appointments: Appointment[];
  plans: Plan[];
  progress: Progress[];
  mealPlan: Meal[];
}

export const getClientProfile = async (): Promise<ClientProfile> => {
  const response = await api.get("/client/profile");
  return response.data as ClientProfile;
};