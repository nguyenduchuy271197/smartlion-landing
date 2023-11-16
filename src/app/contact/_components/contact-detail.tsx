import ContactForm from "./contact-form";
import ContactSocials from "./contact-socials";

export default function ContactDetail() {
  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-[1fr_200px] gap-16 sm:gap-8">
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactSocials />
          </div>
        </div>
      </div>
    </section>
  );
}
