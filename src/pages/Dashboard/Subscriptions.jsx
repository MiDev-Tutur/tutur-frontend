import { useState } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';

export default function Subscriptions() {
    const [billingPeriod, setBillingPeriod] = useState('monthly');
    const [selectedPlan, setSelectedPlan] = useState(null);

    const subscriptionPlans = [
        {
        id: 'basic',
        name: 'Basic',
        emoji: '🌱',
        description: 'Perfect for beginners',
        languages: 1,
        monthlyPrice: 9.99,
        yearlyPrice: 99.99,
        features: [
            '1 Language Access',
            '5 Lessons per day',
            'Basic Progress Tracking',
            'Community Forums',
        ],
        color: 'from-yellow-300 to-orange-300',
        borderColor: 'border-yellow-400',
        buttonColor: 'bg-yellow-400 hover:bg-yellow-500',
        },
        {
        id: 'pro',
        name: 'Pro',
        emoji: '🔥',
        description: 'For serious learners',
        languages: 3,
        monthlyPrice: 19.99,
        yearlyPrice: 199.99,
        features: [
            '3 Languages Access',
            'Unlimited Lessons',
            'Advanced Analytics',
            'Practice Tests',
            'Offline Downloads',
            'Priority Support',
        ],
        color: 'from-purple-400 to-pink-400',
        borderColor: 'border-purple-400',
        buttonColor: 'bg-purple-400 hover:bg-purple-500',
        isPopular: true,
        },
        {
        id: 'master',
        name: 'Master',
        emoji: '👑',
        description: 'Complete language mastery',
        languages: 5,
        monthlyPrice: 29.99,
        yearlyPrice: 299.99,
        features: [
            '5 Languages Access',
            'Unlimited Everything',
            'Live Tutoring Sessions',
            'Certification Exams',
            'Custom Learning Paths',
            '24/7 Premium Support',
            'Exclusive Content',
        ],
        color: 'from-blue-400 to-cyan-400',
        borderColor: 'border-blue-400',
        buttonColor: 'bg-blue-400 hover:bg-blue-500',
        },
    ];

    const savings = ((subscriptionPlans.map(plan => (plan.monthlyPrice * 12) - plan.yearlyPrice)));

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 overflow-y-auto">
                {/* Content */}
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-black text-emerald-700">Choose Your Plan</h1>
                    <p className="text-gray-600 text-lg mt-3">Start your language learning journey today</p>
                </div>

                {/* Billing Period Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-2 shadow-lg border-4 border-emerald-200 flex gap-2">
                    <button
                        onClick={() => setBillingPeriod('monthly')}
                        className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                        billingPeriod === 'monthly'
                            ? 'bg-linear-to-r from-orange-400 to-pink-400 text-white shadow-lg'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingPeriod('yearly')}
                        className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                        billingPeriod === 'yearly'
                            ? 'bg-linear-to-r from-purple-400 to-blue-400 text-white shadow-lg'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Yearly
                    </button>
                    </div>
                </div>

                {/* Yearly Discount Badge */}
                {billingPeriod === 'yearly' && (
                    <div className="text-center mb-8">
                    <div className="inline-block bg-linear-to-r from-green-400 to-emerald-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
                        💰 Save up to $120/year!
                    </div>
                    </div>
                )}

                {/* Subscription Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {subscriptionPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative transition-transform hover:scale-105 ${
                        plan.isPopular ? 'md:scale-105 md:z-10' : ''
                        }`}
                    >
                        {/* Popular Badge */}
                        {plan.isPopular && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-pink-400 to-red-400 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                            Most Popular ⭐
                        </div>
                        )}

                        {/* Plan Card */}
                        <div
                        className={`h-full bg-linear-to-br ${plan.color} rounded-3xl shadow-xl p-8 border-4 ${plan.borderColor} transform transition-all`}
                        >
                        {/* Plan Header */}
                        <div className="text-center mb-8">
                            <div className="text-6xl mb-4">{plan.emoji}</div>
                            <h2 className="text-3xl font-black text-white mb-2">{plan.name}</h2>
                            <p className="text-white text-sm font-semibold">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div className="text-center bg-white bg-opacity-30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                            <div className="text-5xl font-black text-neutral-900 mb-2">
                            ${billingPeriod === 'monthly' ? plan.monthlyPrice : (plan.yearlyPrice / 12).toFixed(2)}
                            </div>
                            <div className="text-neutral-800 text-sm font-bold">per month</div>
                            {billingPeriod === 'yearly' && (
                            <div className="text-neutral-800 text-xs font-semibold mt-2">
                                Billed ${plan.yearlyPrice} yearly
                            </div>
                            )}
                        </div>

                        {/* Language Count */}
                        <div className="text-center bg-white bg-opacity-20 rounded-xl p-4 mb-8">
                            <div className="text-2xl font-black text-neutral-800">{plan.languages} 🗣️</div>
                            <div className="text-neutral-800 text-sm font-bold">Languages Included</div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-white font-bold">
                                <span className="text-2xl">✓</span>
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`w-full py-4 rounded-2xl font-bold text-lg text-white transition-all transform hover:shadow-2xl ${plan.buttonColor}`}
                        >
                            Choose {plan.name}
                        </button>

                        {selectedPlan === plan.id && (
                            <div className="mt-4 text-center bg-white bg-opacity-30 rounded-xl p-3">
                            <p className="text-white font-bold">✓ Selected</p>
                            </div>
                        )}
                        </div>
                    </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-emerald-200">
                    <h3 className="text-3xl font-black text-emerald-700 mb-8 flex items-center gap-3">
                    <span className="text-4xl">❓</span>
                    Frequently Asked Questions
                    </h3>

                    <div className="space-y-6">
                    {[
                        {
                        q: 'Can I switch plans anytime?',
                        a: 'Yes! You can upgrade, downgrade, or cancel your subscription anytime. Changes take effect at the next billing cycle.',
                        },
                        {
                        q: 'Is there a free trial?',
                        a: 'Absolutely! Get 14 days of free access to all Pro features. No credit card required to start your free trial.',
                        },
                        {
                        q: 'What payment methods do you accept?',
                        a: 'We accept all major credit cards, PayPal, and Apple Pay for your convenience.',
                        },
                        {
                        q: 'Can I get a refund?',
                        a: 'We offer a 30-day money-back guarantee. If you are not satisfied, we will refund your subscription.',
                        },
                    ].map((faq, index) => (
                        <div key={index} className="border-b-2 border-emerald-200 pb-6">
                        <h4 className="text-lg font-black text-emerald-700 mb-3">{faq.q}</h4>
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
