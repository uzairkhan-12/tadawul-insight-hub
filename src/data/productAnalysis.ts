import type { FinalCall } from "./productsData";

export type RagRating = "Green" | "Amber" | "Red";

export interface AnalysisDimension {
  dimension: string;
  rating: RagRating;
  description: string;
  stgPosition?: string;
}

export interface ProductAnalysis {
  productId: string;
  levelOfCompetition: AnalysisDimension;
  tam: AnalysisDimension;
  currentMarketShare: AnalysisDimension;
  productTrend: AnalysisDimension;
  barriersToEntry: AnalysisDimension;
  priceSensitivity: AnalysisDimension;
  positioningVsCompetitors: AnalysisDimension;
  overallRag: RagRating;
}

export const ragToFinalCall = (rag: RagRating): FinalCall => {
  switch (rag) {
    case "Green": return "Not Required";
    case "Amber": return "Keep an Eye";
    case "Red": return "Need an Action";
  }
};

export const productAnalyses: Record<string, ProductAnalysis> = {
  "non-display-license": {
    productId: "non-display-license",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "High competition from global data vendors (Bloomberg, LSEG, ICE, FactSet) who all offer similar non-display licensing models.",
      stgPosition: "Competitive but undifferentiated; STG's advantage is being the primary source for Saudi market data.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – limited to institutional clients (CMIs, quant firms, algo traders) operating in Saudi market data. ~50-80 potential enterprise clients in KSA.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "STG holds dominant position as the original source of Saudi Exchange data. All non-display usage of Saudi data ultimately originates from STG.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Growing demand for non-display/machine-readable data driven by algorithmic trading and quantitative strategies expansion in KSA.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High barriers – STG owns the proprietary market data. Competitors can redistribute but cannot replicate the source data.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate sensitivity – enterprise clients compare licensing costs across vendors. Price-value ratio matters for budget decisions.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "STG is the primary data source but competitors offer more flexible packaging, global coverage bundles, and integrated analytics platforms.",
      stgPosition: "Source authority advantage; weaker on licensing flexibility and bundled offerings.",
    },
    overallRag: "Amber",
  },

  "index-weightages-report": {
    productId: "index-weightages-report",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Strong global index providers (MSCI, FTSE Russell, S&P DJI) dominate benchmark adoption, but STG's local index data is authoritative.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – institutional investors, ETF managers, and data vendors requiring Saudi index data. Growing with passive investment trends.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "STG owns TASI and NOMU index data natively. 100% market share on proprietary Saudi Exchange indices.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Growing trend toward passive investing and ETF tracking increases demand for index weightage data globally and in KSA.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "Very high – STG indices are proprietary. Global providers offer their own Saudi-related indices but cannot replace STG's native data.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Green",
      description: "Low sensitivity – institutional clients prioritize data accuracy and timeliness over cost for index replication.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "STG is the definitive source for TASI/NOMU indices. Competitors offer alternative benchmarks but cannot substitute native exchange data.",
      stgPosition: "Strong positioning as authoritative data owner.",
    },
    overallRag: "Green",
  },

  "web-ticker-license": {
    productId: "web-ticker-license",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Moderate-to-high competition from global platforms offering superior accessibility, cloud delivery, and API integration for tick data.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – data vendors, asset managers, and quant researchers requiring historical tick data for Saudi market analysis.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "STG is the primary source for Saudi tick data. Competitors redistribute but all Saudi tick data originates from the exchange.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Increasing demand for cloud-native, API-first data delivery. Market shifting toward more flexible consumption models.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – STG is the sole source of Saudi Exchange tick data. Competitors add value through distribution but depend on STG as source.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – clients compare total cost of data access across bundled platforms vs direct exchange licensing.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "STG has source data advantage but competitors lead on delivery flexibility (APIs, cloud, multiple formats). Accessibility gap exists.",
      stgPosition: "Data authority but trailing on platform/delivery experience.",
    },
    overallRag: "Amber",
  },

  "sukuk-bonds-listing": {
    productId: "sukuk-bonds-listing",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Emerging competition from private placement platforms (Sukuk Capital, Dinar, Tarmeez) offering alternative capital-raising routes.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Green",
      description: "Large TAM – Saudi sukuk market is one of the largest globally. Growing significantly under Vision 2030 capital market development.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Saudi Exchange dominates listed sukuk market. Private platforms capture only a small fraction of total issuance.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Strong upward trend – sukuk issuance volumes growing YoY. Government and corporate sukuk programs expanding.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Amber",
      description: "Moderate – regulatory framework favors exchange listing for transparency, but private platforms can operate with lighter CMA licensing.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – issuers evaluate total cost of listing vs private placement, including fees, compliance costs, and time-to-market.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "STG offers unmatched investor reach, regulatory credibility, and secondary market liquidity. Private platforms offer speed and flexibility for smaller issuances.",
      stgPosition: "Strong on scale and transparency; private platforms compete on speed/flexibility.",
    },
    overallRag: "Amber",
  },

  "reits-listing": {
    productId: "reits-listing",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Growing competition from alternative real estate investment platforms (Aseel, Stake) offering flexible structuring.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Green",
      description: "Large TAM – Saudi real estate market is substantial. Listed REITs represent a growing segment with strong regulatory support.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Saudi Exchange dominates listed REITs. Currently 18+ listed REITs with growing AUM. Alternatives capture a small segment.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Positive trend – regulatory encouragement for REIT listings, growing investor interest in income-generating assets.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Amber",
      description: "Moderate – exchange listing requires significant regulatory compliance, but platform-based alternatives face lower barriers.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – asset managers weigh listing costs against the benefits of public market access and liquidity.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "STG offers broad investor access, liquidity, and regulatory credibility. Competitors offer lower friction and custom structuring.",
      stgPosition: "Strong on liquidity and scale; vulnerable to flexibility-focused alternatives.",
    },
    overallRag: "Amber",
  },

  "employees-compliance": {
    productId: "employees-compliance",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Green",
      description: "Limited competition. Nasdaq SMARTS is a global surveillance tool but not specifically positioned for employee compliance in KSA.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Niche TAM – limited to financial institutions and listed companies in Saudi Arabia requiring employee trading monitoring.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Edaa dominates with centralized, market-wide visibility through Tadawulaty. No competitor has equivalent data access.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Regulatory compliance requirements increasing globally. More companies seeking automated compliance solutions.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "Very high – Edaa's centralized position in the Saudi market infrastructure creates an insurmountable data access advantage.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Green",
      description: "Low – compliance is regulatory-driven; cost is secondary to meeting requirements and avoiding penalties.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "Edaa has unique centralized visibility across all brokerage houses. Competitors rely on fragmented, self-reported data.",
      stgPosition: "Dominant positioning with structural data advantage.",
    },
    overallRag: "Green",
  },

  "equity-registry-unlisted": {
    productId: "equity-registry-unlisted",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Green",
      description: "No direct competitors. Indirect alternatives (corporate secretaries, law firms) offer fragmented, non-standardized substitutes.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Growing TAM – increasing number of unlisted companies in KSA, especially under Vision 2030 SME and startup ecosystem development.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Amber",
      description: "Moderate – service adoption by unlisted companies is voluntary. Many still use informal or law-firm-based solutions.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Positive – increasing governance requirements and pre-IPO readiness driving demand for standardized registry services.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – Edaa's institutional credibility and exchange-grade infrastructure are difficult to replicate.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – unlisted companies, especially SMEs, are cost-conscious and may prefer cheaper informal alternatives.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "Edaa offers institutional-grade, standardized services. Alternatives are flexible but lack standardization and credibility.",
      stgPosition: "Premium positioning; needs value proposition clarity for cost-sensitive SMEs.",
    },
    overallRag: "Green",
  },

  "paying-agent": {
    productId: "paying-agent",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Green",
      description: "No direct competitors. Banks offer dividend processing as custody services but lack centralized registry integration.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – all listed companies and growing number of unlisted entities distributing dividends in Saudi market.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Edaa has structural dominance as the central registry for dividend distribution to listed company shareholders.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Stable positive trend – regulatory push for centralized, transparent dividend distribution supports continued adoption.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "Very high – Edaa's central depository role is regulatory-defined and structurally embedded in the market infrastructure.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Green",
      description: "Low – service is essential infrastructure; issuers prioritize reliability and regulatory compliance over cost.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "Structural advantage as central registry. Banks handle accounts; Edaa handles registry-level distribution.",
      stgPosition: "Unmatched structural positioning in dividend distribution.",
    },
    overallRag: "Green",
  },

  "edaa-connect": {
    productId: "edaa-connect",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Moderate competition from Derayah's 'Mutual Funds Supermarket' and emerging platforms like Aseel.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Green",
      description: "Large TAM – mutual fund market in KSA is growing significantly. Retail and institutional demand for fund access increasing.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Amber",
      description: "Moderate – Derayah has established market presence. Edaa Connect benefits from infrastructure linkage but competes on user experience.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Strong growth trend – digitization of fund access, regulatory support for investment diversification, and retail investor growth.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Amber",
      description: "Moderate – CMA licensing required, but multiple platforms can aggregate fund access with proper partnerships.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – retail investors compare platform fees and fund selection breadth across competing platforms.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "Edaa Connect has unique post-trade infrastructure integration. Competitors lead on user experience and fund manager relationships.",
      stgPosition: "Infrastructure advantage; needs to improve UX and fund breadth.",
    },
    overallRag: "Green",
  },

  "tawasul": {
    productId: "tawasul",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Functional competition from scalable SMS providers (Unifonic, Msegat, Taqnyat) with broader use cases and API capabilities.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Niche TAM – limited to listed companies needing shareholder-specific communication. Broader SMS market is large but not directly relevant.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Tawasul is the only shareholder-linked communication service in KSA. Dominant in its specific niche.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Mixed – shareholder communication needs growing, but SMS as a channel faces competition from digital/app-based alternatives.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – Tawasul's unique advantage is direct linkage to Edaa's shareholder registry. SMS providers cannot access this data.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – issuers compare costs per message/notification against generic SMS platforms which may be cheaper.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Unique shareholder targeting capability but narrower functionality. SMS providers offer broader reach and more flexible APIs.",
      stgPosition: "Niche authority; vulnerable to channel diversification trends.",
    },
    overallRag: "Amber",
  },

  "liqaa": {
    productId: "liqaa",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Multiple local competitors (Jameeh, Ebana, Majles Tech, Musahm) targeting the AGM/meeting management market in KSA.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – all listed and unlisted companies, government entities, and associations requiring AGM/meeting management.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Strong presence among listed entities due to STG infrastructure integration. Competitors capture SME and government segments.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Growing demand for digital AGM solutions post-COVID. Regulatory acceptance of remote/hybrid meetings increasing.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Amber",
      description: "Low-to-moderate – meeting management platforms are relatively easy to build. Differentiation comes from compliance and integration.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – SMEs and associations are price-sensitive. Enterprise clients prioritize features and compliance.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Green",
      description: "Liqaa leads on enterprise-grade features, security, and multi-language support. Competitors compete on price and simplicity.",
      stgPosition: "Premium positioning; comprehensive features offset higher price point.",
    },
    overallRag: "Green",
  },

  "corporate-actions-events": {
    productId: "corporate-actions-events",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Strong global competition from SIX, S&P Global, Bloomberg, and LSEG, all offering corporate actions data with superior STP capabilities.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – institutional investors, clearing members, and asset managers requiring corporate actions data for Saudi securities.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Wamid is the primary source for Saudi corporate actions data. Global providers redistribute but depend on exchange as source.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Market moving toward fully automated STP processing. Demand for machine-readable, ISO-standardized corporate actions data increasing.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – Wamid has first-mover advantage as the exchange-native source for Saudi corporate actions.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – clients evaluate Wamid's data against global bundles from Bloomberg/LSEG which cover multiple markets.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Strong as source data but trailing on standardization and STP readiness. Global providers offer better workflow integration.",
      stgPosition: "Source authority; needs to improve standardization and STP capability.",
    },
    overallRag: "Amber",
  },

  "investor-profile-activity-report": {
    productId: "investor-profile-activity-report",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Competition from global data providers (LSEG, Bloomberg, S&P, FactSet) offering constructed ownership datasets.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – issuers, asset managers, and HFTs requiring investor activity insights for Saudi-listed securities.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Wamid offers unique actual trading activity data. Competitors offer constructed/modeled data. Different but valuable datasets.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Growing demand for investor analytics and ownership intelligence. Shift toward real-time, activity-based insights.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "Very high – Wamid has exclusive access to actual exchange trading activity data. Competitors cannot replicate this.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – institutional clients compare specialized reports against broader analytics suites from global providers.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Unique data advantage (actual vs modeled) but narrower coverage. Competitors offer multi-market views.",
      stgPosition: "Differentiated dataset; limited by single-market scope.",
    },
    overallRag: "Amber",
  },

  "company-fundamentals": {
    productId: "company-fundamentals",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Red",
      description: "Intense competition from Bloomberg, S&P Capital IQ, FactSet, and LSEG – all offering global fundamentals with deeper coverage.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Large global TAM for financial fundamentals data, but Wamid competes primarily in the Saudi segment.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Amber",
      description: "Limited vs global providers. Many Saudi institutions already subscribe to Bloomberg/Capital IQ for broader coverage needs.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Red",
      description: "Global providers continuously expanding coverage. Gap between Wamid's local depth and competitors' global breadth widening.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Amber",
      description: "Moderate – while Wamid has 20+ years of Saudi data, global providers have resources to cover Saudi market and more.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – clients often bundle fundamentals with other data services, making standalone pricing less competitive.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Red",
      description: "Wamid offers deep Saudi-specific data but lacks global coverage. Most clients need multi-market fundamentals.",
      stgPosition: "Local depth advantage but significant global coverage gap requiring strategic action.",
    },
    overallRag: "Red",
  },

  "historical-order-book": {
    productId: "historical-order-book",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Competition from LSEG and Bloomberg offering normalized, multi-venue historical data with better integration readiness.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Niche TAM – primarily HFTs and quant firms requiring Saudi order book data for backtesting and strategy development.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Wamid is the only source for full-depth Saudi Exchange order book data. Exclusive data advantage.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Growing demand for historical order book data driven by algorithmic trading expansion in KSA. Normalization expectations rising.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "Very high – full order book data is proprietary to the exchange. No competitor can source this independently.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – HFTs compare data costs against expected alpha generation. Normalized data from global providers may offer better value per effort.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Unique data source but raw format increases client processing burden. Competitors offer normalized, ready-to-use datasets.",
      stgPosition: "Exclusive data but processing gap vs normalized competitors.",
    },
    overallRag: "Amber",
  },

  "issuer-pack": {
    productId: "issuer-pack",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Global providers (LSEG, Bloomberg, FactSet) offer comprehensive multi-source ownership data with broader analytical capabilities.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Medium TAM – issuers, local asset managers, and brokers requiring investor relations analytics for Saudi-listed companies.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Wamid has unique exchange-sourced ownership data. Strong position among local issuers and brokers.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Green",
      description: "Growing demand for IR solutions and ownership analytics. Digital dashboard and API-first delivery becoming standard.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – direct exchange-level ownership data is unique to Wamid. Competitors aggregate from multiple secondary sources.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – local brokers and smaller issuers are price-conscious. Larger clients may prefer bundled global solutions.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Strong single-source data but competitors offer multi-market aggregated intelligence. API and dashboard quality matters.",
      stgPosition: "Unique data; moderate gap on multi-source aggregation and global coverage.",
    },
    overallRag: "Amber",
  },

  "buy-side-pack": {
    productId: "buy-side-pack",
    levelOfCompetition: {
      dimension: "Level of Competition",
      rating: "Amber",
      description: "Bloomberg BTCA is the primary global competitor, positioned as a formal execution validation tool with peer benchmarking.",
    },
    tam: {
      dimension: "Total Addressable Market",
      rating: "Amber",
      description: "Niche TAM – exchange members and buy-side institutional investors requiring broker execution quality analytics in KSA.",
    },
    currentMarketShare: {
      dimension: "Current Market Share",
      rating: "Green",
      description: "Wamid offers unique Saudi Exchange execution analytics. Bloomberg BTCA covers global markets but may lack Saudi-specific depth.",
    },
    productTrend: {
      dimension: "Product Trend",
      rating: "Amber",
      description: "Best execution requirements gaining regulatory attention globally. Trend toward more formal TCA and execution validation tools.",
    },
    barriersToEntry: {
      dimension: "Barriers to Entry",
      rating: "Green",
      description: "High – exchange-native execution data is proprietary. Bloomberg aggregates from contributor community but lacks direct exchange visibility.",
    },
    priceSensitivity: {
      dimension: "Price Sensitivity",
      rating: "Amber",
      description: "Moderate – buy-side firms evaluate analytics tools against broader terminal/platform costs.",
    },
    positioningVsCompetitors: {
      dimension: "Positioning vs Competitors",
      rating: "Amber",
      description: "Wamid offers analytics; Bloomberg BTCA positions as formal validation. Gap between analysis and compliance-grade validation.",
      stgPosition: "Strong analytics; needs to evolve toward formal best execution validation.",
    },
    overallRag: "Amber",
  },
};

export const getProductAnalysis = (productId: string): ProductAnalysis | undefined =>
  productAnalyses[productId];
