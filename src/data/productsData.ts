export type FinalCall = "Not Required" | "Stay Close" | "Needs Action";

export interface Product {
  id: string;
  subsidiary: string;
  relatedTeam: string;
  name: string;
  client: string;
  overview: string;
  keyFeatures: string[];
  directCompetitors: string[];
  indirectCompetitors: string[];
  mainCompetitionComponent: string;
  competitionDetails: string;
  summary: string;
  finalCall: FinalCall;
  finalCallDetails: string;
  sources: string[];
}

export interface Subsidiary {
  id: string;
  name: string;
  description: string;
  teams: string[];
  productCount: number;
}

export const subsidiaries: Subsidiary[] = [
  {
    id: "saudi-exchange",
    name: "Saudi Exchange",
    description: "The principal stock exchange of Saudi Arabia, providing listing, trading, and market data services.",
    teams: ["Data", "Listing"],
    productCount: 5,
  },
  {
    id: "edaa",
    name: "Edaa",
    description: "Securities depository center providing post-trade infrastructure, registry services, and investor services.",
    teams: ["Issuer Relation", "Member Relation"],
    productCount: 5,
  },
  {
    id: "wamid",
    name: "Wamid",
    description: "Data and technology subsidiary delivering market data products, analytics, and digital solutions.",
    teams: ["Venture Team", "DMP Team"],
    productCount: 7,
  },
];

export const products: Product[] = [
  // === Saudi Exchange Products ===
  {
    id: "non-display-license",
    subsidiary: "Saudi Exchange",
    relatedTeam: "Data",
    name: "Non-Display License",
    client: "CMIs – Execution & Analytical Purposes",
    overview: "The Non-Display License empowers users with the ability to execute automated trading strategies and generate derived data for advanced applications such as risk management, quantitative analysis, and asset management. By licensing derived data, it supports seamless trading execution with pre-programmed instructions while ensuring compliance and robust risk oversight.",
    keyFeatures: [
      "Automated Trading: Enables pre-programmed order execution for seamless trading efficiency",
      "Derived Data Creation: Supports investment compliance and risk management through derived data analysis",
      "Comprehensive Coverage: Licenses the use of trading information for automated and strategic decision-making",
      "Streamlines Investment Management: Facilitates advanced quantitative analysis for optimized asset management",
    ],
    directCompetitors: [
      "Bloomberg – supports non-display/derived usage in enterprise/API context",
      "LSEG/Refinitiv – customers source Saudi data through Refinitiv workflows for system usage",
      "ICE – data used by applications and systems rather than humans on screens",
      "FactSet – non-display category includes feeding data into internal apps and automated workflows",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "License / Usage Rights",
    competitionDetails: "Competitors mainly compete on how data is licensed and used (non-display rights)—not price or platform. Bloomberg, LSEG, ICE, and FactSet all compete by offering enterprise data licenses that allow this exact usage (APIs, feeds, internal systems). Clients compare who gives better licensing flexibility, compliance structure, and usage coverage.",
    summary: "Competition is about who controls and defines the rules of using data inside systems (license model).",
    finalCall: "Stay Close",
    finalCallDetails: "Competition centers on non-display licensing models; no clear differentiation, but no proven disadvantage requiring immediate action.",
    sources: [
      "https://www.cmegroup.com/market-data/distributor/files/cme-group-data-licensing-policy-guidelines-and-non-display-licensing-faq.pdf",
      "https://professional.bloomberg.com/products/data/enterprise-catalog/real-time-data-feed/",
      "https://www.lseg.com/en/data-analytics/market-data/data-feeds/tick-history",
    ],
  },
  {
    id: "index-weightages-report",
    subsidiary: "Saudi Exchange",
    relatedTeam: "Data",
    name: "Index Weightages Report",
    client: "CMIs – Execution & Analytical Purposes, Data Vendors",
    overview: "Stay informed with the Index Weightages Report, providing daily updates on weightings, free float, and market capitalization for TASI and NOMUc markets. Delivered directly to subscribers, this report empowers decision-making with precise and timely market insights.",
    keyFeatures: [
      "Automated Daily Updates",
      "Direct Exchange Data",
      "Investment Insights",
      "Automated Distribution",
    ],
    directCompetitors: [
      "MSCI – publishes index constituent weights for Saudi-related indices (e.g., MSCI Saudi Arabia)",
      "FTSE Russell – provides Saudi index weights used by global investors and passive products",
      "S&P DJI – offers Saudi-related index compositions and weights used by institutions",
      "Bloomberg – provides weight/exposure analytics and index-related weight views through the terminal",
      "LSEG/Refinitiv – distributes index and market data via its platforms and feeds",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Benchmark Standard Adoption",
    competitionDetails: "Competitors mainly compete on which index provider is adopted as the benchmark standard by investors—not price or platform. MSCI, FTSE Russell, and S&P Dow Jones Indices provide index weights that are widely used for benchmarking, ETF tracking, and portfolio construction.",
    summary: "Competition is about which index provider is trusted and adopted as the benchmark standard by investors.",
    finalCall: "Not Required",
    finalCallDetails: "Index weight data offering is like competitors, with no clearly validated gap or differentiation issue identified.",
    sources: [
      "https://www.msci.com/indexes",
      "https://www.lseg.com/en/ftse-russell/indices",
    ],
  },
  {
    id: "web-ticker-license",
    subsidiary: "Saudi Exchange",
    relatedTeam: "Data",
    name: "Web Ticker License",
    client: "Data Vendors, Asset Managers",
    overview: "Unlock detailed market insights with Tick Data, offering historical intraday data for trades, orders, and cancelled orders. This comprehensive dataset enables precise analysis and informed decision-making for traders and asset managers.",
    keyFeatures: [
      "Comprehensive Market Insights: Access detailed historical data to analyse market behaviour and order flow",
      "Data-Driven Decisions: Facilitate back-testing strategies and conducting in-depth research for optimal trading outcomes",
      "Seamless Accessibility",
    ],
    directCompetitors: [
      "LSEG Tick History – historical tick-level data service covering many venues, consumed through web/API and cloud tooling",
      "Bloomberg – market data feed ecosystem (B-PIPE) commonly used to pull intraday tick and historical data",
      "FactSet – tick history competes on platform accessibility, integration, and analytics ecosystem",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Platform & Accessibility",
    competitionDetails: "Competitors mainly compete on how easily and flexibly users can access, integrate, and use tick/intraday data—rather than the data itself. Bloomberg provides market data through enterprise feeds (B-PIPE) and APIs.",
    summary: "Competition is about who delivers tick data in the most accessible, flexible, and integration-ready way (APIs, cloud, formats).",
    finalCall: "Stay Close",
    finalCallDetails: "Tick data delivery is simpler and less integration-focused; potential gap exists but not strongly validated as a disadvantage.",
    sources: [
      "https://professional.bloomberg.com/products/data/enterprise-catalog/real-time-data-feed/",
      "https://www.lseg.com/en/data-analytics/market-data/data-feeds/tick-history",
      "https://www.factset.com/solutions/data-solutions",
    ],
  },
  {
    id: "sukuk-bonds-listing",
    subsidiary: "Saudi Exchange",
    relatedTeam: "Listing",
    name: "Sukuk & Bonds Listing",
    client: "Issuers – Listed Entities",
    overview: "Raise capital efficiently with Sukuk, Sharia-compliant financial instruments that allow issuers to borrow funds while providing investors with predictable periodic returns. Tradable on the Saudi Exchange, Sukuk offer a lower-risk alternative to equities.",
    keyFeatures: [
      "Reduces Risk",
      "Provides Stable Returns",
      "Expands Funding Options",
      "Enhances Liquidity",
      "Offers Structuring Flexibility",
      "Supports Portfolio Diversification",
    ],
    directCompetitors: [
      "Sukuk Capital – arranges sukuk offerings through its platform, a direct substitute route to raising funds",
      "Dinar Investment Company – operates a platform that issues sukuk for companies",
      "Tarmeez Capital – offering and investment in debt instruments via Islamic sukuk",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Investor Access & Distribution Reach",
    competitionDetails: "Competitors mainly compete on how effectively issuances are distributed to investors and accessed by capital—not on the sukuk structure itself. Sukuk Capital, Dinar, and Tarmeez compete by offering targeted investor access via platforms/private networks. Saudi Exchange provides broad, open investor access through a regulated market.",
    summary: "Competition is about who can deliver broader and more effective access to investor capital.",
    finalCall: "Stay Close",
    finalCallDetails: "Private platforms offer alternative capital access routes, but exchange listing remains strong for scale and transparency.",
    sources: [
      "https://www.saudiexchange.sa/wps/portal/saudiexchange/products-services/sukuk-bonds",
      "https://sukuk.sa/about",
      "https://tarmeez.co/taliventures_ar",
    ],
  },
  {
    id: "reits-listing",
    subsidiary: "Saudi Exchange",
    relatedTeam: "Listing",
    name: "REITs Listing",
    client: "Asset Managers",
    overview: "Create and list Real Estate Investment Traded Funds (REITs) on the Saudi Exchange to unlock new capital opportunities. REITs enable developers and asset owners to pool income-generating real estate assets into a publicly traded fund.",
    keyFeatures: [
      "Stock-like Trading: Trades like common shares on the secondary market",
      "Profit Distribution: Mandated to distribute at least 90% of annual net profits to unit holders",
      "Income-Generating Assets: At least 75% of assets are in income-generating real estate",
      "Access to Real Estate: Provides investors with exposure to diversified real estate investments",
    ],
    directCompetitors: [
      "Aseel Capital – provides a Saudi-regulated path to pool and distribute real-estate fund opportunities",
      "Stake – offers investors real-estate exposure and income-style investing through a platform model",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Structuring & Issuance Flexibility",
    competitionDetails: "Competitors mainly compete on how flexibly real estate investments can be structured, packaged, and brought to investors. Platforms like Aseel Capital and Stake allow custom deal structuring, faster setup, and tailored investor terms.",
    summary: "Competition is about flexible deal structuring vs standardized listed REIT structures.",
    finalCall: "Stay Close",
    finalCallDetails: "Platform competitors offer flexible structuring; exchange REITs remain standardized, creating limited but non-critical competitive pressure.",
    sources: [
      "https://www.saudiexchange.sa/wps/portal/saudiexchange/products-services/reits",
      "https://investaseel.sa/",
      "https://getstake.com/",
    ],
  },

  // === Edaa Products ===
  {
    id: "employees-compliance",
    subsidiary: "Edaa",
    relatedTeam: "Issuer Relation",
    name: "Employees Compliance",
    client: "Members - Custodians",
    overview: "The Employees Compliance Service helps companies monitor and review their employees' trading activities in the Saudi Exchange. Provided through the Tadawulaty platform, this service ensures compliance, reduces risks, and improves oversight.",
    keyFeatures: [
      "Activity Monitoring: Tracks employee trading activities in the Saudi Exchange",
      "Portfolio Review: Enables comprehensive review of employee portfolios across brokerage houses",
      "Automated Reporting: Generates detailed reports on trading accounts for compliance officers",
      "Operational Efficiency: Reduces time required to monitor and manage employee trades",
    ],
    directCompetitors: [
      "Nasdaq SMARTS – a leading market surveillance platform used by exchanges, regulators, and market operators",
    ],
    indirectCompetitors: [
      "In-house employee-trading compliance tools or declarations – many custodians/CMIs handle monitoring internally",
    ],
    mainCompetitionComponent: "Monitoring Capability & Data Coverage",
    competitionDetails: "Competitors mainly compete on how effectively they can monitor employee trading activity and provide complete visibility across accounts. Edaa provides centralized market-wide visibility; competitors rely on fragmented or indirect data.",
    summary: "Competition is about who can provide the most complete and reliable visibility into employee trading activity.",
    finalCall: "Not Required",
    finalCallDetails: "Edaa provides centralized market-wide visibility; competitors rely on fragmented or indirect data, limiting clear competitive disadvantage.",
    sources: [
      "https://www.nasdaq.com/solutions/ir-intelligence/equity-surveillance-shareholder-analysis",
    ],
  },
  {
    id: "equity-registry-unlisted",
    subsidiary: "Edaa",
    relatedTeam: "Issuer Relation",
    name: "Equity Registry (Unlisted)",
    client: "Unlisted Securities",
    overview: "Edaa provides unlisted companies and funds with registration services identical to the services used by listed companies and funds.",
    keyFeatures: [
      "Electronic voting (e-voting)",
      "General Assembly",
      "International code (ISIN code)",
      "Shareholders report",
      "Transfer of share ownership",
      "Pledging of shares through brokerage firms",
      "Dividends distribution",
      "Corporate Action (increasing or decreasing capital, mergers, acquisitions, etc.)",
    ],
    directCompetitors: [],
    indirectCompetitors: [
      "Corporate secretarial firms – provide closest substitute to registry services for unlisted companies",
      "CMA Licensed Custodians – provide client-side safekeeping and reporting",
      "Law firms – can set up shareholder register formats and advise on governance",
    ],
    mainCompetitionComponent: "Flexibility vs Institutional Standardization",
    competitionDetails: "Competitors mainly compete on how lightweight and flexible registry/governance setup can be for unlisted companies. Edaa provides a fully standardized, exchange-grade registry system.",
    summary: "Competition is about flexible optional setup vs adopting institutional-grade registry infrastructure.",
    finalCall: "Not Required",
    finalCallDetails: "Edaa offers standardized registry services; alternatives provide flexibility, but no clear evidence of a critical competitive disadvantage.",
    sources: [
      "https://www.edaa.sa/wps/portal/edaa/services/unlistedissuersservices?locale=en",
    ],
  },
  {
    id: "paying-agent",
    subsidiary: "Edaa",
    relatedTeam: "Issuer Relation",
    name: "Paying Agent",
    client: "Asset Managers, Issuers – Listed Entities, Unlisted Securities",
    overview: "The Paying Agent service enables issuers to distribute dividends to their shareholders seamlessly. Through this service, Issuers can authorize Edaa to distribute cash dividends to shareholders through the Tadawulaty platform.",
    keyFeatures: [
      "Direct Portfolio Distribution: Ensures cash dividends are distributed directly to shareholder portfolios",
      "Confidentiality Assurance: Protects the confidentiality of shareholder registry and dividend information",
      "Comprehensive Reporting: Provides issuers with detailed and accurate online reports via Tadawulaty",
      "End-to-End Management: Handles the entire dividend distribution process for issuers",
    ],
    directCompetitors: [],
    indirectCompetitors: [
      "Banks & Custodians (SNB Capital, Al Rajhi, Riyad Bank) – running dividend payments and reconciliations",
    ],
    mainCompetitionComponent: "Dividend Distribution Control",
    competitionDetails: "Competitors mainly compete on who controls and executes the dividend distribution workflow. Banks compete by offering dividend payments as part of custody services. Edaa controls distribution at the central registry level.",
    summary: "Competition is about centralized registry-driven distribution vs account-based bank execution.",
    finalCall: "Not Required",
    finalCallDetails: "Difference is structural: custody-based vs centralized distribution; no clear competitive disadvantage identified.",
    sources: [
      "https://www.edaa.sa/wps/portal/edaa/services/listedissuerservices/dividendsdistribution?locale=en",
    ],
  },
  {
    id: "edaa-connect",
    subsidiary: "Edaa",
    relatedTeam: "Issuer Relation",
    name: "EdaaConnect",
    client: "Issuers, Asset Managers",
    overview: "Discover a streamlined approach to mutual fund investing with Edaa Connect. Serving as your all-inclusive platform, simplifying the process of exploring and investing in a diverse range of mutual funds offered by various Asset Management Companies.",
    keyFeatures: [
      "Performance Monitoring: Monitor your investment performance with ease",
      "Seamless Transactions: Subscribe, redeem through mobile or web platforms",
      "Access to Diverse Funds: Conveniently explore different types of Investment funds",
      "Easy Registration: Start your investment journey quickly and hassle-free",
    ],
    directCompetitors: [
      "Derayah 'Mutual Funds Supermarket' – one-stop platform offering access to mutual funds from multiple fund managers",
    ],
    indirectCompetitors: [
      "Aseel – Saudi CMA licensed platform offering access to investment funds",
    ],
    mainCompetitionComponent: "Platform Aggregation (Multi-Fund Access)",
    competitionDetails: "Competitors mainly compete on who can provide one platform with access to multiple fund managers. Platforms like Derayah and Aseel offer a 'fund marketplace' model. Edaa Connect competes with a centralized, infrastructure-backed approach linked to post-trade systems.",
    summary: "Competition is about who owns the investor entry point to access multiple funds (platform aggregation).",
    finalCall: "Not Required",
    finalCallDetails: "Edaa Connect aligns with market fund marketplace model; no clear validated gap versus competitors based on available evidence.",
    sources: [
      "https://web.derayah.com/ar/mutual-funds-super-market/",
      "https://www.edaa.sa/wps/portal/edaa/services/investorservices",
    ],
  },
  {
    id: "tawasul",
    subsidiary: "Edaa",
    relatedTeam: "Member Relation",
    name: "Tawasul",
    client: "Asset Managers, Issuers – Listed Entities",
    overview: "Tawasul is a vital investor relations service designed to maintain a productive and transparent relationship between listed companies and their shareholders. By leveraging diverse communication methods, including SMS notifications, Tawasul ensures effective and timely dissemination of important updates.",
    keyFeatures: [
      "Direct Communication: Send important updates directly to shareholders via SMS",
      "Enhanced Transparency: Keep shareholders informed about events and corporate developments",
      "Improved Investor Relations",
    ],
    directCompetitors: [],
    indirectCompetitors: [
      "Unifonic – provides transactional alerts/critical notifications with KSA compliance",
      "Msegat – provides SMS alerts/updates/OTP to customers",
      "Taqnyat – competes directly on SMS delivery capability (direct telco connectivity + API)",
    ],
    mainCompetitionComponent: "Communication Channel Control",
    competitionDetails: "Competitors mainly compete on who controls the shareholder communication channel. SMS providers offer API-based messaging infrastructure but lack direct linkage to shareholder data. Tawasul enables issuer-to-shareholder communication directly tied to registry data.",
    summary: "Competition is about generic messaging infrastructure vs shareholder-linked communication control.",
    finalCall: "Stay Close",
    finalCallDetails: "Competitors offer scalable SMS infrastructure; Tawasul differentiates via shareholder-linked targeting but has narrower use-case focus.",
    sources: [
      "https://www.unifonic.com/en/channels/sms",
      "https://msegat.com/sms/",
      "https://taqnyat.sa/ar/channels/sms/",
    ],
  },

  // === Wamid Products ===
  {
    id: "liqaa",
    subsidiary: "Wamid",
    relatedTeam: "Venture Team",
    name: "Liqaa",
    client: "Asset Managers, Issuers, Unlisted Securities, CMIs",
    overview: "Liqaa is a cutting-edge online meeting management platform, designed to revolutionize the way organizations conduct meetings. It offers a fully integrated solution that aligns with international standards, enabling secure, transparent, and efficient management of events.",
    keyFeatures: [
      "Livestreaming and Interactivity",
      "Enhanced Security and Transparency",
      "Customization and Branding",
      "Seamless Accessibility",
      "Language Support",
      "Reports and Recordings",
    ],
    directCompetitors: [
      "Jameeh – low-cost, basic AGM services with or without voting",
      "Ebana – affordable digital AGM solution with SMS invitations, voting, instant reporting, and Nafath integration",
      "Majles Tech – secure, government-oriented platform with strong authentication (2FA, OTP)",
      "Musahm – premium, full-service AGM platform offering end-to-end support",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "AGM Functionality Depth",
    competitionDetails: "Competitors mainly compete on how comprehensive and reliable their meeting and AGM management capabilities are. Platforms like Jameeh, Ebana, Majles Tech, and Musahm compete by offering core AGM features. Liqaa provides a fully integrated, enterprise-grade solution.",
    summary: "Competition is about depth and completeness of AGM functionality within one platform.",
    finalCall: "Not Required",
    finalCallDetails: "Liqaa provides comprehensive AGM features comparable to competitors, with no clearly validated competitive gap identified.",
    sources: [],
  },
  {
    id: "corporate-actions-events",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Corporate Actions & Events",
    client: "Clearing Members, Local Asset Managers, HFTs",
    overview: "Access a comprehensive database of corporate action information, events and announcements, with instant up-to-date insights and details on IPOs, M&A, stock splits, dividends and more. A single touch point for key data points on securities issued by more than 400 companies.",
    keyFeatures: [
      "Comprehensive Database",
      "Full Corporate Action File",
      "Corporate Action Update File & API",
      "Reports delivered daily via API and SFTP",
      "Email Alerts",
    ],
    directCompetitors: [
      "Argaam + Mubasher – publish Saudi-listed companies' corporate actions/events",
      "SIX Financial Information – institutional corporate actions data with global coverage",
      "S&P Global – managed corporate actions solution with broad international coverage",
      "Bloomberg – distributes corporate actions data as an enterprise feed/terminal",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Workflow Automation & STP",
    competitionDetails: "Competitors mainly compete on how well corporate actions data can be integrated into operational workflows and automated (Straight-Through Processing). LSEG, SIX, and S&P Global deliver fully structured, machine-readable data feeds that plug directly into custody, trading, and back-office systems.",
    summary: "Competition is about who enables the most seamless automation of corporate actions into client workflows (STP capability).",
    finalCall: "Stay Close",
    finalCallDetails: "Wamid offers strong automation, but global providers lead in standardized STP scale; gap exists but not critical.",
    sources: [],
  },
  {
    id: "investor-profile-activity-report",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Investor Profile Activity Report",
    client: "Issuers, International & Local Asset Managers, HFTs, Exchange Members",
    overview: "Comprehensive and easy-to-use tool to track daily & historical investors activities. The product provides deep insights on the underlying investors describing activities, behaviours, and preferences including profile information, trading data, and holdings.",
    keyFeatures: [
      "Investor Summary",
      "Trade Trends",
      "Trend Analytics",
      "Capital Flow Insights",
      "Demographics Data",
      "Flexible Delivery",
    ],
    directCompetitors: [
      "LSEG/Refinitiv – Ownership & Profiles / Ownership API with holdings + investor data",
      "Bloomberg – security ownership / holders & holdings datasets",
      "S&P Global – public ownership within its global coverage",
      "FactSet – institutional/fund/stakeholder ownership information for global equities",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Data Construction Methodology",
    competitionDetails: "Competitors mainly compete on how investor data is constructed and built. LSEG, Bloomberg, S&P, and FactSet build investor datasets by combining filings, disclosures, and fund holdings. Wamid's report is based on actual trading activity from the exchange.",
    summary: "Competition is about model/constructed ownership data vs actual trading activity data.",
    finalCall: "Stay Close",
    finalCallDetails: "Competitors use multi-source ownership models; Wamid relies on actual trading data, creating a differentiated but narrower dataset.",
    sources: [],
  },
  {
    id: "company-fundamentals",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Company Fundamentals",
    client: "Issuers, Local Asset Managers, HFTs",
    overview: "Access snapshot and historical financial fundamentals of Saudi issuers going back more than 20 years.",
    keyFeatures: [
      "Snapshot and historical financial fundamentals of Saudi issuers going back 20+ years",
      "Balance sheets, income statements, cash flow statements",
      "Earnings estimates, dividends, yields and key financial ratios",
    ],
    directCompetitors: [
      "Bloomberg – ownership/investor holdings datasets and tools",
      "S&P Capital IQ Pro – includes public ownership within global coverage (Saudi Arabia included)",
      "FactSet – institutional/fund/stakeholder ownership information for global equities",
      "LSEG/Refinitiv – Ownership & Profiles datasets and Ownership API",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Coverage Breadth (Public vs Private Global Depth)",
    competitionDetails: "Competitors mainly compete on how broad and complete their company coverage is—across public, private, and global markets. Bloomberg, Capital IQ, FactSet, and LSEG all provide fundamentals but differentiate on coverage scale and reach. Wamid offers deep, localized Saudi fundamentals while global players offer multi-country breadth.",
    summary: "Competition is about who has the widest and most complete company coverage (global + private), not just data format.",
    finalCall: "Needs Action",
    finalCallDetails: "Global providers offer broader multi-country and private coverage; Wamid is strong locally but lacks global depth and scalability.",
    sources: [
      "https://www.spglobal.com/marketintelligence/en/solutions/sp-capital-iq-pro",
      "https://data.bloomberglp.com/professional/sites/10/Fundamentals-Fact-Sheet.pdf",
    ],
  },
  {
    id: "historical-order-book",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Historical Order Book",
    client: "HFTs",
    overview: "Comprehensive Historical Market Data Products providing high-quality archival tick data, full order book depth, and reference files.",
    keyFeatures: [
      "Market By Price: Granular tick-by-tick quotes with up to 20 bid/ask levels",
      "Full Order Book: Access to high quality tick-by-tick quotes for the full depth",
      "Reference Files: Daily and historical reference files for all listed instruments",
      "TIP & ITCH Raw Feeds: Daily and historical access to TIP Raw Feed",
    ],
    directCompetitors: [
      "LSEG (Refinitiv) – selling historical tick + market depth data feeds",
      "Bloomberg – providing market depth/order book data through Bloomberg feeds",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Data Usability & Integration Readiness",
    competitionDetails: "Competitors mainly compete on how usable and ready-to-integrate the order book data is. LSEG and FactSet provide normalized, standardized datasets across markets. Wamid delivers raw, venue-specific data which is more precise but requires more internal processing.",
    summary: "Competition is about normalized, ready-to-use datasets vs raw exchange-native data.",
    finalCall: "Stay Close",
    finalCallDetails: "Competitors offer normalized datasets; Wamid provides raw data, increasing processing effort but not yet a critical competitive disadvantage.",
    sources: [],
  },
  {
    id: "issuer-pack",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Issuer Pack",
    client: "Issuers, Local Asset Managers, Local Brokers",
    overview: "Our Investor Relations solution provides integrated modules designed to enhance communication and support strategic decision-making through comprehensive insights.",
    keyFeatures: [
      "Price Performance Dashboard",
      "Issuer Pack Price Performance API",
      "Ownership & Behaviour Reports",
      "Interactive Dashboards: Intuitive, customizable dashboards for quick analysis",
      "Comprehensive Reports: Access various report formats including CSV, JSON, and XML",
      "API Integration: Seamlessly integrate data into existing systems for advanced analytics",
    ],
    directCompetitors: [
      "LSEG/Refinitiv – dedicated Ownership & Profiles / Ownership API",
      "Bloomberg – security ownership / holders & holdings datasets",
      "FactSet – institutional/fund/stakeholder ownership and float-related data",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Data Aggregation & Source Integration",
    competitionDetails: "Competitors mainly compete on how well they aggregate, normalize, and enrich ownership data from multiple sources. Bloomberg, LSEG, FactSet, and S&P build value by collecting ownership data from filings, funds, regulators, and multiple markets. Wamid Issuer Pack offers direct exchange-sourced ownership data.",
    summary: "Competition is about aggregated multi-source ownership intelligence vs single-source exchange-level data.",
    finalCall: "Stay Close",
    finalCallDetails: "Competitors aggregate multi-source ownership data; Wamid focuses on exchange data, creating a moderate but not critical competitive gap.",
    sources: [],
  },
  {
    id: "buy-side-pack",
    subsidiary: "Wamid",
    relatedTeam: "DMP Team",
    name: "Buy-Side Pack",
    client: "Exchange Members",
    overview: "Gain visibility into broker performance with anonymized benchmarking and execution analytics tailored for institutional investors and asset managers. Buy-Side Pack empowers buy-side participants to monitor and evaluate the execution quality of their brokers.",
    keyFeatures: [
      "Anonymized benchmarking reports",
      "Interactive dashboards",
      "Broker activity and market share tracking",
      "Trading efficiency analysis across portfolios",
      "Performance assessment tools",
    ],
    directCompetitors: [
      "Bloomberg BTCA – peer benchmarks built from aggregate 'community of contributors' to compare execution performance",
    ],
    indirectCompetitors: [],
    mainCompetitionComponent: "Best Execution Validation",
    competitionDetails: "Competitors mainly compete on how well they can prove execution quality (best execution). Bloomberg BTCA enables firms to measure, verify, and demonstrate execution performance against benchmarks for compliance and client reporting. Wamid Buy-Side Pack provides benchmarking insights but global TCA tools are positioned as formal validation tools.",
    summary: "Competition is about proving execution quality vs analysing it.",
    finalCall: "Stay Close",
    finalCallDetails: "Competitors emphasize execution validation, while Buy-Side Pack focuses on analytics; gap exists but not clearly critical.",
    sources: [
      "https://professional.bloomberg.com/products/trading/post-trade-services/btca/",
    ],
  },
];

export const getProductsBySubsidiary = (subsidiaryName: string): Product[] =>
  products.filter((p) => p.subsidiary === subsidiaryName);

export const getSubsidiaryById = (id: string): Subsidiary | undefined =>
  subsidiaries.find((s) => s.id === id);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getRagStats = () => {
  const notRequired = products.filter((p) => p.finalCall === "Not Required").length;
  const keepAnEye = products.filter((p) => p.finalCall === "Stay Close").length;
  const needAction = products.filter((p) => p.finalCall === "Needs Action").length;
  return { notRequired, keepAnEye, needAction, total: products.length };
};
