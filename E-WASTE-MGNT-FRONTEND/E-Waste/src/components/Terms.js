import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <div className="bg-dark text-right p-2 row">
        <div className="col-lg-8">
          <h3 className="text-white me-5 pe-5 fw-bold">Terms and Conditons</h3>
        </div>
        <div className="col-lg-4">
          <Link
            to="/register"
            className="btn btn-lg btn-primary me-5 ps-5 pe-5 p-2"
          >
            Back
          </Link>
        </div>
      </div>

      <div>
        <nav className="mr-md-5 ml-md-5 mb-1 mt-5 display-4 text-center">
          General Terms To Use
        </nav>
        <br />
        <div className="mr-md-5 ml-md-5 ">
          <ol>
            <li>
              You may not use the HIFI service for any illegal or unauthorized
              purpose. International users agree to comply with all local laws
              regarding online conduct and acceptable content.
            </li>
            <br />
            <li>
              You are solely responsible for your conduct and any data, text,
              information, screen names, graphics, photos, profiles, audio and
              video clips, links ("Content") that you submit, post, and display
              on the HIFI service.
            </li>
            <li>You must be 13 years or older to use this site.</li>
            <br />
            <li>
              You may not post nude, partially nude, or sexually suggestive
              photos.
            </li>
            <br />
            <li>
              You are responsible for any activity that occurs under your screen
              name.
            </li>
            <br />
            <li>You are responsible for keeping your password secure.</li>
            <br />
            <li>
              You must not abuse, harass, threaten, impersonate or intimidate
              other HIFI users.
            </li>

            <br />
            <li>
              You must not modify, adapt or hack HIFI or modify another website
              so as to falsely imply that it is associated with HIFI.
            </li>
            <br />
            <li>
              You must not access HIFI's private API by any other means other
              than the HIFI application itself.
            </li>
            <br />
            <li>
              You must not crawl, scrape, or otherwise cache any content from
              HIFI including but not limited to user profiles and photos.
            </li>
            <br />
            <li>
              You must not create or submit unwanted email or comments to any
              HIFI members ("Spam").
            </li>
            <br />
            <li>
              You must not use web URLs in your name without prior written
              consent from HIFI, inc.
            </li>
            <br />
            <li>
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </li>
            <br />
            <li>
              You must not, in the use of HIFI, violate any laws in your
              jurisdiction (including but not limited to copyright laws).
            </li>
            <br />
            <li>
              Violation of any of these agreements will result in the
              termination of your HIFI account. While HIFI prohibits such
              conduct and content on its site, you understand and agree that
              HIFI cannot be responsible for the Content posted on its web site
              and you nonetheless may be exposed to such materials and that you
              use the HIFI service at your own risk.
            </li>
            <br />
          </ol>
        </div>
      </div>
      <div>
        <nav className="mr-md-5 ml-md-5 mb-1 mt-5 display-4 text-center">
          General Conditions To Use
        </nav>
        <br />
        <div className=" mr-md-5 ml-md-5 mb-5">
          <ol>
            <li>
              We reserve the right to modify or terminate the HIFI service for
              any reason, without notice at any time.
            </li>
            <br />
            <li>
              We reserve the right to alter these Terms of Use at any time. If
              the alterations constitute a material change to the Terms of Use,
              we will notify you via internet mail according to the preference
              expressed on your account. What constitutes a "material change"
              will be determined at our sole discretion, in good faith and using
              common sense and reasonable judgement.
            </li>
            <br />
            <li>
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </li>
            <br />
            <li>
              We reserve the right to force forfeiture of any username that
              becomes inactive, violates trademark, or may mislead other users.
            </li>
            <br />
            <li>
              We may, but have no obligation to, remove Content and accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory, obscene or
              otherwise objectionable or violates any party's intellectual
              property or these Terms of Use.
            </li>
            <br />
            <li>
              We reserve the right to reclaim usernames on behalf of businesses
              or individuals that hold legal claim or trademark on those
              usernames.
            </li>
            <br />
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Terms;
