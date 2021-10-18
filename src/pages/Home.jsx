import DefaultLayout from "../layouts/Default";

import {Container} from "react-grid-system";

const Home = () => {
  return (
    <DefaultLayout>
      <div
        style={{
          height: "1500px",
        }}
      >
        <Container>
          home!
        </Container>
      </div>
    </DefaultLayout>
  );
};

export default Home;
