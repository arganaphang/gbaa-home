import type { NextPage } from "next";
import { Layout } from "~/components";
import { PostType } from "~/utils/constant";

const Index: NextPage = () => {
  return (
    <Layout title="Create Post">
      <section className="grid min-h-screen w-full place-items-center">
        <form className="flex w-[40rem] flex-col rounded-md bg-white px-8 py-12 shadow-lg">
          <label className="mb-6 flex flex-col">
            <span className="mb-1 text-sm">Title</span>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-opacity-20 focus:ring-blue-500"
            />
          </label>
          <label className="mb-6 flex flex-col">
            <span className="mb-1 text-sm">Description</span>
            <textarea
              rows={10}
              className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-opacity-20 focus:ring-blue-500"
            />
          </label>
          <label className="mb-6 flex flex-col">
            <span className="mb-1 text-sm">Post Type</span>
            <select
              defaultValue={PostType[0]}
              className="block w-full rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:border-opacity-20 focus:ring-blue-500"
            >
              {PostType.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="self-end rounded-md bg-gray-900 px-6 py-3 text-xs text-white"
          >
            Save
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Index;
