import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const todayResponse = await fetch(
          "http://localhost:8080/api/visitors/today"
        );
        const todayData = await todayResponse.json();
        setTodayVisitors(todayData ? todayData.count : 0);

        const totalResponse = await fetch("http://localhost:8080/api/visitors");
        const totalData = await totalResponse.json();
        const total = totalData.reduce(
          (acc, visitor) => acc + visitor.count,
          0
        );
        setTotalVisitors(total);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };

    fetchVisitors();

    const recordVisit = async () => {
      if (!localStorage.getItem("visited")) {
        try {
          const response = await fetch("http://localhost:8080/api/visitors", {
            method: "POST",
          });
          if (response.ok) {
            localStorage.setItem("visited", "true");
            fetchVisitors();
          }
        } catch (error) {
          console.error("Error recording visit:", error);
        }
      }
    };

    recordVisit();
  }, []);

  return (
    <div>
      <div>Today's Visitors: {todayVisitors}</div>
      <div>Total Visitors: {totalVisitors}</div>
    </div>
  );
};

export default VisitorCounter;
