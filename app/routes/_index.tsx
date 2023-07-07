// import { useOptionalUser } from "~/utils";

import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ request, params }: LoaderArgs) => {
  const articles = [
    {
      image: "/static/article/naruto-sasuke.png",
      name: "Two Pointer",
      slug: "two-pointer"
    }, {
      image: "/static/article/naruto-bridge-arc-cover.jpg",
      name: "Sliding Window",
      slug: "sliding-window"
    }
  ]
  return { articles }
};

export default function Index() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <main className="px-8 z-50 text-white relative" >
      <div className="py-10">
        <div className="flex flex-col h-full w-full justify-center gap-16">
          <section className="flex gap-8 text-center justify-center">
            <div className="flex justify-center h-[400px] w-[200px] grow-0">
              <img className="w-full h-full object-cover" src={`/static/article/black-naruto-2.jpg`} alt="" />
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="font-bold uppercase text-9xl">Algo-Solved</h1>
              <h2 className="text-5xl">14 Algorithmic Patterns Explained</h2>
              <h3 className="text-3xl">Learn what you need most for letcode</h3>
            </div>
            <div className="flex justify-center h-[400px] w-[200px] grow-0">
              <img className="w-full h-full object-cover" src={`/static/article/black-naruto.jpg`} alt="" />
            </div>
          </section>
          <div className="w-10/12 mx-auto">
            <ul className="grid grid-cols-3 gap-8">
              {articles.map((article, key) => {
                return (
                  <li key={key}>
                    <article>
                      <div>
                        <Link to={article.slug}>
                          <div className="w-full h-[240px]">
                            <img className="w-full h-full object-cover" src={article.image} alt="Article Visual" />
                          </div>
                          <h2>{article.name}</h2>
                        </Link>
                      </div>
                    </article>
                  </li>
                )
              })}
              <li>
                <div>
                  <span>Coming Soon...</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main >
  )
}
