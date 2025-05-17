import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Nutritionist, Client } from "../../api/admin";

interface FormData {
  name: string;
  email: string;
  specialty: string;
  nutritionist: string;
  plan: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  specialty?: string;
  nutritionist?: string;
  plan?: string;
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: Nutritionist | Client | null;
  onSave: (formData: Omit<Nutritionist, "id" | "clients"> | Omit<Client, "id">) => Promise<void>;
  userType: "nutritionist" | "client";
  nutritionists: Nutritionist[];
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user, onSave, userType, nutritionists }) => {
  const isNutritionist = userType === "nutritionist";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    specialty: "",
    nutritionist: "",
    plan: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        specialty: (user as Nutritionist).specialty || "",
        nutritionist: (user as Client).nutritionist || "",
        plan: (user as Client).plan || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        specialty: "",
        nutritionist: "",
        plan: "",
      });
    }
  }, [user]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (isNutritionist && !formData.specialty) newErrors.specialty = "Specialty is required";
    if (!isNutritionist && !formData.nutritionist) newErrors.nutritionist = "Nutritionist is required";
    if (!isNutritionist && !formData.plan) newErrors.plan = "Plan is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
    }

    try {
      const payload = isNutritionist
        ? { name: formData.name, email: formData.email, specialty: formData.specialty }
        : { name: formData.name, email: formData.email, nutritionist: formData.nutritionist, plan: formData.plan };
      await onSave(payload);
      toast.success(`${isNutritionist ? "Nutritionist" : "Client"} ${user ? "updated" : "created"} successfully`);
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{user ? "Edit" : "Add"} {isNutritionist ? "Nutritionist" : "Client"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter name"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Enter email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          {isNutritionist ? (
            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                id="specialty"
                value={formData.specialty}
                onChange={(e) => handleChange("specialty", e.target.value)}
                placeholder="Enter specialty"
              />
              {errors.specialty && <p className="text-sm text-red-500">{errors.specialty}</p>}
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="nutritionist">Nutritionist</Label>
                <Select
                  value={formData.nutritionist}
                  onValueChange={(value) => handleChange("nutritionist", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select nutritionist" />
                  </SelectTrigger>
                  <SelectContent>
                    {nutritionists.map((nut) => (
                      <SelectItem key={nut.id} value={nut.name}>
                        {nut.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.nutritionist && <p className="text-sm text-red-500">{errors.nutritionist}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Plan</Label>
                <Input
                  id="plan"
                  value={formData.plan}
                  onChange={(e) => handleChange("plan", e.target.value)}
                  placeholder="Enter plan"
                />
                {errors.plan && <p className="text-sm text-red-500">{errors.plan}</p>}
              </div>
            </>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary-500 hover:bg-primary-600">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;