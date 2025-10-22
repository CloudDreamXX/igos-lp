import { BeyondPaymentsSection } from '../../widgets/BeyondPaymentsSection';
import { Footer } from '../../widgets/Footer';
import HeroSection from '../../widgets/HeroSection';
import { NiceToHavesSection } from '../../widgets/NiceToHavesSection';
import { PaymentsSection } from '../../widgets/PaymentSection';
import { SecureTransactionsSection } from '../../widgets/SecureTransactionsSection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PaymentsSection />
      <SecureTransactionsSection />
      <BeyondPaymentsSection />
      <NiceToHavesSection />
      <Footer />
    </div>
  );
};
