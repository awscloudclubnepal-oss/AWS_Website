"use client";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section>
      <div className="py-12 sm:py-16 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center"></div>

          <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2">
            <div className="border p-4 sm:p-6 lg:p-12 w-full h-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Let&apos;s get in touch with us
              </h2>


              <div className="my-6 sm:my-7 lg:my-10 space-y-4 sm:space-y-5 w-full">
                <div>
                  <p className="text-sm sm:text-base">Phone</p>
                  <span className="font-semibold text-sm sm:text-base">(+977) 9840122883</span>
                </div>

                <div>
                  <p className="text-sm sm:text-base">Email</p>
                  <span className="font-semibold text-sm sm:text-base">info@awscloudclubnepal.com</span>
                </div>
              </div>
            </div>

            <div className="h-full border w-full">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
