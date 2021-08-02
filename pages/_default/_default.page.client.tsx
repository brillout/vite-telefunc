import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageLayout } from "./PageLayout";
import { hello2 } from "../hello2.telefunc";

hydrate();

async function hydrate() {
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    document.getElementById("page-view")
  );
  console.log("m2", await hello2("Hydration"));
}
