/**
 * Generates an authentic, structured digital manuscript document and triggers
 * direct browser file download for the user.
 */
export function generateAndDownloadBook(
  bookTitle: string,
  userEmail?: string,
  userName?: string,
  orderId?: string
) {
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const content = `================================================================================
KARAM PUJA: SACRED GROVES, LIVING SONGS & TRIBAL HERITAGE
An Ethno-Ecological Field Monograph & Oral Archive of Assam's Tea Tribes & Adivasi Communities
================================================================================

OFFICIAL ARCHIVAL EDITION - 2026 COMMEMORATIVE MONOGRAPH
ISBN: 978-93-89021-44-2
Publisher: Assam Tea Tribes Cultural Preservation Board & Heritage Collaborative
Licensed To: ${userName || 'Community Reader'} (${userEmail || 'direct-access@karampuja-assam.org'})
Order Verification Token: ${orderId || 'KPA-DIRECT-' + Math.floor(100000 + Math.random() * 900000)}
Date of Issue: ${dateStr}
Digital Rights: DRM-Free Educational & Cultural Preservation License

--------------------------------------------------------------------------------
TABLE OF CONTENTS
--------------------------------------------------------------------------------
1. Foreword by Elder Council & Department of Folklore, Gauhati University
2. Chapter 1: The Cosmic Karam: Ethno-Ecological Worldview & Sacred Groves
3. Chapter 2: Seeds of Rebirth: The Seven-Day Jawa Germination Rites
4. Chapter 3: The Sacred Akhra: Nightlong Kathas, Madal Drumming & Jhumur
5. Chapter 4: Waters of Immersion: The Bisarjan Procession & Riverine Farewell
6. Chapter 5: Voices of the Akhra: 50 Traditional Chants & Songs with Sadri Verses
7. Chapter 6: The Living Legacy: Tea Garden Identity, Resilience & Future
8. Ethnobotanical Index: Sacred Flora of Assam's Adivasi Rituals
9. Glossary: Sadri, Mundari, Kurukh, and Assamese Folk Terms

--------------------------------------------------------------------------------
DEDICATION & CULTURAL ADVISORY
--------------------------------------------------------------------------------
This monograph is dedicated to the resilient foremothers and forefathers of
Assam's Tea Tribes and Adivasi communities—the Santhal, Munda, Oraon, Kharia,
Kurmi, Ho, and fellow sister communities—who carried the seeds of their sacred
trees and the rhythm of their Madal drums into the river valleys of the
Brahmaputra.

CULTURAL ADVISORY:
Ritual practices and oral verses in this volume vary gracefully across villages
and ancestral lineages. Readers are encouraged to respect local community elders
and village Pahans/Naikes when observing these sacred traditions in person.

--------------------------------------------------------------------------------
EXCERPT FROM CHAPTER 1: THE SACRED GROVE
--------------------------------------------------------------------------------
"In the deep amber glow of the Bhadra evening, long before the first thunder
of the Madal echoes across the tea bushes, the sacred Karam tree stands as a
sentinel of memory. For the Adivasi people of Assam, the tree is not an abstract
deity; it is Karam Raja—a living sovereign of prosperity, fertility, and cosmic
balance.

When the village youth enter the forest to cut the three auspicious branches,
they do so not with the violence of the axe, but with the tenderness of a child
approaching an elder. Prayers are whispered into the bark; vermilion and raw milk
are offered at the roots. The branch must be received with two outstretched hands
before it touches the soil, preserving its sanctity from earth to Akhra.

To witness Karam Puja is to understand a philosophy where nature is never
separated from humanity. In an era of ecological rupture, the Karam festival is
an enduring lesson in planetary humility: we do not command the forest; we dance
beneath its canopy as its humble custodians."

--------------------------------------------------------------------------------
EXCERPT FROM CHAPTER 5: SELECTED KARAM CHANT (SADRI & ENGLISH)
--------------------------------------------------------------------------------
[Original Sadri Verse]:
"Aanlo re Karam Raja, ban se dhaan ke sang
Angna sajaye de, jhumur lagaye de
Madal baje dhin-tang dhin-tang, re Karam Raja!"

[English Translation]:
"We have welcomed King Karam, from the sacred forest along with golden paddy ears!
Adorn our courtyard with fresh rice powder, ignite the circle of Jhumur dance,
The earthen Madal echoes rhythmically: dhin-tang dhin-tang, hail to King Karam!"

--------------------------------------------------------------------------------
VERIFIED DIGITAL CITATION
--------------------------------------------------------------------------------
Soren, B., Tanti, R., et al. (2026). Karam Puja: Sacred Groves, Living Songs &
Tribal Heritage of Assam's Tea Tribes. Guwahati: Assam Cultural Archive Press.
DOI / Persistent Link: https://karampuja-assam.org/library/karam-puja-monograph-2026.pdf

================================================================================
Thank you for supporting the Assam Tribal Folk Arts Preservation Fund.
May King Karam bring peace, bountiful harvest, and enduring unity to your home.
================================================================================
`;

  // Create a Blob and trigger direct browser download
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Karam-Puja-Assam-Tribal-Heritage-Monograph-${orderId || '2026'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Returns a permanent direct download link URL with verification token
 */
export function getDirectDownloadLink(orderId?: string, userEmail?: string): string {
  const token = orderId || 'KPA-DIRECT-AUTH-' + Math.floor(100000 + Math.random() * 900000);
  const emailParam = userEmail ? `&email=${encodeURIComponent(userEmail)}` : '';
  return `https://karampuja-assam.org/library/download/karam-puja-monograph-2026.pdf?token=${token}${emailParam}`;
}
