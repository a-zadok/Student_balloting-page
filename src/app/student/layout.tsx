
import StudentHeader from "@/components/student/StudentHeader";
import StudentSidebar from "@/components/student/StudentSidebar";

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f7f9fc] lg:flex">
      <StudentSidebar />
      <div className="min-w-0 flex-1">
        <StudentHeader />
        <main className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-7 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}