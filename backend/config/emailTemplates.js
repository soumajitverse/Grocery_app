export const WELCOME_TEMPLATE = (name, email) => {
  const year = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Welcome to BASKITO</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0; padding:0; background-color:#fff5f5; font-family:'Open Sans', Arial, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#fff5f5">
        <tr>
          <td align="center" valign="top" style="padding:40px 10px;">
            <table width="100%" style="max-width:520px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
              
              <!-- Header -->
              <tr>
                <td style="background-color:#e53935; text-align:center; padding:25px 10px;">
                  <h1 style="margin:0; font-size:28px; font-weight:700; color:#ffffff; letter-spacing:1px;">
                    BASKITO
                  </h1>
                  <p style="margin:5px 0 0; color:#ffeaea; font-size:13px;">
                    Fresh Groceries, Fast Delivery
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 30px; color:#000000;">
                  
                  <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center; color:#e53935;">
                    Welcome to <span style="color:#e53935;">BASKITO</span>! 🛒
                  </h2>

                  <p style="font-size:15px; line-height:1.7; margin:0 0 15px; text-align:center;">
                    Hi <strong>${name}</strong>,
                  </p>

                  <p style="font-size:14px; line-height:1.6; margin:0 0 25px; text-align:center;">
                    We're thrilled to have you on board! Your account has been successfully created using:
                    <br>
                    <strong style="color:#e53935;">${email}</strong>
                  </p>

                  <div style="text-align:center; margin:30px 0;">
                    <a href="https://grocery-app-flax-five.vercel.app" 
                       style="background-color:#e53935; color:#ffffff; text-decoration:none; padding:12px 30px; border-radius:8px; font-weight:bold; font-size:14px; display:inline-block;">
                      Start Shopping
                    </a>
                  </div>

                  <p style="font-size:13px; line-height:1.6; color:#555; margin:0 0 10px; text-align:center;">
                    Explore the freshest fruits, veggies, and daily essentials delivered right to your doorstep.
                  </p>

                  <p style="font-size:13px; line-height:1.6; color:#888; margin-top:30px; text-align:center;">
                    — The BASKITO Team ❤️
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#fbeaea; text-align:center; padding:18px; border-top:1px solid #f0caca;">
                  <p style="margin:0; font-size:12px; color:#777;">
                    © ${year} soumajitverse. All rights reserved.<br>
                    Visit us at 
                    <a href="https://grocery-app-flax-five.vercel.app" style="color:#e53935; text-decoration:none;">baskito.vercel.app</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

export const EMAIL_VERIFY_TEMPLATE = (email, otp) => {
  const year = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Email Verification - BASKITO</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0; padding:0; background-color:#fff5f5; font-family: 'Open Sans', Arial, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#fff5f5">
        <tr>
          <td align="center" valign="top" style="padding:40px 10px;">
            <table width="100%" style="max-width:500px; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
              
              <!-- Header -->
              <tr>
                <td align="center" style="background-color:#e53935; padding:24px 0;">
                  <h1 style="margin:0; color:#ffffff; font-size:28px; letter-spacing:1px;">BASKITO</h1>
                  <p style="margin:4px 0 0; color:#ffeaea; font-size:14px;">Fresh. Fast. Reliable.</p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 30px; color:#000000;">
                  
                  <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center; color:#e53935;">
                    Verify Your Email
                  </h2>

                  <p style="font-size:15px; line-height:1.7; margin:0 0 10px; text-align:center;">
                    You're almost there! Please verify your email address to activate your
                    <strong style="color:#e53935;">BASKITO</strong> account linked with:
                    <br/>
                    <strong style="color:#444;">${email}</strong>
                  </p>

                  <p style="font-size:15px; line-height:1.6; text-align:center; font-weight:600; margin-top:20px;">
                    Use the OTP below to complete verification:
                  </p>

                  <div style="text-align:center; margin:24px 0;">
                    <p style="display:inline-block; background-color:#e53935; color:#ffffff; font-size:20px; font-weight:bold; padding:14px 32px; border-radius:8px; letter-spacing:3px;">
                      ${otp}
                    </p>
                  </div>

                  <p style="font-size:14px; line-height:1.6; color:#333333; text-align:center; margin-top:10px;">
                    This OTP is valid for <strong>24 hours</strong>. Please don’t share it with anyone.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="background-color:#fbeaea; padding:20px; border-top:1px solid #f0caca;">
                  <p style="margin:0; font-size:13px; color:#555;">
                    Need help? Contact us at
                    <a href="mailto:majumdersoumajit09@gmail.com" style="color:#e53935; text-decoration:none;">majumdersoumajit09@gmail.com</a>
                  </p>
                  <p style="margin:6px 0 0; font-size:12px; color:#777;">
                    &copy; ${year} soumajitverse. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};

export const PASSWORD_RESET_TEMPLATE = (email, otp) => {
  const year = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Password Reset - BASKITO</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0; padding:0; background-color:#fff5f5; font-family:'Open Sans', Arial, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#fff5f5">
        <tr>
          <td align="center" valign="top" style="padding:40px 10px;">
            <table width="100%" style="max-width:520px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
              
              <!-- Header -->
              <tr>
                <td style="background-color:#e53935; text-align:center; padding:25px 10px;">
                  <h1 style="margin:0; font-size:26px; font-weight:700; color:#ffffff; letter-spacing:1px;">
                    BASKITO
                  </h1>
                  <p style="margin:5px 0 0; color:#ffeaea; font-size:13px;">
                    Fresh Groceries, Fast Delivery
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 30px; color:#000000;">
                  
                  <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center; color:#e53935;">
                    Forgot Your Password?
                  </h2>

                  <p style="font-size:15px; line-height:1.7; margin:0 0 10px; text-align:center;">
                    We received a password reset request for your account associated with:
                    <br>
                    <strong style="color:#e53935;">${email}</strong>
                  </p>

                  <p style="font-size:14px; line-height:1.6; text-align:center; font-weight:600; margin:20px 0;">
                    Use the OTP below to reset your password:
                  </p>

                  <div style="text-align:center; margin-bottom:24px;">
                    <p style="display:inline-block; background-color:#e53935; color:#ffffff; font-size:20px; font-weight:bold; padding:14px 32px; border-radius:8px; letter-spacing:3px;">
                      ${otp}
                    </p>
                  </div>

                  <p style="font-size:14px; line-height:1.6; color:#333333; text-align:center;">
                    This OTP is valid for the next <strong>15 minutes</strong>. Please do not share it with anyone.
                  </p>

                  <p style="font-size:13px; line-height:1.6; color:#777777; margin-top:20px; text-align:center;">
                    If you did not request a password reset, you can safely ignore this email.
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#fbeaea; text-align:center; padding:18px; border-top:1px solid #f0caca;">
                  <p style="margin:0; font-size:12px; color:#777;">
                    Need help? Contact us at 
                    <a href="mailto:majumdersoumajit09@gmail.com" style="color:#e53935; text-decoration:none;">majumdersoumajit09@gmail.com</a>
                  </p>
                  <p style="margin:6px 0 0; font-size:12px; color:#777;">
                    © ${year} soumajitverse. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};


