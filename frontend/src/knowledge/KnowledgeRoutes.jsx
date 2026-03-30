import React from "react";
import { Routes, Route } from "react-router-dom";
import { learningPathRoutes } from "./LearningPaths";
import { wisdomRoutes } from "./ExploreSacredWisdom";
import { commitmentRoutes } from "./SacredCommitments";
import { tigerEyeRoutes } from "./TigerEyeSection";
import { trendingRoutes } from "./TrendingTeachings";
import { dailyPracticeRoutes } from "./DailyPractices";

const allRoutes = [
  ...learningPathRoutes,
  ...wisdomRoutes,
  ...commitmentRoutes,
  ...tigerEyeRoutes,
  ...trendingRoutes,
  ...dailyPracticeRoutes,
];

function KnowledgeRoutes() {
  return (
    <Routes>
      {allRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
}

export default KnowledgeRoutes;
