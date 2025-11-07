import { useNavigate } from "react-router-dom";
import { Button } from "../../components/animate-ui/components/buttons/button";

export const Footer = () => {
  const nav = useNavigate()

  return (
    <footer id="security" className="bg-[#1B1B1B] px-[27px] md:px-[36px] py-[34px] md:py-[50px]">
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
            <ul className="text-[16px]">
              <li>
                <Button variant="link" onClick={() => nav("/terms-of-use")} className="text-[16px] font-normal p-0 cursor-pointer">
                  Terms and Conditions
                </Button>
              </li>
              <li>
                <Button variant="link" onClick={() => nav("#")} className="text-[16px] font-normal p-0 cursor-pointer">
                  Documentation
                </Button>
              </li>
            </ul>
          </div>

          <div className="w-fit md:text-left">
            <h4 className="text-[12px] font-normal uppercase mb-8 tracking-wide">Follow Us</h4>
            <Button variant="link" onClick={() => nav("#")} className="text-[16px] font-normal p-0 cursor-pointer">
              Instagram
            </Button>
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
