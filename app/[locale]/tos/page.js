import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

Zillow Scraper: Streamline Your Real Estate Data Analysis

Tired of Manually Collecting Zillow Data? Let Zillow Scraper Boost Your Productivity!

These Terms of Service ("Terms") govern your use of the Zillow Scraper website and service (collectively, the "Service"). By using our Service, you agree to these Terms.

What is Zillow Scraper?

Zillow Scraper is your ultimate real estate data assistant, extracting and organizing Zillow property information in seconds. Say goodbye to tedious manual data collection and hello to efficient property analysis!

Key Features of Zillow Scraper:

1. For Time-Pressed Real Estate Managers: Export comprehensive property data with just one click!
2. For Data-Driven Decision Making: Access a wealth of information for in-depth property analysis.
3. For Market Trend Analysis: Easily compare multiple properties and track market changes.
4. For Streamlined Workflows: Integrate exported data seamlessly into your existing analysis tools.

Zillow Scraper: Where Technology Meets Real Estate Intelligence

Our tool doesn't just scrape data - it organizes it into a user-friendly Excel format! Get instant access to crucial property information, including:

- Property IDs (zpid)
- Status (type and text)
- Time on Zillow
- Pricing (current, per sq ft, Zestimate, rent estimate)
- Property details (area, lot size, bedrooms, bathrooms)
- Full address information
- Geographic coordinates
- Broker and agent information
- Sales history
- Listing engagement metrics (view count, save count)
- And much more!

While we strive for accuracy, remember that Zillow Scraper is a tool to enhance your analysis, not replace professional judgment.

Data Usage and Privacy

The data you extract is for your professional use. We process your requests securely and don't store scraped data permanently. Your research and analysis remain confidential. For full details, check our Privacy Policy at [Your Privacy Policy URL].

Usage Guidelines

Zillow Scraper is for professional real estate managers and analysts. Please use the data responsibly and in compliance with Zillow's terms of service and applicable laws.

Intellectual Property

The data you extract is provided for your analysis. We may use anonymized usage data to improve our service, but your specific queries and extracted datasets remain your property.

Refund Policy

We offer a 30-day money-back guarantee. If you're not satisfied with Zillow Scraper, you can request a full refund within 30 days of purchase. This is contingent upon actual usage of the service within reasonable limits.

Governing Law

These Terms are governed by the laws of [Your Country/State].

Updates to Terms

We may update these Terms periodically. We'll notify you of any significant changes - probably not as exciting as a hot property listing, but important nonetheless!

Contact Us

Questions or concerns? We're here to help! Reach out to us at support@zillowscraper.site

Thank you for choosing Zillow Scraper - where data extraction meets real estate expertise!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
