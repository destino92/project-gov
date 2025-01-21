import Image from "next/image"
import Link from "next/link"
import { Newspaper, User } from "lucide-react"

export default function MinisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Title */}
      <h1 className="text-4xl font-bold mb-8">JEAN BAPTISTE ONDAYE</h1>

      {/* Main Content Card */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left Column - Image */}
        <div className="md:w-1/3">
          <Image
            src="/ministre_ondaye.jpg"
            alt="JEAN BAPTISTE ONDAYE"
            width={400}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Right Column - Info */}
        <div className="md:w-2/3 bg-primary p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">JEAN BAPTISTE ONDAYE</h2>
          <p className="text-xl mb-8">
            Ministre des finances, du budget et du portefeuille public 
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 mb-8">
            <Link href="#word" className="flex items-center gap-2 text-white hover:underline">
              <Newspaper className="h-5 w-5" />
              Mot du ministre
            </Link>
            <Link href="#biographie" className="flex items-center gap-2 text-white hover:underline">
              <User className="h-5 w-5" />
              Biographie
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 items-center">
            <Link
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <span className="text-sm">@ministre</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <div className="text-gray-400">|</div>
            <Link
              href="#"
              target="_blank"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="text-sm">@ministre</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div id="word" className="text-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Mot du ministre</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae sit sed ex amet. Amet perspiciatis obcaecati maiores voluptatibus quasi. Veniam unde delectus perspiciatis ea molestias! Modi, dicta nam. Quis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi officiis odio ex quis ipsum sunt, voluptatibus sit nulla aspernatur ullam, recusandae, corporis dicta porro rerum cum quo aliquam pariatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore iure quis deserunt in quibusdam ab reprehenderit, distinctio, vero pariatur facilis consectetur voluptate, incidunt iusto autem quasi fuga provident. Possimus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eligendi asperiores, amet quisquam eveniet libero deserunt atque rem harum, inventore ullam impedit dignissimos dolor soluta temporibus similique illo corporis adipisci?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur mollitia magni dolor excepturi deleniti quasi, quae obcaecati aspernatur ea? Eveniet a temporibus et officia quidem suscipit architecto veniam sapiente?
        </p>
      </div>

      <div id="biographie" className="text-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">Biographie</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae sit sed ex amet. Amet perspiciatis obcaecati maiores voluptatibus quasi. Veniam unde delectus perspiciatis ea molestias! Modi, dicta nam. Quis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi officiis odio ex quis ipsum sunt, voluptatibus sit nulla aspernatur ullam, recusandae, corporis dicta porro rerum cum quo aliquam pariatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore iure quis deserunt in quibusdam ab reprehenderit, distinctio, vero pariatur facilis consectetur voluptate, incidunt iusto autem quasi fuga provident. Possimus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eligendi asperiores, amet quisquam eveniet libero deserunt atque rem harum, inventore ullam impedit dignissimos dolor soluta temporibus similique illo corporis adipisci?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur mollitia magni dolor excepturi deleniti quasi, quae obcaecati aspernatur ea? Eveniet a temporibus et officia quidem suscipit architecto veniam sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta voluptas culpa nobis id qui ut. Doloremque, illo sequi eligendi quibusdam veritatis, libero alias quasi saepe, dicta harum nam quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat quam nam nulla explicabo commodi molestias dicta! Est ad asperiores assumenda consequuntur doloremque fuga cupiditate, reiciendis quo enim vero dicta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores at velit officiis quidem natus nostrum voluptas aut molestias! Pariatur id enim et veritatis vero quibusdam ex odio voluptatem labore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat error provident, tempore hic quas fugit pariatur quidem odio alias accusamus eum eligendi. Magni laudantium optio dolorum, eveniet voluptatem consequuntur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, perferendis recusandae repellendus officiis deleniti consectetur voluptatibus ullam in vel voluptatem pariatur dignissimos itaque amet illo! Consequatur harum sed inventore dolore?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et reiciendis alias id, iure, in, nam illum nihil odit quidem eligendi cum voluptatum. Temporibus voluptas facilis voluptate vitae cupiditate accusamus at.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae ratione, iusto ex quaerat itaque? Eius quidem obcaecati odio maiores molestiae laborum omnis assumenda perferendis beatae corrupti, sint facilis saepe.
        </p>
      </div>
    </div>
  )
}