import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from '@/components/DashboardLayout';

interface NutritionistInfo {
  name: string;
  specialization: string;
  experience: string;
  nextSession: string;
  rating: number;
  sessionHistory: {
    date: string;
    type: string;
    duration: string;
    status: 'completed' | 'upcoming' | 'cancelled';
  }[];
}

const ClientNut: FC = () => {
  const nutritionist: NutritionistInfo = {
    name: "Dr. Sarah Smith",
    specialization: "Sports Nutrition",
    experience: "8 years",
    nextSession: "2024-02-01 10:00 AM",
    rating: 4.8,
    sessionHistory: [
      {
        date: "2024-01-20",
        type: "Progress Review",
        duration: "45 minutes",
        status: "completed"
      },
      {
        date: "2024-01-15",
        type: "Diet Planning",
        duration: "60 minutes",
        status: "completed"
      },
      {
        date: "2024-02-01",
        type: "Monthly Check-in",
        duration: "30 minutes",
        status: "upcoming"
      }
    ]
  };

  return (
    <DashboardLayout title="My Nutritionist" userRole="client">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Nutritionist</h1>
          <Button className="bg-primary-500">Book New Session</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Nutritionist Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <span className="text-4xl text-gray-500">SS</span>
                  </div>
                  <h2 className="text-xl font-bold">{nutritionist.name}</h2>
                  <p className="text-gray-500">{nutritionist.specialization}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(nutritionist.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">{nutritionist.rating}/5.0</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm"><strong>Experience:</strong> {nutritionist.experience}</p>
                  <Button variant="outline" className="w-full">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Next Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-lg font-semibold">{nutritionist.nextSession}</p>
                  <p className="text-gray-600">Monthly Check-in Session</p>
                  <div className="mt-4 space-x-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button variant="outline" size="sm" className="text-red-500">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nutritionist.sessionHistory.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{session.type}</p>
                        <p className="text-sm text-gray-500">{session.date} • {session.duration}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        session.status === 'completed' ? 'bg-green-100 text-green-800' :
                        session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {session.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientNut;
