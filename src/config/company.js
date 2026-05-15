/**
 * Public brand name (site, nav, footer). Legal entity on records/card may differ.
 * Contact/address/phones from business card.
 */

export const COMPANY_LEGAL_NAME = 'Vikram GPS Tracker';
/** Short line for tight UI (nav mobile). */
export const COMPANY_SHORT_NAME = 'Vikram GPS';
export const SERVICE_HEADLINE = 'GPS sales, service & solutions';
export const TAGLINE = 'Live tracking for all your assets';
export const MANAGING_DIRECTOR = 'Yatham Ramulu, M.Sc. MBA';
export const DIRECTOR_ROLE = 'Proprietor & Managing Director';
export const MANAGING_DIRECTOR_IMAGE = '/managing-director.png?v=2';

export const PHONE_DISPLAY_PRIMARY = '97011 10033';
export const PHONE_DISPLAY_SECONDARY = '63096 75143';
export const PHONE_E164_PRIMARY = '919701110033';
export const PHONE_E164_SECONDARY = '916309675143';
export const TEL_PRIMARY = '+919701110033';
export const TEL_SECONDARY = '+916309675143';

export const ADDRESS_LINE_1 = 'H.No: 3-135/7, Mallapur, Balapur';
export const ADDRESS_LINE_2 = 'Ranga Reddy Dist. - 500005';
export const ADDRESS_FULL = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;

/** Google Maps search query */
export const MAPS_QUERY =
  'H.No+3-135/7+Mallapur+Balapur+Ranga+Reddy+500005';

/** Certified ecosystem block — always show with platform chips. */
export const SOFTWARE_SECTION_TITLE = 'Software applications';
export const SOFTWARE_SECTION_SUBTITLE = 'For mobiles & WebLinks';

export const SOFTWARE_PLATFORMS = [
  'TrackSolid india / TB TRACK',
  'SparkGps / Track360',
  'BOLT GPS',
  'Tracky GPS / Vikram GPS',
];

export function whatsappUrl(text) {
  const q = encodeURIComponent(text);
  return `https://wa.me/${PHONE_E164_PRIMARY}?text=${q}`;
}
