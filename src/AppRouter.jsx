import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// Lazy loading of components
const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));
const HistoryScreen = React.lazy(() => import("./screens/HistoryScreen"));

const AppRouter = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomeScreen />} />
                <Route path={ROUTES.HISTORY} element={<HistoryScreen />} />
                <Route path="*" element={<Navigate to={ROUTES.HOME} replace={true} />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;