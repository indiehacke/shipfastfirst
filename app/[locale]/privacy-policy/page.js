import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export async function generateMetadata({ params }) {
  return getSEOTags({
    title: `Privacy Policy | ${config.appName}`,
    canonicalUrlRelative: `/${params.locale}/privacy-policy`,
  });
}

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: ${new Date().toDateString()}

Privacy Policy for ZillowEase: Streamline Your Real Estate Data Analysis

Welcome to ZillowEase, the game-changing Zillow scraper that's transforming how real estate professionals gather and analyze property data. This Privacy Policy outlines how we protect your information as you use our ZillowEase service and website at [Your Website URL] (the "Service").

By using the Service, you're joining a community of savvy real estate managers. If you have any questions, please reach out before using the Service.

1. Information We Collect

1.1 Personal Data
We collect:
- Email: To keep your account running smoothly and send you updates on new features and market trends.
- Device Information: To ensure ZillowEase works flawlessly on your device.

1.2 Property Data Magic
Our Service uses advanced scraping technology to collect and organize Zillow property data. This happens in real-time, providing you with up-to-date information for your property analysis needs. We store this data securely for your convenience and quick access.

2. Why We Collect This Data

We use your data to:
- Supercharge your real estate analysis process
- Personalize your ZillowEase experience
- Keep you informed about new features to enhance your property research

3. Keeping Your Data Safe

Your privacy is our top priority, just like providing accurate property data! We don't share your personal data with third parties, except when necessary to keep ZillowEase running smoothly (e.g., cloud services). We use bank-level security to protect your information and property data interactions.

4. Service for Professional Use

ZillowEase is designed for professional real estate managers and analysts. We don't knowingly collect information from individuals under 18. If you believe someone under 18 has shared their info with us, please let us know immediately.

5. Updating Our Privacy Policy

We might update this policy as ZillowEase evolves. Any significant changes will be announced via email and posted here.

6. Get in Touch

Questions about this Privacy Policy? We're here to help:

Email: support@zillowscraper.site

For other inquiries, check out our Contact page.

7. Data Export and Analysis

ZillowEase allows you to export comprehensive property data with just one click, solving the common frustration of difficult data organization on Zillow. Our exported Excel spreadsheets include crucial information for your property analysis, such as:

- ZPID
- Status Type and Text
- Time on Zillow
- Price and Price per Square Foot
- Zestimate and Zestimate per Square Foot
- Rent Zestimate
- Property Area and Lot Size
- Bedrooms and Bathrooms
- Detailed Address Information
- Latitude and Longitude
- Broker Name
- Zillow Ownership Status
- Sale History
- Listing URL and Image
- Agent Details
- Recent Price Changes
- Days on Zillow
- View and Save Counts

This extensive data set empowers you to conduct in-depth property analysis efficiently, saving you time and enhancing your decision-making process.

8. Satisfaction Guarantee

We offer a 30-day money-back guarantee. If you're not completely satisfied with ZillowEase, you can request a refund within 30 days of purchase. Please note that you'll need to have used the service to be eligible for a refund.

By using ZillowEase, you're agreeing to this Privacy Policy. We're committed to helping you streamline your real estate data collection and analysis, securely and efficiently!`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
