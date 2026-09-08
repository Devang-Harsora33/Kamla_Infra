import React, { useState, useEffect } from 'react';
import { PageId, EquipmentModel } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { EquipmentDetailModal } from './components/EquipmentDetailModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { EquipmentPage } from './pages/EquipmentPage';
import { RentalPage } from './pages/RentalPage';
import { SalesSparesPage } from './pages/SalesSparesPage';
import { AboutContactPage } from './pages/AboutContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal States
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreSelectedModel, setQuotePreSelectedModel] = useState<string | undefined>(undefined);
  const [quoteDefaultService, setQuoteDefaultService] = useState<'rental' | 'sales' | 'spares'>('rental');

  const [detailModalEquipment, setDetailModalEquipment] = useState<EquipmentModel | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Sync hash routing on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'equipment', 'rental', 'sales-spares', 'about-contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (
    modelName?: string,
    defaultService: 'rental' | 'sales' | 'spares' = 'rental'
  ) => {
    setQuotePreSelectedModel(modelName);
    setQuoteDefaultService(defaultService);
    setQuoteModalOpen(true);
  };

  const handleRentOrBuyFromDetail = (modelName: string, mode: 'rental' | 'sales') => {
    handleOpenQuote(modelName, mode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] text-[#102A43] antialiased">
      {/* Sticky Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Strict 5-Page View Renderer */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onSelectEquipment={(eq) => setDetailModalEquipment(eq)}
          />
        )}

        {currentPage === 'equipment' && (
          <EquipmentPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onSelectEquipment={(eq) => setDetailModalEquipment(eq)}
          />
        )}

        {currentPage === 'rental' && (
          <RentalPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'sales-spares' && (
          <SalesSparesPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
            onSelectEquipment={(eq) => setDetailModalEquipment(eq)}
          />
        )}

        {currentPage === 'about-contact' && (
          <AboutContactPage
            onNavigate={navigateTo}
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Global Minimal Industrial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={handleOpenQuote}
      />

      {/* Global Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedModel={quotePreSelectedModel}
        defaultService={quoteDefaultService}
      />

      <EquipmentDetailModal
        equipment={detailModalEquipment}
        onClose={() => setDetailModalEquipment(null)}
        onRentOrBuy={handleRentOrBuyFromDetail}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectEquipment={(eq) => {
          setDetailModalEquipment(eq);
        }}
      />
    </div>
  );
}
