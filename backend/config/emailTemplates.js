export const WELCOME_TEMPLATE = (name, email) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Welcome to GreatStack</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body style="margin:0; padding:0; background-color:#f6fafb; font-family:'Open Sans', Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#f6fafb">
      <tr>
        <td align="center" valign="top" style="padding:40px 10px;">
          <table width="100%" style="max-width:520px; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 3px 8px rgba(0,0,0,0.05);" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:40px 30px; color:#000000;">
                
                <h2 style="margin:0 0 20px; font-size:24px; font-weight:700; text-align:center; color:#333;">
                  Welcome to <span style="color:#4C83EE;">GreatStack</span> 🎉
                </h2>

                <p style="font-size:15px; line-height:1.7; margin:0 0 15px; text-align:center;">
                  Hi <strong>${name}</strong>,
                </p>

                <p style="font-size:14px; line-height:1.6; margin:0 0 20px; text-align:center;">
                  We’re thrilled to have you on board! Your account has been successfully created with this email:
                  <br>
                  <strong style="color:#4C83EE;">${email}</strong>
                </p>

                <div style="text-align:center; margin:30px 0;">
                  <a href="#" style="background-color:#22D172; color:#ffffff; text-decoration:none; padding:12px 30px; border-radius:6px; font-weight:bold; font-size:14px; display:inline-block;">
                    Visit GreatStack
                  </a>
                </div>

                <p style="font-size:13px; line-height:1.6; color:#555; margin:0 0 10px; text-align:center;">
                  Explore tutorials, projects, and resources crafted just for developers like you.
                </p>

                <p style="font-size:13px; line-height:1.6; color:#888; margin-top:30px; text-align:center;">
                  — The GreatStack Team
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

