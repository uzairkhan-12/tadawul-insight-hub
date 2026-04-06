// Competitor brand data with colors for logo avatars
export interface CompetitorBrand {
  name: string;
  shortName: string;
  color: string; // bg color
  textColor: string;
  logo?: string; // optional image path
}

export const competitorBrands: Record<string, CompetitorBrand> = {
  "Bloomberg": { name: "Bloomberg", shortName: "BB", color: "#F58025", textColor: "#fff", logo: "/images/logo-bloomberg.png" },
  "LSEG": { name: "LSEG/Refinitiv", shortName: "LS", color: "#003B5C", textColor: "#fff", logo: "/images/logo-lseg.png" },
  "ICE": { name: "ICE", shortName: "ICE", color: "#0033A0", textColor: "#fff", logo: "/images/logo-ice.png" },
  "FactSet": { name: "FactSet", shortName: "FS", color: "#D32F2F", textColor: "#fff", logo: "/images/logo-factset.png" },
  "MSCI": { name: "MSCI", shortName: "MS", color: "#002855", textColor: "#fff" },
  "FTSE Russell": { name: "FTSE Russell", shortName: "FT", color: "#00695C", textColor: "#fff" },
  "S&P": { name: "S&P Global / DJI", shortName: "SP", color: "#E31837", textColor: "#fff" },
  "Sukuk Capital": { name: "Sukuk Capital", shortName: "SK", color: "#1B5E20", textColor: "#fff", logo: "/images/logo-sukuk.png" },
  "Dinar": { name: "Dinar Investment", shortName: "DI", color: "#4E342E", textColor: "#fff", logo: "/images/logo-dinar.png" },
  "Tarmeez": { name: "Tarmeez Capital", shortName: "TZ", color: "#6A1B9A", textColor: "#fff" },
  "Aseel": { name: "Aseel Capital", shortName: "AS", color: "#0D47A1", textColor: "#fff" },
  "Stake": { name: "Stake", shortName: "ST", color: "#00C853", textColor: "#fff" },
  "Nasdaq": { name: "Nasdaq SMARTS", shortName: "NQ", color: "#0096D6", textColor: "#fff" },
  "In-house": { name: "In-house Tools", shortName: "IH", color: "#546E7A", textColor: "#fff" },
  "Corporate Sec": { name: "Corporate Secretarial", shortName: "CS", color: "#795548", textColor: "#fff" },
  "CMA Custodians": { name: "CMA Licensed Custodians", shortName: "CC", color: "#37474F", textColor: "#fff" },
  "Law Firms": { name: "Law Firms", shortName: "LF", color: "#263238", textColor: "#fff" },
  "Banks": { name: "Banks & Custodians", shortName: "BK", color: "#1565C0", textColor: "#fff" },
  "Derayah": { name: "Derayah", shortName: "DR", color: "#00838F", textColor: "#fff" },
  "Unifonic": { name: "Unifonic", shortName: "UF", color: "#7B1FA2", textColor: "#fff" },
  "Msegat": { name: "Msegat", shortName: "MG", color: "#C62828", textColor: "#fff" },
  "Taqnyat": { name: "Taqnyat", shortName: "TQ", color: "#E65100", textColor: "#fff" },
  "Jameeh": { name: "Jameeh", shortName: "JM", color: "#2E7D32", textColor: "#fff" },
  "Ebana": { name: "Ebana", shortName: "EB", color: "#1976D2", textColor: "#fff" },
  "Majles Tech": { name: "Majles Tech", shortName: "MJ", color: "#4527A0", textColor: "#fff" },
  "Musahm": { name: "Musahm", shortName: "MU", color: "#00695C", textColor: "#fff" },
  "Argaam": { name: "Argaam", shortName: "AR", color: "#D84315", textColor: "#fff" },
  "Mubasher": { name: "Mubasher", shortName: "MB", color: "#0277BD", textColor: "#fff" },
  "SIX": { name: "SIX Financial", shortName: "SX", color: "#37474F", textColor: "#fff" },
  "Bloomberg BTCA": { name: "Bloomberg BTCA", shortName: "BT", color: "#F58025", textColor: "#fff", logo: "/images/logo-bloomberg.png" },
};

// Map competitor description strings to brand keys
export const getCompetitorBrandKey = (competitorDesc: string): string | null => {
  const desc = competitorDesc.toLowerCase();
  if (desc.includes("bloomberg btca")) return "Bloomberg BTCA";
  if (desc.includes("bloomberg")) return "Bloomberg";
  if (desc.includes("lseg") || desc.includes("refinitiv")) return "LSEG";
  if (desc.includes("ice –") || desc.startsWith("ice")) return "ICE";
  if (desc.includes("factset")) return "FactSet";
  if (desc.includes("msci")) return "MSCI";
  if (desc.includes("ftse")) return "FTSE Russell";
  if (desc.includes("s&p") || desc.includes("s&p")) return "S&P";
  if (desc.includes("sukuk capital")) return "Sukuk Capital";
  if (desc.includes("dinar")) return "Dinar";
  if (desc.includes("tarmeez")) return "Tarmeez";
  if (desc.includes("aseel")) return "Aseel";
  if (desc.includes("stake")) return "Stake";
  if (desc.includes("nasdaq")) return "Nasdaq";
  if (desc.includes("in-house")) return "In-house";
  if (desc.includes("corporate secretarial")) return "Corporate Sec";
  if (desc.includes("cma licensed")) return "CMA Custodians";
  if (desc.includes("law firm")) return "Law Firms";
  if (desc.includes("banks") || desc.includes("snb capital")) return "Banks";
  if (desc.includes("derayah")) return "Derayah";
  if (desc.includes("unifonic")) return "Unifonic";
  if (desc.includes("msegat")) return "Msegat";
  if (desc.includes("taqnyat")) return "Taqnyat";
  if (desc.includes("jameeh")) return "Jameeh";
  if (desc.includes("ebana")) return "Ebana";
  if (desc.includes("majles")) return "Majles Tech";
  if (desc.includes("musahm")) return "Musahm";
  if (desc.includes("argaam")) return "Argaam";
  if (desc.includes("mubasher")) return "Mubasher";
  if (desc.includes("six ")) return "SIX";
  return null;
};
