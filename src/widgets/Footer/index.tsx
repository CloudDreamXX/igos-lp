export const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] px-[27px] md:px-[36px] py-[34px] md:py-[50px]">
      <div className="bg-[#FFEEAA] px-8 py-10 rounded-3xl md:h-[448px] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mr-24 pb-20">
          <div className="w-full max-w-[332px] md:text-left">
            <img src="assets/icons/logo.svg" alt="IGOS Logo" className="mb-6 h-[37px]" />
            <p className="max-w-[332px] text-[16px] leading-[26px] font-normal text-[#040404]">
              Unifying Payment Service Providers for Seamless Transactions{' '}
            </p>
          </div>

          <div className="w-fit md:text-left">
            <h4 className="text-[12px] font-normal uppercase mb-8 tracking-wide">Company</h4>
            <ul className="space-y-5 text-[16px]">
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Website Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="w-fit md:text-left">
            <h4 className="text-[12px] font-normal uppercase mb-8 tracking-wide">Follow Us</h4>
            <a href="#" className="text-[16px] hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div>
          {/* ====== Divider ====== */}
          <div className="w-full h-px bg-black mb-6"></div>

          {/* ====== Bottom Section ====== */}
          <div className="text-center text-[16px] font-normal text-[#040404]">
            ©2025 IGOS. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
