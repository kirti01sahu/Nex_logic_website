import { useCallback } from 'react';

/**
 * Razorpay Payment Hook
 * 
 * Configuration:
 * Add your Razorpay Key ID in the RAZORPAY_KEY_ID constant below
 * Get your key from: https://dashboard.razorpay.com/app/keys
 */

// Razorpay Live Key ID - LIVE MODE (Real payments)
const RAZORPAY_KEY_ID = 'rzp_live_4YHKcy7TE1KkEy';

const useRazorpay = () => {
  /**
   * Initialize Razorpay Payment
   * @param {Object} options - Payment options
   * @param {number} options.amount - Amount in INR (will be converted to paise automatically)
   * @param {string} options.currency - Currency code (INR, USD, etc.)
   * @param {string} options.name - Product/Service name
   * @param {string} options.description - Payment description
   * @param {string} options.planType - Type of plan (Standard, Premium, Enterprise, etc.)
   * @param {Function} options.onSuccess - Success callback
   * @param {Function} options.onFailure - Failure callback
   */
  const initiatePayment = useCallback((options) => {
    const {
      amount,
      currency = 'INR',
      name = 'Nexlogic',
      description = 'Service Subscription',
      planType = '',
      onSuccess,
      onFailure,
    } = options;

    // Validate Razorpay script is loaded
    if (!window.Razorpay) {
      console.error('Razorpay SDK not loaded');
      alert('Payment system is initializing. Please try again in a moment.');
      return;
    }

    // Validate Razorpay Key
    if (RAZORPAY_KEY_ID === 'rzp_test_XXXXXXXXXXXXXX') {
      console.error('Razorpay Key ID not configured');
      alert('Payment gateway is not configured. Please contact support.');
      return;
    }

    // Convert amount to paise (smallest currency unit)
    // For INR: 1 INR = 100 paise
    // For USD: 1 USD = 100 cents
    const amountInSmallestUnit = Math.round(parseFloat(amount) * 100);

    const razorpayOptions = {
      key: RAZORPAY_KEY_ID,
      amount: amountInSmallestUnit,
      currency: currency,
      name: 'Nexlogic',
      description: `${name} - ${description}`,
      handler: function (response) {
        // Payment success
        console.log('Payment Successful:', response);
        
        // Send payment details to your backend for verification
        // You should verify the payment signature on your backend
        const paymentData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          planType: planType,
          amount: amount,
          currency: currency,
        };

        if (onSuccess) {
          onSuccess(paymentData);
        } else {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        }
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        plan_type: planType,
        service: name,
      },
      theme: {
        color: '#2F3B35', // Your brand color (charcoal)
      },
      modal: {
        ondismiss: function () {
          console.log('Payment cancelled by user');
          if (onFailure) {
            onFailure({ reason: 'Payment cancelled by user' });
          }
        },
      },
    };

    const razorpayInstance = new window.Razorpay(razorpayOptions);

    razorpayInstance.on('payment.failed', function (response) {
      console.error('Payment Failed:', response.error);
      
      const errorData = {
        code: response.error.code,
        description: response.error.description,
        source: response.error.source,
        step: response.error.step,
        reason: response.error.reason,
        metadata: response.error.metadata,
      };

      if (onFailure) {
        onFailure(errorData);
      } else {
        alert(`Payment Failed: ${response.error.description}`);
      }
    });

    // Open Razorpay checkout
    razorpayInstance.open();
  }, []);

  return { initiatePayment };
};

export default useRazorpay;
