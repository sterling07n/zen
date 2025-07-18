const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist'))); // serve built React app

app.post('/process-payment', async (req, res) => {
  try {
    const { token, plan, amount } = req.body;
    
    console.log('Processing payment:', { plan, amount });

    const yocoResponse = await fetch('https://online.yoco.com/v1/charges/', {
      method: 'POST',
      headers: {
        'X-Auth-Secret-Key': 'sk_test_8c6f8b1akw61GPDcfc44', // Replace with your actual secret key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        amountInCents: amount,
        currency: 'ZAR',
        metadata: {
          plan: plan,
          service: 'ZenCourse'
        }
      })
    });

    const data = await yocoResponse.json();
    console.log('Yoco response:', data);

    if (data.status === 'successful') {
      // Here you would typically:
      // 1. Save the payment record to your database
      // 2. Create/update user account
      // 3. Grant access to the purchased plan
      // 4. Send confirmation email
      
      res.json({ 
        success: true, 
        message: '✅ Payment successful! Welcome to ZenCourse!',
        transactionId: data.id 
      });
    } else {
      res.status(400).json({ 
        success: false, 
        message: '❌ Payment failed: ' + (data.displayMessage || 'Unknown error'),
        error: data 
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: '❌ Server error occurred',
      error: error.message 
    });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('💳 Yoco payment processing enabled');
});