import { Route, Routes } from "react-router";
import { About } from "./About";
import { NotFound } from "./NotFound";

export const Routing = () => (
  <Routes>
    <Route>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="notFound" element={<NotFound />} />
    </Route>
  </Routes>
);
