import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import routesGames from "./style/listGame/routesGames";

const CareersLazy = React.lazy(() => import("../page/Careers"));
const OurOfficeLazy = React.lazy(
  () => import("../page/Careers/page/OurOffice/OurOffice")
);
const WhyYouMightLoveItHereLazy = React.lazy(
  () => import("../page/Careers/page/WhyYouMightLoveItHere")
);
const JoiningSupercellLazy = React.lazy(
  () => import("../page/Careers/page/JoiningSupercell")
);
const GamesLazy = React.lazy(() => import("../page/Games"));
const HomeLazy = React.lazy(() => import("../page/Home"));

const LivingInHelsinkiLazy = React.lazy(
  () => import("../page/Careers/page/LivingInHelsinki")
);
const LivingInShanghaiLazy = React.lazy(
  () => import("../page/Careers/page/LivingInShanghai")
);
const SupportLazy = React.lazy(() => import("../page/Support"));
const SafeFairPlay = React.lazy(() => import("../page/SafeFairPlay"));

type TProps = {};

const routes = [
  {
    id: v4(),
    path: "/",
    element: (
      <Suspense>
        <HomeLazy />
      </Suspense>
    ),
  },

  {
    id: v4(),
    path: "/games",
    element: (
      <Suspense>
        <GamesLazy />
      </Suspense>
    ),
  },
  ...routesGames,

  {
    id: v4(),
    path: "/careers",
    element: (
      <Suspense>
        <CareersLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/join",
    element: (
      <Suspense>
        <CareersLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/why-you-might-love-it-here",
    element: (
      <Suspense>
        <WhyYouMightLoveItHereLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/our-offices",
    element: (
      <Suspense>
        <OurOfficeLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/joining-supercell",
    element: (
      <Suspense>
        <JoiningSupercellLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/living-in-helsinki",
    element: (
      <Suspense>
        <LivingInHelsinkiLazy />
      </Suspense>
    ),
  },
  {
    id: v4(),
    path: "/careers/living-in-shanghai",
    element: (
      <Suspense>
        <LivingInShanghaiLazy />
      </Suspense>
    ),
  },

  {
    id: v4(),
    path: "/support",
    element: (
      <Suspense>
        <SupportLazy />
      </Suspense>
    ),
  },

  {
    id: v4(),
    path: "/safe-fair-play",
    element: (
      <Suspense>
        <SafeFairPlay />
      </Suspense>
    ),
  },
];

const RenderRoutes = (props: TProps) => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route path={r.path} key={r.id} element={r.element} />
      ))}
    </Routes>
  );
};

export default RenderRoutes;
