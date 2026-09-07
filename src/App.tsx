/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FleetShowcase } from './components/FleetShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('sales');
  const [selectedModel, setSelectedModel] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  const handleOpenQuoteModal = (service?: string, model?: string) => {
    if (service) setSelectedService(service);
    if (model) setSelectedModel(model);
    setQuoteModalOpen(true);
  };

  const handleNavigateToFleet = () => {
    const element = document.getElementById('fleet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll listener for floating action triggers and section highlights
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingActions(true);
      } else {
        setShowFloatingActions(false);
      }

      // Check active sections (Strictly 5 pages)
      const sections = ['home', 'about', 'services', 'fleet', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col font-sans selection:bg-[#E85D04] selection:text-white">
      {/* Header & Navbar (5 Pages) */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
      />

      {/* Main Content (Strictly 5 Clear, Concise Sections) */}
      <main className="flex-grow">
        {/* Page 1: Home */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigateToFleet={handleNavigateToFleet}
        />

        {/* Page 2: About Us */}
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Page 3: Services */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Page 4: Equipment Fleet */}
        <FleetShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Page 5: Contact Us */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Reusable Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setSelectedModel('');
        }}
        initialService={selectedService}
        initialModel={selectedModel}
      />

      {/* Floating Action Buttons for Direct Inquiry */}
      {showFloatingActions && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <a
            href="https://wa.me/233244567890?text=Hello%20Kamla%20Infra%20Ghana,%20I%20would%20like%20to%20inquire%20about%20equipment%20availability."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Inquiry"
            className="h-12 w-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center border-2 border-white"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
          </a>

          <button
            onClick={() => handleOpenQuoteModal('sales')}
            className="px-4 py-2.5 rounded-full bg-[#18181B] text-white shadow-xl hover:bg-[#09090B] transition-all flex items-center gap-2 text-xs font-bold border-2 border-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Instant Quote</span>
          </button>
        </div>
      )}
    </div>
  );
}
