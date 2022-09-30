import type { NextPage } from "next";
import { Layout } from "~/components";

const Index: NextPage = () => {
  return (
    <Layout title="Baptis Amanat Agung">
      <section className="grid w-full place-items-center pt-56 text-center">
        <article className="max-w-4xl px-12">
          <h1 className="handwriting mb-8 text-3xl text-black md:text-5xl">
            Baptis Amanat Agung
          </h1>
          <p className="text-xs font-extralight leading-loose text-gray-400 md:text-base">
            Kami adalah Gereja Baptis Indonesia Getsemani TPW Amanat Agung. Kami
            merupakan bagian dari Gabungan Gereja Baptis Indonesia. Akte
            Pendirian No.37 Th.1973 . Didaftarkan pada Dept. Agama RI No.89
            Th.1988.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default Index;
