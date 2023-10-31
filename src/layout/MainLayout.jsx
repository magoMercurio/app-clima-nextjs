import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </>
  );
}
