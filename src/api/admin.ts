import api from "../lib/api";

// Analytics interfaces
export interface AnalyticsData {
  clientGrowth: ClientGrowthData[];
  ratioTrends: RatioTrendData[];
  userEngagement: UserEngagementData[];
}

export interface ClientGrowthData {
  month: string;
  clients: number;
}

export interface RatioTrendData {
  month: string;
  ratio: number;
}

export interface UserEngagementData {
  metric: string;
  value: number;
}

// Quick Actions interfaces
export interface QuickAction {
  id: string;
  type: 'approval' | 'review' | 'support' | 'notification';
  title: string;
  description: string;
  count: number;
  status: 'pending' | 'urgent' | 'normal';
  createdAt: string;
}

// Recent Activity interfaces
export interface RecentActivity {
  id: string;
  type: 'registration' | 'plan_change' | 'update' | 'alert';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    id: number;
    name: string;
    role: 'client' | 'nutritionist';
  };
}

export interface SystemMetrics {
  activeUsers: number;
  inactiveUsers: number;
  planDistribution: PlanDistribution[];
  retentionRate: number;
  avgResponseTime: number;
  systemHealth: number;
  errorRate: number;
}

export interface PlanDistribution {
  plan: string;
  count: number;
}

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

// Analytics API functions
export const getAnalyticsData = async (): Promise<AnalyticsData> => {
  try {
    const response = await api.get("/admin/analytics");
    return response.data;
  } catch (error) {
    // Since this is a mock, we'll return sample data
    return {
      clientGrowth: [
        { month: "Jan", clients: 30 },
        { month: "Feb", clients: 42 },
        { month: "Mar", clients: 55 },
        { month: "Apr", clients: 68 },
        { month: "May", clients: 82 },
        { month: "Jun", clients: 105 },
      ],
      ratioTrends: [
        { month: "Jan", ratio: 5.2 },
        { month: "Feb", ratio: 5.8 },
        { month: "Mar", ratio: 6.1 },
        { month: "Apr", ratio: 5.9 },
        { month: "May", ratio: 6.3 },
        { month: "Jun", ratio: 7.0 },
      ],
      userEngagement: [
        { metric: "Daily Active", value: 76 },
        { metric: "Weekly Active", value: 128 },
        { metric: "Monthly Active", value: 215 },
        { metric: "Avg. Session", value: 12 },
      ]
    };
  }
};

export const getQuickActions = async (): Promise<QuickAction[]> => {
  try {
    const response = await api.get("/admin/actions");
    return response.data;
  } catch (error) {
    // Since this is a mock, we'll return sample data
    return [
      {
        id: "action1",
        type: "approval",
        title: "Nutritionist Applications",
        description: "3 nutritionists pending approval",
        count: 3,
        status: "pending",
        createdAt: new Date().toISOString(),
      },
      {
        id: "action2",
        type: "review",
        title: "Client Reports",
        description: "8 reports need review",
        count: 8,
        status: "normal",
        createdAt: new Date().toISOString(),
      },
      {
        id: "action3",
        type: "support",
        title: "Support Tickets",
        description: "2 urgent tickets pending",
        count: 2,
        status: "urgent",
        createdAt: new Date().toISOString(),
      },
      {
        id: "action4",
        type: "notification",
        title: "System Notifications",
        description: "5 new notifications",
        count: 5,
        status: "normal",
        createdAt: new Date().toISOString(),
      }
    ];
  }
};

export const getRecentActivities = async (): Promise<RecentActivity[]> => {
  try {
    const response = await api.get("/admin/activities");
    return response.data;
  } catch (error) {
    // Since this is a mock, we'll return sample data
    return [
      {
        id: "act1",
        type: "registration",
        title: "New User Registration",
        description: "Sarah Johnson registered as a client",
        timestamp: new Date().toISOString(),
        user: {
          id: 101,
          name: "Sarah Johnson",
          role: "client"
        }
      },
      {
        id: "act2",
        type: "plan_change",
        title: "Plan Upgrade",
        description: "Michael Smith upgraded to Premium plan",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        user: {
          id: 102,
          name: "Michael Smith",
          role: "client"
        }
      },
      {
        id: "act3",
        type: "update",
        title: "System Update",
        description: "Meal planning feature was updated",
        timestamp: new Date(Date.now() - 7200000).toISOString()
      },
      {
        id: "act4",
        type: "alert",
        title: "System Alert",
        description: "Database backup completed successfully",
        timestamp: new Date(Date.now() - 10800000).toISOString()
      },
      {
        id: "act5",
        type: "registration",
        title: "New Nutritionist",
        description: "Dr. Emily Parker registered as a nutritionist",
        timestamp: new Date(Date.now() - 14400000).toISOString(),
        user: {
          id: 103,
          name: "Dr. Emily Parker",
          role: "nutritionist"
        }
      }
    ];
  }
};

export const getSystemMetrics = async (): Promise<SystemMetrics> => {
  try {
    const response = await api.get("/admin/metrics");
    return response.data;
  } catch (error) {
    // Since this is a mock, we'll return sample data
    return {
      activeUsers: 185,
      inactiveUsers: 42,
      planDistribution: [
        { plan: "Free", count: 95 },
        { plan: "Basic", count: 75 },
        { plan: "Premium", count: 57 }
      ],
      retentionRate: 78.5,
      avgResponseTime: 1.8,
      systemHealth: 96.7,
      errorRate: 0.3
    };
  }
};
