import { useState } from 'react';
import { Navbar } from '../../../widgets/navbar';
import { Hero } from '../../../widgets/hero';
import { Characters } from '../../../widgets/characters';
import { DonateTiers } from '../../../widgets/donate-tiers';
import { Footer } from '../../../widgets/footer';
import { CharModal } from '../../../features/char-modal';
import { DonateModal } from '../../../features/donate-modal';
import { ThemeToggle } from '../../../features/theme-toggle';

export function HomePage() {
  const [selectedChar, setSelectedChar] = useState(null);
  const [donateOpen, setDonateOpen] = useState(false);

  const handleDonateSuccess = ({ amount, message }) => {
    // Trigger a notif update via custom event so StreamPreview can respond
    window.dispatchEvent(new CustomEvent('neiro:donate', { detail: { amount, message } }));
  };

  return (
    <>
      <Navbar />
      <Hero onDonate={() => setDonateOpen(true)} />
      <Characters onCharacterClick={setSelectedChar} />
      <DonateTiers />
      <Footer />

      {selectedChar && (
        <CharModal
          character={selectedChar}
          onClose={() => setSelectedChar(null)}
          onDonate={() => setDonateOpen(true)}
        />
      )}

      {donateOpen && (
        <DonateModal
          onClose={() => setDonateOpen(false)}
          onSuccess={handleDonateSuccess}
        />
      )}

      <ThemeToggle />
    </>
  );
}
