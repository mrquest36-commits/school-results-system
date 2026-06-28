import {
  LayoutDashboard,
  Users,
  School,
  BookOpen,
  ClipboardList,
  FileText,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    href: "/students",
    icon: Users,
  },
  {
    name: "Classes",
    href: "/classes",
    icon: School,
  },
  {
    name: "Subjects",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    name: "Results",
    href: "/results",
    icon: ClipboardList,
  },
  {
    name: "Report Cards",
    href: "/report-cards",
    icon: FileText,
  },
];