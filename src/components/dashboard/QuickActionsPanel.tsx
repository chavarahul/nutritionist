import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuickAction } from "@/api/admin";
import { 
  BellRing, 
  CheckSquare, 
  FileSearch, 
  FileText, 
  Loader2, 
  MessageSquare,
  User,
  AlertTriangle
} from "lucide-react";

interface QuickActionsPanelProps {
  actions: QuickAction[];
  loading: boolean;
  onActionClick: (action: QuickAction) => void;
}

const QuickActionsPanel: React.FC<QuickActionsPanelProps> = ({
  actions,
  loading,
  onActionClick,
}) => {
  const getActionIcon = (type: string) =>

