export default function ContactBanner() {
  return (
    <section>
      <div className="container">
        <div className="h-[450px] sm:h-[600px] bg-primary rounded-3xl flex items-center px-8 sm:px-12 lg:px-20 bg-[url('/hero-background.jpg')] bg-cover bg-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground">
                Liên hệ với <br /> chúng tôi
              </h1>
              <p className="sm:text-lg lg:text-xl max-w-xl text-primary-foreground/90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                excepturi repudiandae mollitia alias animi earum aut, odio
                corporis exercitationem tempore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
