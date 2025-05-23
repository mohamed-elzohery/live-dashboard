import EmptyResults from "@/components/ui/empty-results/EmptyResults";
import React from "react";

const HomePage = () => {
  const boards = [];
  return (
    <section className="bg-white p-4 h-full">
      {boards.length === 0 && <EmptyResults />}
    </section>
  );
};

export default HomePage;
