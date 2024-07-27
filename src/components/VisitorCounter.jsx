// src/components/VisitorCounter.js

import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/update-visitor-count", {
      method: "POST",
      credentials: "include", // 세션 쿠키를 포함한 요청
    })
      .then((response) => response.json())
      .then((data) => {
        setTodayVisitor(data.todayVisitor);
        setTotalVisitor(data.totalVisitor);
      })
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <div>
      <p>오늘의 방문자: {todayVisitor}</p>
      <p>전체 방문자: {totalVisitor}</p>
    </div>
  );
};

export default VisitorCounter;
