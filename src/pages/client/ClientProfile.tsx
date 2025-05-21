import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from '@/components/DashboardLayout';

interface ProgressMetric {
  date: string;
  weight: number;
  bodyFat: number;
  calories: number;
  water: number;
}

interface Goal {
  type: string;
  target: string;
  progress: number;
  deadline: string;
}

const ClientProfile: FC = () => {
  const personalInfo = {
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "+91 9342363097",
    address: "123 Wellness St, Healthy City, HC 12345",
    age: 28,
    height: "5'10\"",
    weight: "75kg",
    diet: "Vegetarian",
    allergies: ["Nuts", "Shellfish"],
    goals: [
      {
        type: "Weight Loss",
        target: "Lose 5kg",
        progress: 60,
        deadline: "2024-03-01"
      },
      {
        type: "Muscle Gain",
        target: "Increase lean mass",
        progress: 40,
        deadline: "2024-04-01"
      }
    ],
    metrics: [
      {
        date: "2024-01-20",
        weight: 75,
        bodyFat: 18,
        calories: 2200,
        water: 2.5
      },
      {
        date: "2024-01-13",
        weight: 76,
        bodyFat: 19,
        calories: 2100,
        water: 2.3
      }
    ]
  };

  return (
    <DashboardLayout title="My Profile" userRole="client">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <Button className="bg-primary-500">Save Changes</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Info */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <span className="text-4xl text-gray-500">JD</span>
                  </div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.name}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.email}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.phoneNumber}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Address</label>
                    <textarea 
                      className="w-full p-2 border rounded-md resize-y"
                      rows={3}
                      defaultValue={personalInfo.address}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Health Info + Goals + Metrics */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-medium">Age</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.age}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Height</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.height}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Weight</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={personalInfo.weight}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Diet Type</label>
                    <select className="w-full p-2 border rounded-md" defaultValue={personalInfo.diet}>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Non-vegetarian</option>
                      <option>Pescatarian</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Goals & Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalInfo.goals.map((goal, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{goal.type}</h3>
                          <p className="text-sm text-gray-500">{goal.target} • Due {goal.deadline}</p>
                        </div>
                        <Button variant="ghost" size="sm">Update</Button>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary-500 h-2.5 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{goal.progress}% completed</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">Add New Goal</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalInfo.metrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{metric.date}</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Weight</p>
                          <p className="font-medium">{metric.weight} kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Body Fat</p>
                          <p className="font-medium">{metric.bodyFat}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Calories</p>
                          <p className="font-medium">{metric.calories} kcal</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Water</p>
                          <p className="font-medium">{metric.water}L</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">Add New Measurement</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientProfile;