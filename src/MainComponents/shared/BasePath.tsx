const BASE_PATH_FORAPI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://watch-mart.vercel.app/";

export default BASE_PATH_FORAPI;
