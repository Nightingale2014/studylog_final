import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const tags = ["태그 1", "태그 2", "태그 3", "태그 4", "태그 5"];

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-4xl font-bold">STUDYLOG</h1>
        <SearchBar />
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-4 py-1 rounded-full flex items-center gap-2">
              {tag} <span className="cursor-pointer text-red-500">×</span>
            </span>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
