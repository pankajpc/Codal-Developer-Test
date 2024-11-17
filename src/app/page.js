"use client";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileDrawer from "./components/MobileDrawer";
import MobileFilterButton from "./components/MobileFilterButton";
import MainContent from "./components/MainContent";

export default function Home() {
  const [filters, setFilters] = useState({
    brand: [],
    viscosity: [],
    size: [],
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  // Function to close the drawer
  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  // Calculate the total number of filters
  const filterCount = 
    (filters?.brand?.length || 0) + 
    (filters?.viscosity?.length || 0) + 
    (filters?.size?.length || 0);

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <MobileFilterButton
          isOpen={isDrawerOpen}
          filterCount={filterCount}
          onClick={toggleDrawer}
        />
        <MobileDrawer
          isOpen={isDrawerOpen}
          filters={filters}
          onFilterChange={setFilters}
          onClose={closeDrawer}
        />
        <MainContent filters={filters} onFilterChange={setFilters} />
      </main>
      <Footer />
    </div>
  );
}
