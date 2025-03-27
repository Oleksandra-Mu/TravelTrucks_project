import Btn from "../../components/Btn/Btn";

import { Helmet } from "react-helmet-async";

import css from "./NotFoundPage.module.css";

import { BASE_TITLE, NOT_FOUND_PAGE_TITLE } from "@constants/pages";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>
          {BASE_TITLE} - {NOT_FOUND_PAGE_TITLE}
        </title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>404</h1>
        <p className={css.message}>Oops! Page not found</p>
        <p className={css.description}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Btn
          tag="Go Home"
          variant="back"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </>
  );
};

export default NotFoundPage;
