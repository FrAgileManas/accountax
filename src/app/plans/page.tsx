"use client";
import { useState, useEffect } from "react";
import { CircleCheck } from "lucide-react";
import PayPalButton from "@/components/ui/PayPalButton";
import RazorpayButton from "@/components/ui/razorpayButton";
const PaymentPlan = () => {
  const [amount, setAmount] = useState("");
  const [country, setCountry] = useState("India"); 
  const [ipAddress, setIpAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountry(data.country_name === "India" ? "India" : "USA"); 
        setIpAddress(data.ip);
        console.log("Detected Country:", data.country_name);
        console.log("Detected IP:", data.ip);
      } catch (error) {
        console.error("Error fetching IP location:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  const isIndia = country === "India";
  const currencySymbol = isIndia ? "₹" : "$";
  const minAmount = isIndia ? 85 : 1;
  const stepValue = isIndia ? 15 : 1;

  const handlePurchaseClick = () => {
    setShowPaymentDialog(true);
  };

  const handleRazorpayClick = () => {
    console.log("Razorpay option selected for amount:", amount);
    // This does nothing as per requirement
    setShowPaymentDialog(false);
  };

  const closeDialog = () => {
    setShowPaymentDialog(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-orange-600">Custom Plan</h2>
        <p className="text-gray-600">Pay what you need</p>
        {loading ? (
          <p className="text-gray-500 mt-4">Detecting location...</p>
        ) : (
          <>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Selected Currency:
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setAmount(""); 
                }}
              >
                <option value="India">INR</option>
                <option value="USA">USD</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Enter amount ({currencySymbol})
              </label>
              <input
                type="number"
                min={minAmount}
                step={stepValue}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                placeholder={`Min ${currencySymbol}${minAmount}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onBlur={() => {
                  if (Number(amount) < minAmount) {
                    alert(`Amount must be at least ${currencySymbol}${minAmount}`);
                    setAmount(minAmount.toString());
                  }
                }}
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Suggested amounts:</p>
              <div className="flex gap-2 mt-2">
                {(isIndia ? [430, 850, 1700, 2600] : [5, 10, 25, 50]).map((amt) => (
                  <button
                    key={amt}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    onClick={() => setAmount(amt.toString())}
                  >
                    {currencySymbol}
                    {amt}
                  </button>
                ))}
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> 1M credits for {currencySymbol}{isIndia ? "85" : "1"}
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> All features from standard plans
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> Credits never expire
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> Flexible credit purchases
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> Pay as you grow
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5 text-orange-500" /> Add credits anytime
              </li>
            </ul>
            <button
              className="mt-6 w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-300"
              disabled={!amount || Number.parseFloat(amount) < minAmount}
              onClick={handlePurchaseClick}
            >
              Purchase Credits
            </button>
          </>
        )}
      </div>

      {/* Simple Payment Dialog */}
      {showPaymentDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Select Payment Method</h3>
              <button 
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-600 mb-4">
                Amount: {currencySymbol}{amount}
              </p>
              
              <div className="space-y-3">
                {/* <button
                  onClick={handleRazorpayClick}
                  className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Pay with Razorpay
                </button> */}
                {currencySymbol === "₹" && (
                      <RazorpayButton amount={Number(amount)} />
                    )}
                <div className="w-full">
                  {/* {amount && Number(amount) > 0 && (
                    <PayPalButton amount={Number(amount)} />
                  )} */}
                    {currencySymbol === "$" && (
                      <PayPalButton amount={Number(amount)} />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPlan;