import { Search } from "lucide-react"
import Link from "next/link"

export default function Project() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/project.png?height=500&width=1200')` }}
        />

        {/* Gradient Overlay - starts transparent and gets darker towards bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Text Content - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-white/80 text-sm md:text-base">9 Janvier 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div>
                <h2 className="font-semibold text-gray-700">Nom du projet :</h2>
                <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">Objectifs du projet :</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corrupti distinctio alias nulla magnam dolorem, nisi nihil architecto voluptates amet quasi quo maiores neque ipsum est at illum doloribus sequi fugit?
                  Iste blanditiis quis vel hic facilis velit atque qui at delectus! Nemo nostrum similique, dolorem saepe nesciunt perspiciatis ex sint illo libero.
                  Voluptate sed odio impedit aliquam nisi, odit itaque? Tempora adipisci, necessitatibus fuga deserunt eum eveniet, hic deleniti porro quod, assumenda quisquam voluptates.
                  Consequuntur, repellat. Distinctio rerum praesentium, quisquam velit temporibus quo, eius maiores delectus at earum optio voluptatibus veniam facere dolorem quae aspernatur perspiciatis!
                  Optio numquam est ratione natus quis asperiores iste deserunt voluptatem similique quod harum odit, distinctio ex vitae, dolore incidunt tenetur mollitia? Atque.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">Budget du projet :</h2>
                <p className="text-gray-600">3.720.000 USD</p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">Durée du projet :</h2>
                <p className="text-gray-600">Décembre 2024 / Septembre 2025</p>
              </div>

              <div className="pt-4">
                <Link href="#" className="text-primary hover:text-green-700 font-medium">
                  Télécharger le fichier complet
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - News */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Saisissez et appuyer sur Entrée"
                className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* News Section */}
            <div>
              <h2 className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-md mb-6">
                ACTUALITÉ
              </h2>
              <div className="space-y-6 text-gray-600">
                <article className="border-b border-gray-200 pb-6">
                  <Link href="#" className="hover:text-primary">
                    <h3 className=" mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo corrupti, molestiae omnis ducimus in assumenda officia quis cupiditate accusantium fugit ratione iusto reiciendis animi id sit possimus sapiente placeat aliquid?
                    </h3>
                  </Link>
                </article>
                <article className="border-b border-gray-200 pb-6">
                  <Link href="#" className="hover:text-primary">
                    <h3 className=" mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos laboriosam, assumenda ipsa, deleniti fuga ratione inventore laudantium excepturi aut, reiciendis culpa perspiciatis. Ad vel, consectetur at beatae quae tempore.
                    </h3>
                  </Link>
                </article>
                <article className="border-b border-gray-200 pb-6">
                  <Link href="#" className="hover:text-primary">
                    <h3 className=" mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero ipsam molestias debitis et quibusdam nesciunt qui ea obcaecati provident eligendi quod, nobis, cum temporibus numquam enim expedita quaerat soluta.
                    </h3>
                  </Link>
                </article>
                <article className="pb-6">
                  <Link href="#" className="hover:text-primary font-">
                    <h3 className=" mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h3>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

