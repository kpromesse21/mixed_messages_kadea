
// Define the zodiac signs
const zodiacSigns = ["Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire", "Capricorne", "Verseau", "Poissons"];

// Define the message templates
const messageTemplates = [
  "Aujourd'hui, vous êtes plein d'énergie et de motivation. C'est le moment idéal pour prendre des risques et poursuivre vos objectifs.",
  "Aujourd'hui, vous êtes plus sensible que d'habitude. Prenez le temps de vous détendre et de vous ressourcer.",
  "Aujourd'hui, vous êtes particulièrement créatif. Laissez-vous aller à votre imagination.",
  "Aujourd'hui, vous êtes en pleine forme. Profitez-en pour faire du sport ou passer du temps en famille.",
  "Aujourd'hui, vous êtes plein de charisme. C'est le moment idéal pour rencontrer de nouvelles personnes.",
  "Aujourd'hui, vous êtes un peu stressé. Prenez le temps de vous relaxer et de vous détendre.",
  "Aujourd'hui, vous êtes en pleine forme. Profitez-en pour prendre soin de vous.",
  "Aujourd'hui, vous êtes particulièrement intuitif. Suivez votre instinct.",
  "Aujourd'hui, vous êtes plein de chance. Profitez-en pour prendre des risques.",
  "Aujourd'hui, vous êtes un peu démotivé. Prenez le temps de vous ressourcer.",
  "Aujourd'hui, vous êtes particulièrement sociable. C'est le moment idéal pour sortir et vous amuser.",
  "Aujourd'hui, vous êtes plein d'inspiration. Laissez-vous aller à votre créativité.",
];

// Generate a random zodiac sign
const zodiacSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];

// Generate a random message
const message = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];

// Print the message
console.log(`**Astrologie pour le ${zodiacSign}**`, message);
