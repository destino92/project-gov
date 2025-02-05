import Image from "next/image"

export function MotDuMinistre() {

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-primary">Mot du ministre</h2>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left Column - Image */}
        <div className="md:w-1/3">
          <Image
            src="/euloge-landry-kolelas.jpg"
            alt="EULOGE LANDRY KOLELAS"
            width={400}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Right Column - Info */}
        <div className="md:w-2/3 bg-primary p-4 text-white">
          <h2 className="text-3xl font-bold mb-2">EULOGE LANDRY KOLELAS</h2>
          <p className="text-xl mb-8">
            Ministre-Haut commissaire à la réinsertion des ex combattants
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae sit sed ex amet. Amet perspiciatis obcaecati maiores voluptatibus quasi. Veniam unde delectus perspiciatis ea molestias! Modi, dicta nam. Quis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi officiis odio ex quis ipsum sunt, voluptatibus sit nulla aspernatur ullam, recusandae, corporis dicta porro rerum cum quo aliquam pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore iure quis deserunt in quibusdam ab reprehenderit, distinctio, vero pariatur facilis consectetur voluptate, incidunt iusto autem quasi fuga provident. Possimus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eligendi asperiores, amet quisquam eveniet libero deserunt atque rem harum, inventore ullam impedit dignissimos dolor soluta temporibus similique illo corporis adipisci?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur mollitia magni dolor excepturi deleniti quasi, quae obcaecati aspernatur ea? Eveniet a temporibus et officia quidem suscipit architecto veniam sapiente?
          </p>
        </div>
      </div>

      </div>
    </section>
  )
}
