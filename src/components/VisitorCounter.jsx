import React, { useEffect, useState } from "react";
import { fetchDataFromBackend } from "../api";

const VisitorCounter = () => {
  const [todayVisitor, setTodayVisitor] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  useEffect(() => {
    // fetch("http://localhost:8080/update-visitor-count", {
    fetchDataFromBackend("/update-visitor-count", {
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
    <table style={{ fontSize: "2vmin" }}>
      <tbody>
        <tr>
          <td>Today</td>
          <td>: {todayVisitor}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>: {totalVisitor}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VisitorCounter;
