import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 text-sm text-gray-700">
      <div className="font-semibold">StudyLog 로고</div>
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">게시판</a>
        <a href="#" className="hover:underline">로그인/회원가입</a>
        <a href="#" className="hover:underline">마이페이지</a>
      </nav>
    </header>
  );
}

export default Header;
