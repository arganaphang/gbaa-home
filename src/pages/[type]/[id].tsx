import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "~/components";

const Index: NextPage = () => {
  const router = useRouter();
  const { type, id } = router.query;
  return (
    <Layout title={`${type} ${id}`}>
      <section className="my-16 grid min-h-screen w-full place-items-center">
        <div className="w-full px-12 md:w-3/4 md:px-0 lg:w-3/5">
          <h1 className="mb-4 text-3xl text-black">{type} #title</h1>
          <p className="mb-12 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="flex flex-col border-b py-4 md:flex-row">
            <span className="hidden flex-[1]  font-light text-gray-400 md:block">
              Author
            </span>
            <p className="flex-[4] text-sm">John Doe, Sat Oct 01 2022</p>
          </div>
          <div className="flex flex-col py-4 md:flex-row">
            <span className="hidden flex-[1] font-light text-gray-400 md:block">
              Content
            </span>
            <article className="flex-[4] text-sm font-light leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              natus dolor amet quod totam rem sint id ipsa iure et, nemo iste
              libero cupiditate dicta modi ullam recusandae vitae culpa cumque
              nisi? Voluptatibus ea consequatur ut eius molestias et culpa
              facere nam nulla, provident eaque eum eligendi commodi molestiae
              officia asperiores non unde expedita minus amet nostrum! Mollitia
              quis autem eaque consectetur accusamus, animi temporibus officiis
              tempore quasi est voluptas fuga odio numquam delectus voluptates
              nesciunt totam expedita officia reprehenderit ducimus aliquid
              veritatis atque? Beatae asperiores, aspernatur aut molestias
              placeat earum, illo mollitia magnam quod vel hic magni, a delectus
              id? Recusandae eos pariatur magni. Voluptatum consequatur ut
              dignissimos dolor veniam, assumenda tenetur sunt illo deserunt
              quae fuga ducimus odio eum doloribus iusto odit quibusdam,
              temporibus similique omnis! Itaque neque placeat harum ipsum
              accusantium? Consequuntur hic aliquid facere dolorum deleniti
              optio similique quos ducimus qui, quis dolor sapiente odio
              necessitatibus earum, dignissimos nisi odit quisquam eum voluptas
              veritatis dolores maxime voluptatum asperiores magnam? Quo, qui
              illo commodi libero officia a minima doloribus dolore dolorem
              blanditiis! Illo velit voluptas placeat quae, cumque voluptatum
              vitae voluptatibus perferendis sunt, unde laboriosam dolores!
              Consectetur repellat exercitationem libero dolor aliquam pariatur
              qui, vitae ipsam nam quae ad! Adipisci optio molestiae
              necessitatibus eum numquam, ipsum fuga ut dolores officia
              reprehenderit veritatis sequi explicabo! Odio odit excepturi non
              natus possimus deserunt quo! Recusandae commodi magnam vero dolore
              molestiae repellendus, aliquid, minus suscipit, laboriosam nemo ex
              amet iste ut adipisci eligendi! Fugit consequuntur deleniti minima
              sunt, quam delectus sed commodi numquam odit? Fugit, a accusamus?
              Sapiente eius odio inventore eveniet, deserunt repellendus,
              ratione ut quisquam velit consequuntur culpa voluptatibus facilis
              illo nihil accusantium, nesciunt vel id. Delectus, earum? Mollitia
              dolorem tenetur facere tempore sapiente accusamus consectetur
              itaque? Nobis nihil alias amet quam explicabo error minus nisi
              sapiente libero.
            </article>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className="rounded-md bg-gray-200 px-6 py-3 text-xs font-light text-gray-400"
        >
          Go Back
        </button>
      </section>
    </Layout>
  );
};

export default Index;
