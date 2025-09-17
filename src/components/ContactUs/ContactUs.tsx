"use client";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center"></div>

          <div className="mt-8 grid sm:grid-cols-2 md:mt-12">
            <div className="border p-6 lg:p-12 w-full h-full">
              <h2 className="text-5xl font-bold">
                Let&apos;s get in touch with us
              </h2>

              <p className="mt-4 text-muted-foreground">
                Harum quae dolore orrupti aut temporibus ariatur.
              </p>

              <div className="my-7 space-y-5 lg:my-10 w-full">
                <div>
                  <p>Phone</p>
                  <span className="font-semibold">(+977) 9846750283</span>
                </div>

                <div>
                  <p>Email</p>
                  <span className="font-semibold">awscloudclub.tu@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="h-full border w-full">
              <ContactForm />
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56499.84276281624!2d85.29305971866333!3d27.74073722482302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1814d1da760b%3A0xdbd29350787694aa!2sTribhuvan%20University!5e0!3m2!1sen!2snp!4v1755917112778!5m2!1sen!2snp"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="col-span-2 w-full h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
