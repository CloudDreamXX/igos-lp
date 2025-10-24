import { useState } from "react";
import { Button } from "../../shared/ui/Button";
import { ContactUs } from "../../widgets/HeroSection/ContactUs";

export const TermsOfUse = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    return (
        <div className="bg-white text-[#1a1a1a] font-sans min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center py-6 px-6 border-b">
                <div className="flex items-center gap-2">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="Igos"
                        className="w-[150px] h-auto"
                    />
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="border border-[#212945] text-[#212945] rounded-full px-[25px] py-[9px] text-[19px] hover:bg-[#f2f3f5] transition"
                >
                    Contact Us ↗
                </Button>
            </header>

            {/* Content */}
            <main className="max-w-[1110px] mx-auto py-12 px-6 leading-relaxed">
                <h1 className="text-[42px] font-semibold text-center text-[#212945] mb-10">
                    Terms of Use
                </h1>

                <p className="text-[16px]">
                    Latest update: 5/12/2023
                </p>

                <p className="mb-8 text-[16px]">
                    These Terms of Use (<strong>"Terms of Use"</strong>) describe how and why{" "}
                    <strong>IGOS</strong> (<strong>"IGOS"</strong>, <strong>"we"</strong> or{" "}
                    <strong>"us"</strong>) collects and otherwise processes personal data
                    about you as a visitor and user of{" "}
                    <a href="https://igos.io/" className="text-blue-600 hover:underline">
                        https://igos.io/
                    </a>{" "}
                    (hereinafter the <strong>“Website”</strong>).
                </p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-[22px] font-bold mb-3">1. Purpose</h2>
                        <p className="ml-6 mb-4">
                            <strong>1.1</strong> The purpose of the present Terms of Use is to
                            define the rights and obligations of any person browsing (hereinafter
                            the <strong>"User"</strong>) the Website{" "}
                            <a href="https://igos.io/" className="text-blue-600 hover:underline">
                                https://igos.io/
                            </a>
                            . The purpose of the Website is to present the services offered by IGOS
                            under its IGOS trademark.
                        </p>
                        <p className="ml-6">
                            <strong>1.2</strong> Exceptionally, IGOS may agree to the
                            modification, addition, or deletion of provisions of these Terms of Use
                            by written notice. IGOS reserves the right to modify or update these
                            Terms of Use without justification or prejudice, which is why IGOS
                            recommends that Users systematically reread the Terms of Use before any
                            new navigation on the Website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">2. Scope of application</h2>
                        <p>
                            These Terms of Use apply to all Users visiting the Website. By
                            accessing the Website, the User acknowledges that he/she has read and
                            accepted these Terms of Use, which set out his/her rights and
                            obligations when browsing the Website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">3. The Website</h2>

                        <h3 className="ml-4 font-semibold mb-2">3.1 Accessibility</h3>
                        <p className="ml-10">
                            <strong>3.1.1</strong> IGOS's Website is located at the following
                            address:{" "}
                            <a href="https://igos.io/" className="text-blue-600 hover:underline">
                                https://igos.io/
                            </a>
                            .
                        </p>
                        <p className="ml-10">
                            <strong>3.1.2</strong> Access to the Website is free of charge for all
                            Users having Internet access; however, the costs incurred by the User
                            for connecting to the Internet are not at IGOS’s expense.
                        </p>
                        <p className="ml-10 mb-4">
                            <strong>3.1.3</strong> Each User acknowledges that he/she is over 16
                            years of age or that he/she is accompanied by a legal guardian in order
                            to browse the Website.
                        </p>

                        <h3 className="ml-4 font-semibold mb-2">3.2 Content</h3>
                        <p className="ml-10">
                            <strong>3.2.1</strong> IGOS publishes content on the Website and takes
                            all possible measures to ensure the accuracy and validity of the
                            information published. IGOS reserves the right to modify or update the
                            content without justification or prejudice.
                        </p>
                        <p className="ml-10">
                            <strong>3.2.2</strong> It is possible that the Website may contain
                            inaccurate or incomplete information due to a technical or involuntary
                            error. IGOS undertakes to correct these errors in good faith as soon as
                            it becomes aware of them.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">4. Personal data and cookies</h2>
                        <p className="ml-6">
                            <strong>4.1</strong> IGOS undertakes to preserve the confidentiality of
                            personal and browsing data of Users. Personal data may be processed
                            when the User contacts IGOS to request services provided by IGOS.
                        </p>
                        <p className="ml-6">
                            <strong>4.2</strong> IGOS ensures compliance with the General Data
                            Protection Regulation 2017/679 (GDPR) by maintaining data
                            confidentiality, lawful processing, and retention limits.
                        </p>
                        <p className="ml-6">
                            <strong>4.3</strong> For more information, please see our{" "}
                            <a
                                href="/privacy-notice"
                                className="text-blue-600 hover:underline"
                            >
                                Privacy Notice
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">5. External links</h2>
                        <p>
                            IGOS’s Website may contain links redirecting Users to third-party
                            websites. IGOS is not responsible for the content or use of those
                            sites. Users should exercise caution when using such links.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">6. Liability</h2>
                        <p className="ml-6">
                            <strong>6.1</strong> IGOS takes all necessary measures to ensure the
                            proper functioning, security, and accessibility of the Website.
                        </p>
                        <p className="ml-6">
                            <strong>6.2</strong> IGOS cannot be held liable for:
                        </p>
                        <ul className="list-disc ml-12 mb-2">
                            <li>Service interruptions, security failures, or unavailability.</li>
                            <li>Direct or indirect damage resulting from Website information.</li>
                        </ul>
                        <p className="ml-6">
                            <strong>6.3</strong> IGOS is not liable for damages caused to the User
                            or third parties resulting from actions contrary to these Terms.
                        </p>
                        <p className="ml-6">
                            <strong>6.4</strong> The User is solely responsible for their use of the
                            Website and undertakes to indemnify IGOS in the event of damage, loss,
                            or loss of profit resulting from misuse.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">7. Intellectual property</h2>
                        <p className="ml-6">
                            <strong>7.1</strong> All elements on IGOS’s Website are subject to
                            rights reserved by IGOS.
                        </p>
                        <p className="ml-6">
                            <strong>7.2</strong> Any reproduction, exploitation, or reuse of
                            materials, even partial, from IGOS’s Website is prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[22px] font-bold mb-3">8. Miscellaneous</h2>
                        <p>
                            If one or more provisions of these Terms are deemed invalid under
                            applicable law or by a competent court, the remaining provisions remain
                            in full effect.
                        </p>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <ContactUs onClose={() => setIsModalOpen(false)} />
            )}

            {/* Footer */}
            <footer className="border-t py-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} IGOS. All Rights Reserved.
            </footer>
        </div>
    );
}
