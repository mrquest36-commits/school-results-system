import AppLayout from "@/components/layout/AppLayout";
import Card from "@/components/ui/Caed";

export default function HomePage() {
  return (
    <AppLayout>
      <Card title="Welcome">
        <p className="text-slate-600">
          Congratulations! Your reusable Card component is working.
        </p>
      </Card>
    </AppLayout>
  );
}