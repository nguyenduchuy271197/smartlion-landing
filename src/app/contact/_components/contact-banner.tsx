import Image from "next/image";

export default function ContactBanner() {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 py-10">
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground/90">
              Liên hệ với <br /> chúng tôi
            </h1>
            <p className="sm:text-lg lg:text-xl max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              excepturi repudiandae mollitia alias animi earum aut, odio
              corporis exercitationem tempore.
            </p>
          </div>
          <div>
            <Image
              width={800}
              height={400}
              src="/hero-background.jpg"
              alt="Contact"
              className="aspect-[2/1] rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
