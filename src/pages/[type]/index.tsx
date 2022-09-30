import type { NextPage } from "next";
import { Layout } from "~/components";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <Layout title="Baptis Amanat Agung">
      <h1>{type}</h1>
    </Layout>
  );
};

export default Index;
