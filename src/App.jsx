import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
    const tags = ["태그 1", "태그 2", "태그 3", "태그 4", "태그 5"];

    return (
        <div className="flex flex-col min-h-screen">
            {/* 헤더 */}
            <Header />

            {/* 메인 */}
            <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 text-center">
                <h1 className="text-4xl font-bold">STUDYLOG</h1>

                {/* 검색창 */}
                <SearchBar />

                {/* 태그 버튼 */}
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => alert(`'${tag}' 클릭 기능은 추후 구현 예정입니다.`)}
                            className="bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300"
                        >
                            {tag} ✕
                        </button>
                    ))}
                </div>
            </main>

            {/* 푸터 */}
            <Footer />
        </div>
    );
}

export default App;
