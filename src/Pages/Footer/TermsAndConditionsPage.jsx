import { useState } from "react";
import ContactForm from "../../Components/ContactForm";
import ModalOverlay from "../../Components/ModalOverlay";
import "./PrivacyPolicy.css";
import Header from "../../Components/Header/Header";
import ParallaxHeroImage from "../../Components/ParallaxHeroImage/ParallaxHeroImage";
import Footer from "../../Components/Footer/Footer";

export const TermsAndConditionsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };
  return (
    <>
      <Header />
      <ParallaxHeroImage />
      <div id="policyContainer">
        <h1 id="h.tyye0vpr0u0u">
          <span>Terms and Conditions</span>
        </h1>
        <p>
          <span>TERMS OF USE</span>
        </p>
        <p>
          <span>AGREEMENT TO DIGITAL FORGE TECHNOLOGIES LLC LEGAL TERMS</span>
        </p>
        <p className="policyParagraph">
          <span>
            We are DigitalForge Technologies, doing business as DigitalForge-Tek
            ("Company," "we," "us," "our"), a company registered in Florida,
            United States at 6 West Park Ave. 1404, Lake Wales, FL 33853.
          </span>
        </p>
        <p className="policyParagraph">
          <span>
            We operate the website{" "}
            <a href="https://www.google.com/url?q=https://digitalforge-tek.com/&amp;sa=D&amp;source=editors&amp;ust=1709702087525581&amp;usg=AOvVaw134tvbPOp9sm0YBXdydzSy">
              https://digitalforge-tek.com/
            </a>
            (the "Site"), as well as any other related products and services
            that refer or link to these legal terms (the "Legal Terms")
            (collectively, the "Services").
          </span>
        </p>
        <p className="policyParagraph">
          <span>You can contact us by phone at 8639490039, email at </span>
          <span>
            {showContactForm && (
              <ModalOverlay
                onClose={handleCloseContactForm}
                showCloseButton={showContactForm}
              >
                <ContactForm />
              </ModalOverlay>
            )}
            <button onClick={setShowContactForm}>
              contact-us@digitalforge-tek.com
            </button>
          </span>
          <span>
            {" "}
            or by mail to 6 West Park Ave. 1404, Lake Wales, FL 33853, United
            States
          </span>
          <p>
            <span>
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you"),
              and Digital Forge Technologies, concerning your access to and use
              of the Services. You agree that by accessing the Services, you
              have read, understood, and agreed to be bound by all of these
              Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS,
              THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU
              MUST DISCONTINUE USE IMMEDIATELY.
            </span>
          </p>
          <p>
            <span>
              Supplemental terms and conditions or documents that may be posted
              on the Services from time to time are hereby expressly
              incorporated herein by reference. We reserve the right, in our
              sole discretion, to make changes or modifications to these Legal
              Terms from time to time. We will alert you about any changes by
              updating the "Last updated" date of these Legal Terms, and you
              waive any right to receive specific notice of each such change. It
              is your responsibility to periodically review these Legal Terms to
              stay informed of updates. You will be subject to, and will be
              deemed to have been made aware of and to have accepted, the
              changes in any revised Legal Terms by your continued use of the
              Services after the date such revised Legal Terms are posted.
            </span>
          </p>
          <p>
            <span>
              The Services are intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the Services.
            </span>
          </p>
          <p>
            <span>Indemnification</span>
          </p>
          <p>
            <span>
              You agree to indemnify and hold harmless Digital Forge
              Technologies LLC and its affiliates, officers, directors,
              employees, agents, and licensors, from and against any and all
              claims, damages, obligations, losses, liabilities, costs or debt,
              and expenses (including but not limited to attorney's fees)
              arising from:
            </span>
          </p>
          <ul>
            <li>
              Your use of and access to the Digital Forge Technologies LLC
              services.
            </li>
            <li>Your violation of any term of these Terms of Service.</li>
            <li>
              Your violation of any third-party right, including without
              limitation any copyright, property, or privacy right.
            </li>
            <li>
              Any claim that your use of the Digital Forge Technologies LLC
              services caused damage to a third party, including but not limited
              to copyright infringement.
            </li>
            <li>
              Any other party's access and use of the Service with your unique
              username, password, or other appropriate security code.
            </li>
          </ul>
          <p>
            <span>
              You further agree to reimburse Digital Forge Technologies LLC for
              any losses, damages, or expenses incurred as a result of your
              breach of the terms outlined in this section. This includes, but
              is not limited to, costs associated with investigating and
              remedying such breaches, as well as any legal fees incurred.
            </span>
          </p>
          <p>
            <span>
              This indemnification and reimbursement obligation will survive
              these Terms of Service and your use of the Digital Forge
              Technologies LLC services. You also agree that in the event of a
              dispute between you and Digital Forge Technologies LLC, you will
              not involve Digital Forge Technologies LLC in any litigation or
              dispute resolution unless Digital Forge Technologies LLC consents
              in writing, which consent may be withheld at Digital Forge
              Technologies LLC's sole discretion.
            </span>
          </p>
        </p>
        <p>
          <span>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </span>
        </p>
        <p>
          <span>TABLE OF CONTENTS</span>
        </p>

        <span>
          <a href="#services">1. OUR SERVICES</a>
        </span>

        <span>
          <a href="#rights">2. INTELLECTUAL PROPERTY RIGHTS</a>
        </span>

        <span>
          <a href="#representations">3. USER REPRESENTATIONS</a>
        </span>
        <span>
          <a className="c7" href="#registration">
            4. USER REGISTRATION
          </a>
        </span>

        <span className="c4">
          <a href="#products">5. PRODUCTS</a>
        </span>

        <span className="c4">
          <a href="#payments">6. PURCHASES AND PAYMENT</a>
        </span>

        <span className="c4">
          <a href="#subscriptions">7. SUBSCRIPTIONS</a>
        </span>

        <span className="c4">
          <a href="#refunds">8. REFUNDS POLICY</a>
        </span>

        <span className="c4">
          <a href="#software">9. SOFTWARE</a>
        </span>

        <span className="c4">
          <a href="#prohibited">10. PROHIBITED ACTIVITIES</a>
        </span>

        <span className="c4">
          <a href="#user">11. USER GENERATED CONTRIBUTIONS</a>
        </span>

        <span className="c4">
          <a href="#contribution">12. CONTRIBUTION LICENSE</a>
        </span>

        <span className="c4">
          <a href="#reviews">13. GUIDELINES FOR REVIEWS</a>
        </span>

        <span className="c4">
          <a href="#social">14. SOCIAL MEDIA</a>
        </span>

        <span className="c4">
          <a href="#services">15. SERVICES MANAGEMENT</a>
        </span>

        <span className="c4">
          <a href="#privacy">16. PRIVACY POLICY</a>
        </span>

        <span className="c4">
          <a href="#copyright">17. COPYRIGHT INFRINGEMENTS</a>
        </span>

        <span className="c4">
          <a href="#termination">18. TERM AND TERMINATION</a>
        </span>

        <span className="c4">
          <a href="#modifications">19. MODIFICATIONS AND INTERRUPTIONS</a>
        </span>

        <span className="c4">
          <a href="#governing">20. GOVERNING LAW</a>
        </span>

        <span className="c4">
          <a href="#dispute">21. DISPUTE RESOLUTION</a>
        </span>

        <span className="c4">
          <a href="#corrections">22. CORRECTIONS</a>
        </span>

        <span className="c4">
          <a href="#disclaimer">23. DISCLAIMER</a>
        </span>
        <span className="c4">
          <a href="#limitations">24. LIMITATIONS OF LIABILITY</a>
        </span>

        <span className="c4">
          <a href="#indemnification">25. INDEMNIFICATION</a>
        </span>

        <span className="c4">
          <a href="#user-data">26. USER DATA</a>
        </span>

        <span className="c4">
          <a href="#electronic">
            27. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </a>
        </span>

        <span className="c4">
          <a href="#california">28. CALIFORNIA USERS AND RESIDENTS</a>
        </span>

        <span className="c4">
          <a href="#misc">29. MISCELLANEOUS</a>
        </span>

        <span className="c4">
          <a href="#contact">30. CONTACT US</a>
        </span>

        <h3 id="services" className="policyParagraph c11">
          1. OUR SERVICES
        </h3>

        <span className="policyParagraph">
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </span>

        <span className="policyParagraph">
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </span>

        <span className="policyParagraph c39 c33 c22">
          The information provided through our Services is intended solely for
          use by individuals or entities in jurisdictions where such use is
          lawful and does not violate any applicable regulations, including
          those of Florida, United States. Users accessing our Services from
          locations outside of our primary jurisdiction do so at their own
          discretion and are responsible for ensuring compliance with local
          laws.
        </span>

        <span className="policyParagraph c39 c33 c22">
          Please note that our Services are not specifically tailored to meet
          industry-specific regulations such as the Health Insurance Portability
          and Accountability Act (HIPAA) or the Federal Information Security
          Management Act (FISMA). Therefore, if your interactions with our
          Services are subject to such regulations, we advise against their use.
          Additionally, users are prohibited from utilizing our Services in any
          manner that would violate the Gramm-Leach-Bliley Act (GLBA).
        </span>

        <span className="policyParagraph c33 c22 c39">
          We recognize the importance of legal compliance and encourage users to
          seek appropriate guidance or legal advice if they have concerns
          regarding the applicability of specific regulations to their use of
          our Services.
        </span>

        <span className="policyParagraph c39 c22 c46"></span>

        <h3 id="rights" className="policyParagraph c11">
          2. INTELLECTUAL PROPERTY RIGHTS
        </h3>

        <span className="policyParagraph c28 c27">
          Our intellectual property
        </span>

        <p className="policyParagraph c0">
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &quot;Content&quot;), as
          well as the trademarks, service marks, and logos contained therein
          (the &quot;Marks&quot;).
        </p>
        <p className="policyParagraph c13">
          <span>
            Our Content and Marks are protected by copyright and trademark laws
            (and various other intellectual property rights and unfair
            competition laws) and treaties in the United States and around the
            world.
          </span>
          <br></br>
          The Content and Marks are provided in or through the Services &quot;AS
          IS&quot; for your personal, non-commercial use or internal business
          purpose only.
        </p>

        <p className="policyParagraph c13">
          <h3 className="policyParagraph c28 c27">Your use of our Services</h3>
        </p>
        <p className="policyParagraph">
          <span>
            Subject to your compliance with these Legal Terms, including the
            PROHIBITED ACTIVITIES section below, we grant you a non-exclusive,
            non-transferable, revocable license to:
          </span>
          <ul>
            <li>access the Services; and</li>
            <li>
              download or print a copy of any portion of the Content to which
              you have properly gained access.
            </li>
          </ul>
          <p>
            solely for your personal, non-commercial use or internal business
            purpose.
          </p>
          <p>
            <span>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </span>
          </p>
          <p>
            <span>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to:
            </span>
          </p>
        </p>

        <span className="policyParagraph c40">
          <button onClick={setShowContactForm}>
            contact-us@digitalforge-tek.com
          </button>
        </span>
        <span className="policyParagraph c0">
          If we ever grant you the permission to post, reproduce, or publicly
          display any part of our Services or Content, you must identify us as
          the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on
          posting, reproducing, or displaying our Content.
        </span>

        <p className="policyParagraph">
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
          <br></br>
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </p>

        <h3 className="policyParagraph c19">
          Your submissions and contributions
        </h3>

        <p className="policyParagraph c13">
          Please review this section and the PROHIBITED ACTIVITIES section
          carefully prior to using our Services to understand the (a) rights you
          give us and (b) obligations you have when you post or upload any
          content through the Services.
        </p>
        <span className="policyParagraph c28 c22">Submissions:</span>
        <span className="policyParagraph">
          &nbsp;By directly sending us any question, comment, suggestion, idea,
          feedback, or other information about the Services
          (&quot;Submissions&quot;), you agree to assign to us all intellectual
          property rights in such Submission. You agree that we shall own this
          Submission and be entitled to its unrestricted use and dissemination
          for any lawful purpose, commercial or otherwise, without
          acknowledgment or compensation to you.
        </span>

        <span>Contributions:</span>
        <span className="policyParagraph">
          &nbsp;The Services may invite you to chat, contribute to, or
          participate in blogs, message boards, online forums, and other
          functionality during which you may create, submit, post, display,
          transmit, publish, distribute, or broadcast content and materials to
          us or through the Services, including but not limited to text,
          writings, video, audio, photographs, music, graphics, comments,
          reviews, rating suggestions, personal information, or other material
          (&quot;Contributions&quot;). Any Submission that is publicly posted
          shall also be treated as a Contribution.
        </span>

        <p className="policyParagraph c13">
          You understand that Contributions may be viewable by other users of
          the Services.
        </p>

        <span className="policyParagraph c28 c22">
          When you post Contributions, you grant us a license (including use of
          your name, trademarks, and logos): By posting any Contributions, you
          grant us an unrestricted, unlimited, irrevocable, perpetual,
          non-exclusive, transferable, royalty-free, fully-paid, worldwide
          right, and license to: use, copy, reproduce, distribute, sell, resell,
          publish, broadcast, retitle, store, publicly perform, publicly
          display, reformat, translate, excerpt (in whole or in part), and
          exploit your Contributions (including, without limitation, your image,
          name, and voice) for any purpose, commercial, advertising, or
          otherwise, to prepare derivative works of, or incorporate into other
          works, your Contributions, and to sublicense the licenses granted in
          this section. Our use and distribution may occur in any media formats
          and through any media channels.
        </span>

        <span className="policyParagraph">
          This license includes our use of your name, company name, and
          franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide.
        </span>

        <span className="policyParagraph c28 c22">
          You are responsible for what you post or upload:
        </span>
        <span className="policyParagraph">
          By sending us Submissions and/or posting Contributions through any
          part of the Services or making Contributions accessible through the
          Services by linking your account through the Services to any of your
          social networking accounts, you:
          <ul className="policyParagraph">
            <li>
              confirm that you have read and agree with our &quot; PROHIBITED
              ACTIVITIES and will not post, send, publish, upload, or transmit
              through the Services any Submission nor post any Contribution that
              is illegal, harassing, hateful, harmful, defamatory, obscene,
              bullying, abusive, discriminatory, threatening to any person or
              group, sexually explicit, false, inaccurate, deceitful, or
              misleading;
            </li>
            <li>
              to the extent permissible by applicable law, waive any and all
              moral rights to any such Submission and/or Contribution;
            </li>
            <li>
              warrant that any such Submission and/or Contributions are original
              to you or that you have the necessary rights and licenses to
              submit such Submissions and/or Contributions and that you have
              full authority to grant us the above-mentioned rights in relation
              to your Submissions and/or Contributions; and
            </li>
            <li>
              warrant and represent that your Submissions and/or Contributions
              do not constitute confidential information.
            </li>
          </ul>
        </span>

        <span className="policyParagraph c2">
          You are solely responsible for your Submissions and/or Contributions
          and you expressly agree to reimburse us for any and all losses that we
          may suffer because of your breach of (a) this section, (b) any third
          party&rsquo;s intellectual property rights, or (c) applicable law.
        </span>

        <span className="policyParagraph c28 c27">
          We may remove or edit your Content:
        </span>
        <span className="policyParagraph c2">
          &nbsp;Although we have no obligation to monitor any Contributions, we
          shall have the right to remove or edit any Contributions at any time
          without notice if in our reasonable opinion we consider such
          Contributions harmful or in breach of these Legal Terms. If we remove
          or edit any such Contributions, we may also suspend or disable your
          account and report you to the authorities.
        </span>

        <span className="policyParagraph c3">Copyright infringement</span>

        <span className="policyParagraph c27 c35">
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Services infringes upon
          any copyright you own or control, please immediately refer to the
          COPYRIGHT INFRINGEMENTS section below.
        </span>

        <h3 id="representations" className="policyParagraph c11">
          3. USER REPRESENTATIONS
        </h3>

        <p className="policyParagraph c13">
          <span>By using the Services, you represent and warrant that: </span>
        </p>
        <ul>
          <li>
            <span>
              All registration information you submit will be true, accurate,
              current, and complete;{" "}
            </span>
          </li>
          <li>
            <span>
              You will maintain the accuracy of such information and promptly
              update such registration information as necessary;
            </span>
          </li>
          <li>
            <span>
              You have the legal capacity and you agree to comply with these
              Legal Terms;
            </span>
          </li>
          <li>
            <span>
              You are not a minor in the jurisdiction in which you reside;{" "}
            </span>
          </li>
          <li>
            You will not access the Services through automated or non-human
            means, whether through a bot, script or otherwise;{" "}
          </li>
          <li>
            You will not use the Services for any illegal or unauthorized
            purpose;{" "}
          </li>
          <li>
            Your use of the Services will not violate any applicable law or
            regulation.
          </li>
        </ul>

        <span className="policyParagraph c0">
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </span>

        <span className="policyParagraph c31 c11">4. USER REGISTRATION</span>

        <span className="policyParagraph c0">
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </span>

        <span className="policyParagraph c11">5. PRODUCTS</span>

        <span className="policyParagraph c2">
          All products are subject to availability. We reserve the right to
          discontinue any products at any time for any reason. Prices for all
          products are subject to change.
        </span>

        <span className="policyParagraph c31 c11">
          6. PURCHASES AND PAYMENT
        </span>
        <span className="policyParagraph c0">
          We accept the following forms of payment:
          <ul>
            <li>PayPal</li>
            <li>Visa</li>
            <li>Mastercard</li>
          </ul>
        </span>

        <p className="policyParagraph c13">
          <span>
            You agree to provide current, complete, and accurate purchase and
            account information for all purchases made via the Services. You
            further agree to promptly update account and payment information,
            including email address, payment method, and payment card expiration
            date, so that we can complete your transactions and contact you as
            needed. Sales tax will be added to the price of purchases as deemed
            required by us. We may change prices at any time. All payments shall
            be in US dollars.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            You agree to pay all charges at the prices then in effect for your
            purchases and any applicable shipping fees, and you authorize us to
            charge your chosen payment provider for any such amounts upon
            placing your order. We reserve the right to correct any errors or
            mistakes in pricing, even if we have already requested or received
            payment.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            We reserve the right to refuse any order placed through the
            Services. We may, in our sole discretion, limit or cancel quantities
            purchased per person, per household, or per order. These
            restrictions may include orders placed by or under the same customer
            account, the same payment method, and/or orders that use the same
            billing or shipping address. We reserve the right to limit or
            prohibit orders that, in our sole judgment, appear to be placed by
            dealers, resellers, or distributors.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>Billing and Renewal</span>
        </p>

        <span className="policyParagraph">
          Your subscription will continue and automatically renew unless
          canceled. You consent to our charging your payment method on a
          recurring basis without requiring your prior approval for each
          recurring charge, until such time as you cancel the applicable order.
          The length of your billing cycle is monthly.
        </span>

        <span className="policyParagraph c28 c22">Cancellation</span>

        <span className="policyParagraph c2">
          You can cancel your subscription at any time by contacting us using
          the contact information provided below. Your cancellation will take
          effect at the end of the current paid term. If you have any questions
          or are unsatisfied with our Services, please email us at
          Dustin@digitalforge-tek.com.
        </span>

        <span className="policyParagraph c28 c22">Fee Changes</span>

        <span>
          We may, from time to time, make changes to the subscription fee and
          will communicate any price changes to you in accordance with
          applicable law.
        </span>

        <span className="policyParagraph c11">8. REFUNDS POLICY</span>

        <span>All sales are final and no refund will be issued.</span>

        <span className="policyParagraph c11">9. SOFTWARE</span>

        <span className="policyParagraph">
          We may include software for use in connection with our Services. If
          such software is accompanied by an end user license agreement
          (&quot;EULA&quot;), the terms of the EULA will govern your use of the
          software. If such software is not accompanied by a EULA, then we grant
          to you a non-exclusive, revocable, personal, and non-transferable
          license to use such software solely in connection with our services
          and in accordance with these Legal Terms. Any software and any related
          documentation is provided &quot;AS IS&quot; without warranty of any
          kind, either express or implied, including, without limitation, the
          implied warranties of merchantability, fitness for a particular
          purpose, or non-infringement. You accept any and all risk arising out
          of use or performance of any software. You may not reproduce or
          redistribute any software except in accordance with the EULA or these
          Legal Terms.
        </span>

        <span className="policyParagraph c11">10. PROHIBITED ACTIVITIES</span>

        <span className="policyParagraph">
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </span>

        <span className="policyParagraph c0">
          <h3>As a user of the Services, you agree not to:</h3>
          <ul>
            <li>
              Systematically retrieve data or other content from the Services to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Services, including features that prevent or
              restrict the use or copying of any Content or enforce limitations
              on the use of the Services and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Services.
            </li>
            <li>
              Use any information obtained from the Services in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Use the Services in a manner inconsistent with any applicable laws
              or regulations.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party&rsquo;s uninterrupted use
              and enjoyment of the Services or modifies, impairs, disrupts,
              alters, or interferes with the use, features, functions,
              operation, or maintenance of the Services.
            </li>
          </ul>
          <ul>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats (&quot;gifs&quot;), 1&times;1 pixels,
              web bugs, cookies, or other similar devices (sometimes referred to
              as &quot;spyware&quot; or &quot;passive collection
              mechanisms&quot; or &quot;pcms&quot;).
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services
              or the networks or services connected to the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Services to you.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent
              or restrict access to the Services, or any portion of the
              Services.
            </li>
            <li>
              Copy or adapt the Services&#39; software, including but not
              limited to Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile,
              disassemble, or reverse engineer any of the software comprising or
              in any way making up a part of the Services.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Services, or
              use or launch any unauthorized script or other software.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Services.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or
              otherwise use the Services and/or the Content for any
              revenue-generating endeavor or commercial enterprise.
            </li>
            <li>
              Use the Services to advertise or offer to sell goods and services.
            </li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
        </span>

        <p className="policyParagraph c13">
          <span className="policyParagraph c31 c11">
            11. USER GENERATED CONTRIBUTIONS
          </span>
        </p>

        <span className="policyParagraph c19">Nature of Contributions:</span>

        <p className="policyParagraph c18 c17">
          The Services may invite you to chat, contribute to, or participate in
          various interactive features, including but not limited to blogs,
          message boards, and online forums. You may have the opportunity to
          create, submit, post, display, transmit, perform, publish, distribute,
          or broadcast content and materials (&quot;Contributions&quot;) to us
          or on the Services. Please note that contributions may be viewable by
          other users of the Services and through third-party websites. As such,
          any contributions you transmit may be treated as non-confidential and
          non-proprietary.
        </p>
        <p className="policyParagraph c6"></p>
        <h2 className="policyParagraph c18 c17">Responsibilities of Users:</h2>
        <p className="policyParagraph c18 c17">
          <h3>
            When you create or make available any Contributions, you thereby
            represent and warrant that:
          </h3>
          <ul>
            <li>
              The creation, distribution, transmission, public display, or
              performance, and the accessing, downloading, or copying of your
              Contributions do not and will not infringe the proprietary rights,
              including but not limited to the copyright, patent, trademark,
              trade secret, or moral rights of any third party.
            </li>
            <li>
              You are the creator and owner of or have the necessary licenses,
              rights, consents, releases, and permissions to use and to
              authorize us, the Services, and other users of the Services to use
              your Contributions in any manner contemplated by the Services and
              these Legal Terms.
            </li>
            <li>
              You have the written consent, release, and/or permission of each
              and every identifiable individual person in your Contributions to
              use the name or likeness of each and every such identifiable
              individual person to enable inclusion and use of your
              Contributions in any manner contemplated by the Services and these
              Legal Terms.
            </li>
            <li>
              Your Contributions are not false, inaccurate, or misleading.
            </li>
            <li>
              Your Contributions are not unsolicited or unauthorized
              advertising, promotional materials, pyramid schemes, chain
              letters, spam, mass mailings, or other forms of solicitation.
            </li>
            <li>
              Your Contributions are not obscene, lewd, lascivious, filthy,
              violent, harassing, libelous, slanderous, or otherwise
              objectionable (as determined by us).
            </li>
            <li>
              Your Contributions do not ridicule, mock, disparage, intimidate,
              or abuse anyone.
            </li>
            <li>
              Your Contributions are not used to harass or threaten (in the
              legal sense of those terms) any other person and to promote
              violence against a specific person or class of people.
            </li>
            <li>
              Your Contributions do not violate any applicable law, regulation,
              or rule.
            </li>
            <li>
              Your Contributions do not violate the privacy or publicity rights
              of any third party.
            </li>
            <li>
              Your Contributions do not violate any applicable law concerning
              child pornography or otherwise intended to protect the health or
              well-being of minors.
            </li>
            <li>
              Your Contributions do not include any offensive comments that are
              connected to race, national origin, gender, sexual preference, or
              physical handicap.
            </li>
            <li>
              Your Contributions do not otherwise violate, or link to material
              that violates, any provision of these Legal Terms or any
              applicable law or regulation.
            </li>
          </ul>
        </p>

        <p className="policyParagraph c18 c17">
          <span className="policyParagraph c19">Legal Compliance:</span>
        </p>

        <span className="policyParagraph">
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your access to the Services.
        </span>

        <p className="policyParagraph c13">
          <span className="policyParagraph c31 c11">
            12. CONTRIBUTION LICENSE
          </span>
        </p>

        <span className="policyParagraph c0">
          By posting your Contributions to any part of the Services or making
          Contributions accessible to the Services by linking your account from
          the Services to any of your social networking accounts, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          commercial, advertising, or otherwise, and to prepare derivative works
          of, or incorporate into other works, such Contributions, and grant and
          authorize sublicenses of the foregoing. The use and distribution may
          occur in any media formats and through any media channels.
        </span>

        <span className="policyParagraph c0">
          This license will apply to any form, media, or technology now known or
          hereafter developed, and includes our use of your name, company name,
          and franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions, and you
          warrant that moral rights have not otherwise been asserted in your
          Contributions.
        </span>

        <span className="policyParagraph c0">
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </span>

        <span className="policyParagraph c0"></span>

        <p className="policyParagraph c6">
          <span className="policyParagraph c19"></span>
        </p>
        <p className="policyParagraph c18 c17">
          <span className="policyParagraph c19">
            OUR RIGHTS REGARDING CONTRIBUTIONS
          </span>
        </p>
        <div className="policyParagraph c18 c17">
          <p>We have the right, in our sole and absolute discretion, to:</p>
          <ul>
            <li>Edit, redact, or otherwise change any Contributions.</li>
            <li>
              Re-categorize any Contributions to place them in more appropriate
              locations on the Services.
            </li>
            <li>
              <span>
                Pre-screen or delete any Contributions at any time and for any
                reason, without notice. We have no obligation to monitor your
                Contributions.
              </span>
            </li>
          </ul>
        </div>
        <p className="policyParagraph c13">
          <span className="policyParagraph c11">
            13. GUIDELINES FOR REVIEWS
          </span>
        </p>

        <h3 className="policyParagraph">
          We may provide you areas on the Services to leave reviews or ratings.
          When posting a review, you must comply with the following criteria:
        </h3>
        <span className="policyParagraph c0">
          <ul>
            <li>
              Firsthand Experience: You should have firsthand experience with
              the person/entity being reviewed.
            </li>
            <li>
              Respectful Language: Reviews should not contain offensive
              profanity, or abusive, racist, offensive, or hateful language.
            </li>
            <li>
              Non-Discriminatory: Reviews should not contain discriminatory
              references based on religion, race, gender, national origin, age,
              marital status, sexual orientation, or disability.
            </li>
            <li>
              Legal Compliance: Reviews should not contain references to illegal
              activity.
            </li>
            <li>
              No Affiliation with Competitors: You should not be affiliated with
              competitors if posting negative reviews.
            </li>
            <li>
              Avoid Legal Conclusions: Do not make any conclusions as to the
              legality of conduct.
            </li>
            <li>
              Truthfulness: Reviews should not include any false or misleading
              statements.
            </li>
            <li>
              No Review Campaigns: You may not organize a campaign encouraging
              others to post reviews, whether positive or negative.
            </li>
          </ul>
        </span>

        <span className="policyParagraph c0">
          We may accept, reject, or remove reviews at our sole discretion. We
          have absolutely no obligation to screen reviews or to delete reviews,
          even if anyone considers reviews objectionable or inaccurate. Reviews
          are not endorsed by us and do not necessarily represent our opinions
          or the views of any of our affiliates or partners. We do not assume
          liability for any review or for any claims, liabilities, or losses
          resulting from any review. By posting a review, you hereby grant to us
          a perpetual, non-exclusive, worldwide, royalty-free, fully paid,
          assignable, and sublicensable right and license to reproduce, modify,
          translate, transmit by any means, display, perform, and/or distribute
          all content relating to the review.
        </span>

        <span className="policyParagraph c11">14. SOCIAL MEDIA</span>

        <span className="policyParagraph c0">
          As part of the functionality of the Services, you may link your
          account with online accounts you have with third-party service
          providers (each such account, a &quot;Third-Party Account&quot;) by
          either:
          <ol start="1">
            <li>
              Providing your Third-Party Account login information through the
              Services; or
            </li>
            <li>
              Allowing us to access your Third-Party Account, as is permitted
              under the applicable terms and conditions that govern your use of
              each Third-Party Account.
            </li>
          </ol>
          You represent and warrant that you are entitled to disclose your
          Third-Party Account login information to us and/or grant us access to
          your Third-Party Account, without breach by you of any of the terms
          and conditions that govern your use of the applicable Third-Party
          Account, and without obligating us to pay any fees or making us
          subject to any usage limitations imposed by the third-party service
          provider of the Third-Party Account.
        </span>

        <span className="policyParagraph c0">
          By granting us access to any Third-Party Accounts, you understand
          that:
          <ol start="1">
            <li>
              We may access, make available, and store (if applicable) any
              content that you have provided to and stored in your Third-Party
              Account (the &quot;Social Network Content&quot;) so that it is
              available on and through the Services via your account, including
              without limitation any friend lists.
            </li>
            <li>
              We may submit to and receive from your Third-Party Account
              additional information to the extent you are notified when you
              link your account with the Third-Party Account.
            </li>
          </ol>
        </span>
        <span className="policyParagraph">
          Depending on the Third-Party Accounts you choose and subject to the
          privacy settings that you have set in such Third-Party Accounts,
          personally identifiable information that you post to your Third-Party
          Accounts may be available on and through your account on the Services.
        </span>

        <span className="policyParagraph">
          Please note that if a Third-Party Account or associated service
          becomes unavailable or our access to such Third-Party Account is
          terminated by the third-party service provider, then Social Network
          Content may no longer be available on and through the Services. You
          will have the ability to disable the connection between your account
          on the Services and your Third-Party Accounts at any time.
        </span>

        <span className="policyParagraph">
          PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE
          PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY
          BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS.
        </span>

        <span className="policyParagraph">
          We make no effort to review any Social Network Content for any
          purpose, including but not limited to, for accuracy, legality, or
          non-infringement, and we are not responsible for any Social Network
          Content.
        </span>

        <span className="policyParagraph">
          You acknowledge and agree that we may access your email address book
          associated with a Third-Party Account and your contacts list stored on
          your mobile device or tablet computer solely for purposes of
          identifying and informing you of those contacts who have also
          registered to use the Services.
        </span>

        <span className="policyParagraph">
          You can deactivate the connection between the Services and your
          Third-Party Account by contacting us using the contact information
          below or through your account settings (if applicable). We will
          attempt to delete any information stored on our servers that was
          obtained through such a Third-Party Account, except the username and
          profile picture that become associated with your account.
        </span>

        <div className="policyParagraph c13">
          <p>
            <span>15. SERVICES MANAGEMENT</span>
          </p>

          <span>We reserve the right, but not the obligation, to:</span>

          <ol>
            <li>
              <span>
                Monitor the Services for violations of these Legal Terms.
              </span>
            </li>
            <li>
              <span>
                Take appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities.
              </span>
            </li>
            <li>
              <span>
                Refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof, in our sole discretion and
                without limitation.
              </span>
            </li>
            <li>
              <span>
                Remove from the Services or otherwise disable all files and
                content that are excessive in size or are in any way burdensome
                to our systems, in our sole discretion and without notice or
                liability.
              </span>
            </li>
            <li>
              <span>
                Manage the Services in a manner designed to protect our rights
                and property and to facilitate the proper functioning of the
                Services.
              </span>
            </li>
          </ol>

          <p className="policyParagraph c13">
            <span className="policyParagraph c11">16. PRIVACY POLICY</span>
          </p>

          <span>
            We care about data privacy and security. By using the Services, you
            agree to be bound by our Privacy Policy which is posted on the
            Services and incorporated into these Legal Terms. Please be advised
            the Services are hosted in the United States. &nbsp;It&rsquo;s
            important to note that the Services are hosted in the United States.
            If you access the Services from any other region of the world with
            laws or other requirements governing personal data collection, use,
            or disclosure that differ from applicable laws in the United States,
            then through your continued use of the Services, you are
            transferring your data to the United States. By doing so, you
            expressly consent to have your data transferred to and processed in
            the United States.
          </span>
        </div>

        <p className="policyParagraph c13">
          <span>17. COPYRIGHT INFRINGEMENTS</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            We hold a deep respect (for the intellectual property rights of
            others. If you believe that any material available on or through the
            Services infringes upon any copyright you own or control, please
            immediately notify us using the contact information provided below
            (a &quot;Notification&quot;). A copy of your Notification will be
            sent to the person who posted or stored the material addressed in
            the Notification. It&rsquo;s important to note that pursuant to
            applicable law, you may be held liable for damages if you make
            material misrepresentations in a Notification. Thus, if you are
            uncertain that material located on or linked to by the Services
            infringes your copyright, we recommend seeking guidance from legal
            counsel before submitting a Notification.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>18. TERM AND TERMINATION</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            These Legal Terms shall remain in full force and effect while you
            use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
            LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
            WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
            (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
            REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
            ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
            TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
            USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY
            CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING,
            IN OUR SOLE DISCRETION.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party. In addition to
            terminating or suspending your account, we reserve the right to take
            appropriate legal action, including without limitation pursuing
            civil, criminal, and injunctive redress.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11">
            19. MODIFICATIONS AND INTERRUPTIONS
          </span>
        </p>
        <p className="policyParagraph c13">
          <span>
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We also reserve the right to modify or
            discontinue all or part of the Services without notice at any time.
            We will not be liable to you or any third party for any
            modification, price change, suspension, or discontinuance of the
            Services.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            We cannot guarantee the Services will be available at all times. We
            may experience hardware, software, or other problems or need to
            perform maintenance related to the Services, resulting in
            interruptions, delays, or errors. We reserve the right to change,
            revise, update, suspend, discontinue, or otherwise modify the
            Services at any time or for any reason without notice to you. You
            agree that we have no liability whatsoever for any loss, damage, or
            inconvenience caused by your inability to access or use the Services
            during any downtime or discontinuance of the Services. Nothing in
            these Legal Terms will be construed to obligate us to maintain and
            support the Services or to supply any corrections, updates, or
            releases in connection therewith.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11">20. GOVERNING LAW</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            These Legal Terms and your use of the Services are governed by and
            construed in accordance with the laws of the State of Florida
            applicable to agreements made and to be entirely performed within
            the State of Florida, without regard to its conflict of law
            principles.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c31 c11">
            21. DISPUTE RESOLUTION
          </span>
        </p>
        <p className="policyParagraph c13">
          <span className="policyParagraph c27 c28">Informal Negotiations</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            To expedite resolution and control the cost of any dispute,
            controversy, or claim related to these Legal Terms (each a
            &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;)
            brought by either you or us (individually, a &quot;Party&quot; and
            collectively, the &quot;Parties&quot;), the Parties agree to first
            attempt to negotiate any Dispute (except those Disputes expressly
            provided below) informally for at least ninety (90) days before
            initiating arbitration. Such informal negotiations commence upon
            written notice from one Party to the other Party.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c3">Binding Arbitration</span>
        </p>

        <p className="policyParagraph c13">
          <span>
            If the Parties are unable to resolve a Dispute through informal
            negotiations, the Dispute (except those Disputes expressly excluded
            below) will be finally and exclusively resolved by binding
            arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD
            HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The
            arbitration shall be commenced and conducted under the Commercial
            Arbitration Rules of the American Arbitration Association
            (&quot;AAA&quot;) and, where appropriate, the AAA&rsquo;s
            Supplementary Procedures for Consumer Related Disputes (&quot;AAA
            Consumer Rules&quot;), both of which are available at the
          </span>

          <span className="policyParagraph c22 c41">
            <a href="https://www.google.com/url?q=http://www.adr.org/&amp;sa=D&amp;source=editors&amp;ust=1709702087548446&amp;usg=AOvVaw2doy5axu-6GrawrsBxbxG0">
              American Arbitration Association (AAA) website
            </a>
          </span>

          <span>
            &nbsp;Your arbitration fees and your share of arbitrator
            compensation shall be governed by the AAA Consumer Rules and, where
            appropriate, limited by the AAA Consumer Rules. The arbitration may
            be conducted in person, through the submission of documents, by
            phone, or online. The arbitrator will make a decision in writing,
            but need not provide a statement of reasons unless requested by
            either Party. The arbitrator must follow applicable law, and any
            award may be challenged if the arbitrator fails to do so. Except
            where otherwise required by the applicable AAA rules or applicable
            law, the arbitration will take place in Polk, Florida. Except as
            otherwise provided herein, the Parties may litigate in court to
            compel arbitration, stay proceedings pending arbitration, or to
            confirm, modify, vacate, or enter judgment on the award entered by
            the arbitrator.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            If for any reason, a Dispute proceeds in court rather than
            arbitration, the Dispute shall be commenced or prosecuted in the
            state and federal courts located in Polk County Florida, and the
            Parties hereby consent to, and waive all defenses of lack of
            personal jurisdiction, and forum non conveniens with respect to
            venue and jurisdiction in such state and federal courts. Application
            of the United Nations Convention on Contracts for the International
            Sale of Goods and the Uniform Computer Information Transaction Act
            (UCITA) are excluded from these Legal Terms.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            In no event shall any Dispute brought by either Party related in any
            way to the Services be commenced more than one (1) years after the
            cause of action arose. If this provision is found to be illegal or
            unenforceable, then neither Party will elect to arbitrate any
            Dispute falling within that portion of this provision found to be
            illegal or unenforceable and such Dispute shall be decided by a
            court of competent jurisdiction within the courts listed for
            jurisdiction above, and the Parties agree to submit to the personal
            jurisdiction of that court.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c3">Restrictions</span>
        </p>

        <h4>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law:
        </h4>

        <ul>
          <li>No arbitration shall be joined with any other proceeding.</li>
          <li>
            There is no right or authority for any Dispute to be arbitrated on a
            class-action basis or to utilize class action procedures.
          </li>
          <li>
            There is no right or authority for any Dispute to be brought in a
            purported representative capacity on behalf of the general public or
            any other persons.
          </li>
        </ul>

        <p className="policyParagraph c13">
          <span className="policyParagraph c3">
            Exceptions to Informal Negotiations and Arbitration
          </span>
        </p>
        <p>
          <span>
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning informal negotiations binding
            arbitration:
          </span>
        </p>
        <ul>
          <li>
            <span>
              Any Disputes seeking to enforce or protect, or concerning the
              validity of, any of the intellectual property rights of a Party.
            </span>
          </li>
          <li>
            <span>
              Any Dispute related to, or arising from, allegations of theft,
              piracy, invasion of privacy, or unauthorized use.
            </span>
          </li>
          <li>
            <span>Any claim for injunctive relief.</span>
          </li>
        </ul>
        <p className="policyParagraph c18 c17">
          <span>
            If this provision is found to be illegal or unenforceable, then
            neither Party will elect to arbitrate any Dispute falling within
            that portion of this provision found to be illegal or unenforceable,
            and such Dispute shall be decided by a court of competent
            jurisdiction within the courts listed for jurisdiction above, and
            the Parties agree to submit to the personal jurisdiction of that
            court.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11">22. CORRECTIONS</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>23. DISCLAIMER</span>
        </p>

        <p className="policyParagraph">
          <span>
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SERVICES&#39; CONTENT OR THE CONTENT
            OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
            WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
            INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
            YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS
            TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
            INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
            INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES,
            (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR
            (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
            LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
            CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
            SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
            THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY
            WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
            OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
            YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
            APPROPRIATE.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11 c31">
            24. LIMITATIONS OF LIABILITY
          </span>
        </p>

        <p className="policyParagraph">
          <span>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
            CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
            WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
            TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO
            US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
            ARISING OR $20,000.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL
            LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
            OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME
            OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
            AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11">25. INDEMNIFICATION</span>
        </p>
        <p className="policyParagraph c18 c17">
          <span>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys&rsquo;
            fees and expenses, made by any third party due to or arising out of:
          </span>
        </p>
        <ul>
          <li>
            <span>Your Contributions.</span>
          </li>
          <li>
            <span>Use of the Services.</span>
          </li>
          <li>
            <span>Breach of these Legal Terms.</span>
          </li>
          <li>
            <span>
              Any breach of your representations and warranties set forth in
              these Legal Terms.
            </span>
          </li>
          <li>
            <span>
              Your violation of the rights of a third party, including but not
              limited to intellectual property rights.
            </span>
          </li>
          <li>
            <span>
              Any overt harmful act toward any other user of the Services with
              whom you connected via the Services.
            </span>
          </li>
        </ul>
        <p className="policyParagraph c18 c17">
          <span>
            Notwithstanding the foregoing, we reserve the right, at your
            expense, to assume the exclusive defense and control of any matter
            for which you are required to indemnify us. You agree to cooperate,
            at your expense, with our defense of such claims. We will use
            reasonable efforts to notify you of any such claim, action, or
            proceeding subject to this indemnification upon becoming aware of
            it.
          </span>
        </p>
        <p className="policyParagraph c13">
          <span>26. USER DATA</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the Services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services. You agree that we shall have no
            liability to you for any loss or corruption of any such data, and
            you hereby waive any right of action against us arising from any
            such loss or corruption of such data.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>
            27. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </span>
        </p>
        <p className="policyParagraph c13">
          <span>
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SERVICES. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span className="policyParagraph c11">
            28. CALIFORNIA USERS AND RESIDENTS
          </span>
        </p>
        <p className="policyParagraph c13">
          <span>
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>29. MISCELLANEOUS</span>
        </p>
        <p className="policyParagraph c13">
          <span>
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms
            shall not operate as a waiver of such right or provision. These
            Legal Terms operate to the fullest extent permissible by law. We may
            assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Legal
            Terms is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Legal Terms and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Legal Terms or use of the Services. You agree that
            these Legal Terms will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Legal Terms and the lack
            of signing by the parties hereto to execute these Legal Terms.
          </span>
        </p>

        <p className="policyParagraph c13">
          <span>30. CONTACT US</span>
        </p>
        <p>
          <span>
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </span>
        </p>

        <p>DigitalForge Technologies</p>
        <p>6 West Park Ave. 1404</p>
        <p>Lake Wales, FL 33853</p>
        <p>United States</p>
        <p>Phone: 8639490039</p>
        <p>
          <span>
            <button onClick={setShowContactForm}>
              contact-us@digitalforge-tek.com
            </button>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};
