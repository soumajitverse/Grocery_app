export const WELCOME_TEMPLATE = (name, email) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Welcome to BASKITO</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body style="margin:0; padding:0; background-color:#f6fafb; font-family:'Open Sans', Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#f6fafb">
      <tr>
        <td align="center" valign="top" style="padding:40px 10px;">
          <table width="100%" style="max-width:520px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 3px 10px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
            
            <!-- Header -->
            <tr>
              <td style="background-color:#22D172; text-align:center; padding:25px 10px;">
                <h1 style="margin:0; font-size:26px; font-weight:700; color:#ffffff; letter-spacing:1px;">
                  BASKITO
                </h1>
                <p style="margin:5px 0 0; color:#ffffff; font-size:13px;">
                  Fresh Groceries Delivered to Your Doorstep
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; color:#000000;">
                
                <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center; color:#333;">
                  Welcome to <span style="color:#22D172;">BASKITO</span>! 🛒
                </h2>

                <p style="font-size:15px; line-height:1.7; margin:0 0 15px; text-align:center;">
                  Hi <strong>${name}</strong>,
                </p>

                <p style="font-size:14px; line-height:1.6; margin:0 0 20px; text-align:center;">
                  Your account has been successfully created with this email:
                  <br>
                  <strong style="color:#4C83EE;">${email}</strong>
                </p>

                <div style="text-align:center; margin:30px 0;">
                  <a href="https://baskito.vercel.app" 
                     style="background-color:#22D172; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:6px; font-weight:bold; font-size:14px; display:inline-block;">
                    Start Shopping
                  </a>
                </div>

                <p style="font-size:13px; line-height:1.6; color:#555; margin:0 0 10px; text-align:center;">
                  Discover the best deals on fresh fruits, veggies, and daily essentials — all in one place.
                </p>

                <p style="font-size:13px; line-height:1.6; color:#888; margin-top:30px; text-align:center;">
                  — The BASKITO Team
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f0f0f0; text-align:center; padding:15px;">
                <p style="margin:0; font-size:12px; color:#777;">
                  © ${new Date().getFullYear()} soumajitverse. All rights reserved.<br>
                  Visit us at <a href="https://baskito.vercel.app" style="color:#22D172; text-decoration:none;">baskito.vercel.app</a>
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

export const EMAIL_VERIFY_TEMPLATE = (email, otp) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Email Verification</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body style="margin:0; padding:0; background-color:#f6fafb; font-family: 'Open Sans', Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#f6fafb">
      <tr>
        <td align="center" valign="top" style="padding:40px 10px;">
          <table width="100%" style="max-width:500px; background:#ffffff; border-radius:8px; overflow:hidden;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:40px 30px; color:#000000;">
                
                <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center;">
                  Verify Your Email
                </h2>

                <p style="font-size:14px; line-height:1.6; margin:0 0 10px;">
                  You are just one step away from verifying your account for this email:
                  <strong style="color:#4C83EE;">${email}</strong>
                </p>

                <p style="font-size:14px; line-height:1.6; margin:0 0 20px; font-weight:600;">
                  Use the OTP below to verify your account:
                </p>

                <div style="text-align:center; margin-bottom:24px;">
                  <p style="display:inline-block; background-color:#22D172; color:#ffffff; font-size:18px; font-weight:bold; padding:12px 24px; border-radius:7px; letter-spacing:2px;">
                    ${otp}
                  </p>
                </div>

                <p style="font-size:14px; line-height:1.6; color:#333333; margin:0;">
                  This OTP is valid for <strong>24 hours</strong>. Please do not share it with anyone.
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

export const PASSWORD_RESET_TEMPLATE = (email, otp) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Password Reset</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body style="margin:0; padding:0; background-color:#f6fafb; font-family:'Open Sans', Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#f6fafb">
      <tr>
        <td align="center" valign="top" style="padding:40px 10px;">
          <table width="100%" style="max-width:500px; background:#ffffff; border-radius:8px; overflow:hidden;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:40px 30px; color:#000000;">
                
                <h2 style="margin:0 0 20px; font-size:22px; font-weight:700; text-align:center;">
                  Forgot Your Password?
                </h2>

                <p style="font-size:14px; line-height:1.6; margin:0 0 10px;">
                  We received a password reset request for your account associated with:
                  <strong style="color:#4C83EE;">${email}</strong>
                </p>

                <p style="font-size:14px; line-height:1.6; margin:0 0 20px; font-weight:600;">
                  Use the OTP below to reset your password:
                </p>

                <div style="text-align:center; margin-bottom:24px;">
                  <p style="display:inline-block; background-color:#22D172; color:#ffffff; font-size:18px; font-weight:bold; padding:12px 24px; border-radius:7px; letter-spacing:2px;">
                    ${otp}
                  </p>
                </div>

                <p style="font-size:14px; line-height:1.6; color:#333333; margin:0;">
                  This OTP is valid for the next <strong>15 minutes</strong>. Please do not share it with anyone.
                </p>

                <p style="font-size:13px; line-height:1.6; color:#777777; margin-top:20px;">
                  If you did not request a password reset, please ignore this email.
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

