import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from '@/components/DashboardLayout';

interface NutritionistProfile {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  qualifications: string[];
  bio: string;
  availability: {
    day: string;
    slots: string[];
  }[];
}

const NutProfile: FC = () => {
  const profile: NutritionistProfile = {
    name: "Dr. Sarah Smith",
    email: "sarah.smith@example.com",
    specialization: "Sports Nutrition",
    experience: "8 years",
    qualifications: [
      "Ph.D. in Nutrition Science",
      "Certified Sports Nutritionist",
      "Clinical Dietitian License"
    ],
    bio: "Experienced nutritionist specializing in sports nutrition and performance enhancement. Passionate about helping athletes achieve their peak performance through optimal nutrition strategies.",
    availability: [
      { day: "Monday", slots: ["09:00 AM - 12:00 PM", "02:00 PM - 05:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM - 02:00 PM", "03:00 PM - 06:00 PM"] },
      { day: "Friday", slots: ["09:00 AM - 01:00 PM"] }
    ]
  };

  return (
    <DashboardLayout title="My Profile" userRole="nutritionist">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <Button className="bg-primary-500">Save Changes</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-4xl text-gray-500">SS</span>
                </div>
                <Button variant="outline" size="sm">Change Photo</Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-medium">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={profile.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={profile.email}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Specialization</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    defaultValue={profile.specialization}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Professional Bio</label>
                  <textarea 
                    className="w-full p-2 border rounded-md h-32"
                    defaultValue={profile.bio}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span>{qual}</span>
                    <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">Add Qualification</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.availability.map((schedule, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">{schedule.day}</h3>
                    <div className="flex flex-wrap gap-2">
                      {schedule.slots.map((slot, slotIndex) => (
                        <span 
                          key={slotIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">Manage Schedule</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NutProfile;
