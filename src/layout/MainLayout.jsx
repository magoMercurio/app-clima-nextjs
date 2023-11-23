import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
          {children}
      </div>
    </>
  );
}
