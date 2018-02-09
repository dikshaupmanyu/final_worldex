var execute_payment_json = {
    "payer_id": "Appended to redirect url",
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
};

var paymentId = 'PAYMENT id created in previous step';

paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
    }
});
