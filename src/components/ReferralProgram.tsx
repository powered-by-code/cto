import React from 'react';
import { Check } from 'lucide-react';

const ReferralProgram: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Cubeunity Referral Program</h2>
        
        {/* Intro Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">🌐 Intro</h3>
          <p className="text-base-content/80">
            The Cubeunity Referral Program is built for our extended community—founders, mentors, past clients, and ecosystem allies—to help refer startups and companies that need expert tech leadership, smart cost structures, or scalable tech team solutions.
          </p>
          <p className="text-base-content/80 mt-2">
            We're on a mission to optimize how startups scale their tech. Your network can be a part of that.
          </p>
        </div>

        {/* Program Goals */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">🎯 Program Goals</h3>
          <ul className="space-y-2 text-base-content/80">
            <li>▸ Empower your circle: Connect startups with strategic CTO guidance and cost-effective tech growth.</li>
            <li>▸ Earn rewards: Get rewarded for every successful referral—cash, credits, and exclusive perks.</li>
            <li>▸ Grow together: Help us expand the Cubeunity impact while growing your own ecosystem influence.</li>
            <li>▸ Stay involved: Stay plugged into the Cubeunity network of tech leaders and founders.</li>
          </ul>
        </div>

        {/* Who Can Refer */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">🤝 Who Can Refer?</h3>
          <ul className="space-y-2 text-base-content/80">
            <li>▸ Past & current clients of Cubeunity</li>
            <li>▸ Startup mentors, advisors, and consultants</li>
            <li>▸ VC fund managers & accelerator program leaders</li>
            <li>▸ Developers, engineers</li>
            <li>▸ Founders who've worked with a Fractional CTO</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">📩 How It Works</h3>
          <ol className="space-y-2 text-base-content/80">
            <li>1. Get Service Info: Request our service deck.</li>
            <li>2. Spot the Opportunity: Know a founder struggling with tech burn, team issues, or product delivery? That's a fit.</li>
            <li>3. Send the Intro: Connect them with us via email/Telegram.</li>
            <li>4. We'll Take It From There: Once they book a discovery call, we'll handle onboarding and update you.</li>
            <li>5. Get Rewarded: You earn once the referral becomes a paying client.</li>
          </ol>
        </div>

        {/* Referral Tiers */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-8">🏆 Referral Tiers & Rewards</h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card shadow-md hover:shadow-xl transition-shadow h-full">
              <div className="card-body p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70 font-medium mb-2">
                    Tier 1
                  </div>
                  <h4 className="font-semibold text-2xl mb-2">🎖 Tech Ally</h4>
                  <div className="text-sm mb-4 text-primary font-medium">1 Referral</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">$200 service credit or $100 cash</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">Social shoutout as a community supporter</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card shadow-md hover:shadow-xl transition-shadow h-full">
              <div className="card-body p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70 font-medium mb-2">
                    Tier 2
                  </div>
                  <h4 className="font-semibold text-2xl mb-2">🎖 CTO Connector</h4>
                  <div className="text-sm mb-4 text-primary font-medium">3 Referrals</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">$900 cash or $1,200 in service credit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">Exclusive 1-on-1 consultation with a Cubeunity founder</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">Access to private developer forums and networking events</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">1 Free Tech Cost Audit (value $500)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card shadow-md hover:shadow-xl transition-shadow h-full">
              <div className="card-body p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70 font-medium mb-2">
                    Tier 3
                  </div>
                  <h4 className="font-semibold text-2xl mb-2">🎖 Unity Builder</h4>
                  <div className="text-sm mb-4 text-primary font-medium">5+ Referrals</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">$2,000 cash or 10% commission on next 2 contracts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">VIP invite to Cubeunity community events</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-base-content/80">Access to exclusive developer tools and training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">📌 Guidelines</h3>
          <ul className="space-y-2 text-base-content/80">
            <li>▸ Referrals must be new to Cubeunity.</li>
            <li>▸ Referrer must be mentioned on the first call or form.</li>
            <li>▸ Rewards are granted when the referral becomes a paying client.</li>
            <li>▸ Rewards reset annually with new tier perks for active referrers.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title text-primary mb-4">💬 Let's Co-Create Smarter Startups</h3>
            <p className="text-base-content/80 mb-4">
              Refer founders who need real tech leadership.<br />
              We'll handle the rest—and thank you for it.
            </p>
            <p className="text-base-content/80">
              Want in? Contact us on{' '}
              <a href="https://t.me/rubunity" className="link link-primary">Telegram</a>
              {' '}or email us at{' '}
              <a href="mailto:ruben@cubeunity.com" className="link link-primary">ruben@cubeunity.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram; 