const Insta = require("instamojo-nodejs");
Insta.setKeys(process.env.API_KEY, process.env.AUTH_KEY);

const createPaymentRequest = async (req, res) => {
  const { name, email, phone, amount } = req.body;
  try {
    const data = new Insta.PaymentData();

    data.currency = "INR";
    data.buyer_name = name;
    data.email = email;
    data.phone = phone;
    data.amount = amount;
    data.send_sms = "False";
    data.send_email = "False";
    data.allow_repeated_payments = "False";
    // data.webhook = "Your endpoint to capture POST data from a payment";
    data.redirect_url = "http://localhost:3000/";

    Insta.createPayment(data, function (error, response) {
      if (error) {
        console.log(error);
        res.status(400).json({ success: false });
      } else {
        // Payment redirection link at response.payment_request.longurl
        res.status(200).json({ success: true });
        console.log(response);
      }
    });

    res.status(200).json(paymentRes);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createPaymentRequest };
