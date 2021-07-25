import React from "react";
import { useTitle } from "react-use";

import VerticalNav4 from "../components/vertical-navs/VerticalNav4";
import Header4 from "../components/headers/Header4";
import Footer1 from "../components/footers/Footer1";

export default function Index() {
  useTitle("Home page");

  return (
    <React.Fragment>
      <VerticalNav4
        content={null}
        bucketMain={[<Header4 content={null} />, <Footer1 content={null} />]}
      />
    </React.Fragment>
  );
}
