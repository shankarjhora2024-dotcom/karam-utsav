import React, { useState } from 'react';
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Heart,
  HelpCircle,
  Leaf,
  Music,
  ShieldCheck,
  Sparkles,
  TreeDeciduous,
  Users,
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/initialData';
import { NavigationTab } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-semibold">
          <TreeDeciduous className="w-3.5 h-3.5" />
          <span>Educational Documentation</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          About Karam Puja
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          An in-depth cultural exploration of Assam’s sacred autumn festival of nature, collective devotion, agricultural
          fertility, and community harmony.
        </p>
      </div>

      {/* 1. What is Karam Puja & Meaning of "Karam" */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
              Core Definition & Etymology
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1b4332]">
              What is Karam Puja?
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              <strong>Karam Puja</strong> (also known in various languages as <em>Karam Parab</em> or <em>Karma Puja</em>)
              is an ancient indigenous festival of thanksgiving and communion with nature. Rooted deeply in the agrarian
              and forest cultures of central and eastern India, it is observed with great joy and solemnity by the Tea
              Tribes and Adivasi communities settled across the tea garden regions and rural villages of Assam.
            </p>
            <p className="text-stone-700 text-sm leading-relaxed">
              At its spiritual core, the festival honors <strong>Karam Raja</strong>—the divine embodiment of nature,
              destiny, vitality, and ethical labor. The festival marks the transition of the monsoon into autumn, a season
              when standing crops (especially paddy) require blessings against pestilence, floods, and drought.
            </p>
          </div>

          <div className="bg-[#fcfaf7] p-6 rounded-xl border border-amber-200/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-base font-display">
              <Leaf className="w-5 h-5 text-emerald-700" />
              <span>Meaning of the Word “Karam”</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              The word <strong>Karam</strong> carries a dual linguistic and spiritual significance across indigenous
              communities:
            </p>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  <strong>Ethical Karma & Duty:</strong> Derived from ancestral philosophy reflecting <em>Karma</em> (ethical
                  action, hard work, and destiny). It affirms that dignity stems from honest labor in the soil and
                  compassion toward fellow human beings.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  <strong>The Sacred Tree:</strong> It directly denotes the sacred <em>Karam tree</em> (*Nauclea
                  parvifolia*), whose branches are revered as the living focal point of the altar in the Akhra.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Importance of the Karam Tree & Nature Connection */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
          Indigenous Environmental Philosophy
        </span>
        <h2 className="font-display text-2xl font-bold text-[#1b4332]">
          Importance of the Karam Tree & Agrarian Life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-2">
            <TreeDeciduous className="w-6 h-6 text-emerald-800" />
            <h3 className="font-bold text-sm text-[#1b4332]">Botanical Identity & Shade</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              The tree, botanically known as <em>Nauclea parvifolia</em> (family Rubiaceae), is known for its wide canopy,
              resilient timber, and natural shade. Indigenous knowledge systems recognize its soil-binding and water-retaining
              capacities along riverbanks and forest fringes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/60 space-y-2">
            <Sparkles className="w-6 h-6 text-amber-800" />
            <h3 className="font-bold text-sm text-[#1b4332]">Seed Germination & Jawa</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              The tender Jawa shoots grown in sand baskets represent the sacred mystery of germination. Cultivated with
              daily prayers, the health of the Jawa acts as a folk indicator of the forthcoming winter harvest.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <Heart className="w-6 h-6 text-rose-700" />
            <h3 className="font-bold text-sm text-[#1b4332]">Sibling Bonds & Protection</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Young women (Karamaitin) fast and pray for the longevity, prosperity, and health of their brothers, while
              brothers pledge mutual protection and family solidarity, exchanging blessed Jawa sprouts.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Community Participation & Music */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-widest block">
          Social Solidarity & Living Arts
        </span>
        <h2 className="font-display text-2xl font-bold text-[#1b4332]">
          Community Participation & The Akhra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
            <p>
              Unlike rituals restricted to private domestic confines, Karam Puja is fundamentally a <strong>collective,
              egalitarian community celebration</strong>. The center of all activities is the <strong>Akhra</strong>, the
              communal open-air village square.
            </p>
            <p>
              Here, children, youth, women, and elders assemble without social hierarchy. Songs sung in Sadri, Kurmali,
              Santali, Mundari, and Kurukh narrate ancestral journeys, seasonal flora, folk romances, and moral tales.
            </p>
            <p>
              The unmistakable throb of the <strong>Madal</strong> (earthen cylinder drum), Dhol, Tamak, and the piercing
              sweetness of the bamboo flute create an acoustic resonance that unites entire tea garden lines from sunset to
              sunrise.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md border border-stone-200 relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
              alt="Community dancing in circle at festival gathering"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 px-2 py-0.5 rounded">
                Akhra Unity
              </span>
              <p className="text-xs font-semibold mt-1">
                Linked arms in Jhumur dance symbolize an unbroken circle of mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANDATORY CULTURAL ACCURACY: "Traditions May Vary" */}
      <section className="bg-[#fffbeb] rounded-2xl p-6 sm:p-10 border-2 border-amber-300 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-amber-950">
              Traditions May Vary
            </h2>
            <span className="text-xs font-medium text-amber-800">
              Honoring the Diversity of Customs, Believes, Dates, and Dialects
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          It is crucial to recognize that <strong>Karam Puja practices, songs, rituals, celebration dates, and oral
          stories are not identical across every community or district</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-amber-900 pt-2">
          <div className="bg-amber-100/60 p-4 rounded-xl border border-amber-300/60">
            <h4 className="font-bold text-amber-950 mb-1">Regional Timing Differences</h4>
            <p>
              While Bhadra Shukla Ekadashi is the widely cited traditional date, many communities celebrate on varying
              lunar days (such as Purnima), or hold synchronized public gatherings on district-designated holidays or
              weekends to accommodate tea plantation working shifts.
            </p>
          </div>

          <div className="bg-amber-100/60 p-4 rounded-xl border border-amber-300/60">
            <h4 className="font-bold text-amber-950 mb-1">Ritual Nuance by Community</h4>
            <p>
              The Oraon, Munda, Santhal, Kharia, Ho, and Kurmi communities each possess distinct oral invocations, specific
              numbers of sacred branches (two or three), varied seed blends in the Jawa baskets, and unique regional
              parables of brothers Karam and Dharam.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-amber-800/90 italic pt-1">
          * We do not claim any single version as authoritative or universal. We recommend researchers always consult
          local village elders (Pahan / Nayke) for community-specific customs.
        </p>
      </section>

      {/* 5. Expandable FAQ Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-emerald-800" />
          <h2 className="font-display text-2xl font-bold text-[#1b4332]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-[#1b4332]">
                    {faq.question}
                  </span>
                  <span className="text-emerald-800 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Next steps buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
        <button
          onClick={() => onSelectTab('rituals')}
          className="px-5 py-2.5 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-xs transition-colors flex items-center gap-2"
        >
          <span>Step-by-Step Rituals</span>
          <Sparkles className="w-4 h-4" />
        </button>

        <button
          onClick={() => onSelectTab('history')}
          className="px-5 py-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-[#1b4332] font-semibold text-xs transition-colors"
        >
          Explore History & Assam Diaspora
        </button>
      </div>
    </div>
  );
};
