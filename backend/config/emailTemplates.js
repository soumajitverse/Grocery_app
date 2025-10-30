export const WELCOME_TEMPLATE = (name, email) => {
  const year = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>Welcome to BASKITO - Your Fresh Grocery Destination</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 15px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-button { padding: 14px 30px !important; font-size: 15px !important; }
        }
      </style>
    </head>

    <body style="margin:0; padding:0; background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%); font-family: 'Poppins', 'Segoe UI', Tahoma, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);">
        <tr>
          <td align="center" valign="top" style="padding:40px 15px;">

            <table width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 24px rgba(229, 57, 53, 0.12);" cellpadding="0" cellspacing="0">

              <tr>
                <td style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%); text-align:center; padding:40px 20px;">

                  <!-- Logo Icon - CENTERED -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
                    <tr>
                      <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="middle" style="width:80px; height:80px; background:rgba(255,255,255,0.2); border-radius:50%; line-height:80px; text-align:center;">
                              <span style="font-size:40px; display:inline-block; vertical-align:middle; line-height:normal;">🛒</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <h1 style="margin:0; font-size:36px; font-weight:700; color:#ffffff; letter-spacing:2px; text-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    BASKITO
                  </h1>
                  <p style="margin:8px 0 0; color:#ffeaea; font-size:14px; font-weight:400; letter-spacing:1px;">
                    Fresh Groceries, Delivered with Love
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:30px 20px 0;">
                  <div style="display:inline-block; background:linear-gradient(135deg, #e53935 0%, #c62828 100%); color:#ffffff; padding:8px 24px; border-radius:50px; font-size:13px; font-weight:600; letter-spacing:1px; box-shadow:0 4px 12px rgba(229, 57, 53, 0.3);">
                    🎉 WELCOME ABOARD
                  </div>
                </td>
              </tr>

              <tr>
                <td class="mobile-padding" style="padding:40px 50px; color:#2c3e50;">

                  <h2 style="margin:0 0 24px; font-size:28px; font-weight:700; text-align:center; color:#2c3e50; line-height:1.3;">
                    Welcome to <span style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">BASKITO</span>! 
                  </h2>

                  <p class="mobile-text" style="font-size:16px; line-height:1.8; margin:0 0 16px; text-align:center; color:#34495e;">
                    Hi <strong style="color:#e53935;">${name}</strong>,
                  </p>

                  <p class="mobile-text" style="font-size:15px; line-height:1.7; margin:0 0 30px; text-align:center; color:#5a6c7d;">
                    We're absolutely thrilled to have you join the BASKITO family! Your account has been successfully created and you're all set to enjoy fresh, quality groceries delivered right to your doorstep.
                  </p>

                  <!-- Account Info - CENTERED -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px auto;">
                    <tr>
                      <td align="center">
                        <table width="90%" style="max-width:400px; margin:0 auto; background:#f8f9fa; border-radius:12px; overflow:hidden; border-left:4px solid #e53935;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:24px; text-align:center;">
                              <p style="margin:0 0 8px; font-size:13px; color:#7f8c8d; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Your Account Email</p>
                              <p style="margin:0; font-size:16px; color:#2c3e50; font-weight:600; word-break:break-all;">${email}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- CTA Button -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="padding:30px 0;">
                        <a href="https://grocery-app-flax-five.vercel.app" 
                           class="mobile-button"
                           style="background:linear-gradient(135deg, #e53935 0%, #c62828 100%); color:#ffffff; text-decoration:none; padding:16px 48px; border-radius:50px; font-weight:700; font-size:16px; display:inline-block; box-shadow:0 6px 20px rgba(229, 57, 53, 0.3); letter-spacing:0.5px;">
                          🛍️ Start Shopping Now
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Features -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;">
                    <tr>
                      <td style="padding:20px; background:#f8f9fa; border-radius:12px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" style="padding:10px;">
                              <span style="font-size:32px;">🥬</span>
                              <p style="margin:8px 0 0; font-size:13px; color:#5a6c7d; font-weight:600;">Farm Fresh</p>
                            </td>
                            <td align="center" style="padding:10px;">
                              <span style="font-size:32px;">🚚</span>
                              <p style="margin:8px 0 0; font-size:13px; color:#5a6c7d; font-weight:600;">Fast Delivery</p>
                            </td>
                            <td align="center" style="padding:10px;">
                              <span style="font-size:32px;">💰</span>
                              <p style="margin:8px 0 0; font-size:13px; color:#5a6c7d; font-weight:600;">Best Prices</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <p class="mobile-text" style="font-size:14px; line-height:1.7; color:#7f8c8d; margin:30px 0 0; text-align:center; font-style:italic;">
                    "Your satisfaction is our priority. Fresh produce, delivered with care."
                  </p>

                  <p style="font-size:15px; line-height:1.6; color:#2c3e50; margin-top:40px; text-align:center; font-weight:600;">
                    Happy Shopping! 🎉
                    <br>
                    <span style="color:#e53935;">— The BASKITO Team</span>
                  </p>

                </td>
              </tr>

              <tr>
                <td style="background: linear-gradient(135deg, #fbeaea 0%, #ffe6e6 100%); text-align:center; padding:30px 20px; border-top:1px solid #f0caca;">
                  <p style="margin:0 0 12px; font-size:13px; color:#5a6c7d; line-height:1.6;">
                    Need help? We're here for you!<br>
                    Contact us at <a href="mailto:majumdersoumajit09@gmail.com" style="color:#e53935; text-decoration:none; font-weight:600;">majumdersoumajit09@gmail.com</a>
                  </p>
                  <p style="margin:0; font-size:12px; color:#95a5a6;">
                    © ${year} BASKITO by soumajitverse. All rights reserved.<br>
                    <a href="https://grocery-app-flax-five.vercel.app" style="color:#e53935; text-decoration:none; font-weight:600;">baskito.vercel.app</a>
                  </p>
                  <div style="margin-top:16px;">
                    <span style="font-size:11px; color:#bdc3c7; letter-spacing:0.5px;">Made with ❤️ for fresh grocery lovers</span>
                  </div>
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
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>Verify Your Email - BASKITO</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 15px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-otp { font-size: 28px !important; padding: 18px 24px !important; }
        }
      </style>
    </head>

    <body style="margin:0; padding:0; background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%); font-family: 'Poppins', 'Segoe UI', Tahoma, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);">
        <tr>
          <td align="center" valign="top" style="padding:40px 15px;">

            <table width="100%" style="max-width:560px; background:#ffffff; border-radius:16px; box-shadow:0 8px 24px rgba(229, 57, 53, 0.12);" cellpadding="0" cellspacing="0">

              <tr>
                <td align="center" style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%); padding:40px 20px; border-radius:16px 16px 0 0;">

                  <!-- Lock Icon - CENTERED -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;">
                    <tr>
                      <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="middle" style="width:70px; height:70px; background:rgba(255,255,255,0.2); border-radius:50%; line-height:70px; text-align:center;">
                              <span style="font-size:36px; display:inline-block; vertical-align:middle; line-height:normal;">🔐</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <h1 style="margin:0; color:#ffffff; font-size:28px; letter-spacing:1.5px; font-weight:700;">BASKITO</h1>
                  <p style="margin:6px 0 0; color:#ffeaea; font-size:13px; letter-spacing:0.5px;">Secure Email Verification</p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:30px 20px 0;">
                  <div style="display:inline-block; background:#fff3cd; color:#856404; padding:8px 20px; border-radius:50px; font-size:12px; font-weight:600; letter-spacing:0.5px; border:2px solid #ffc107;">
                    ⏰ ACTION REQUIRED
                  </div>
                </td>
              </tr>

              <tr>
                <td class="mobile-padding" style="padding:40px 50px; color:#2c3e50;">

                  <h2 class="mobile-heading" style="margin:0 0 20px; font-size:24px; font-weight:700; text-align:center; color:#2c3e50;">
                    Verify Your Email Address
                  </h2>

                  <p class="mobile-text" style="font-size:15px; line-height:1.8; margin:0 0 12px; text-align:center; color:#5a6c7d;">
                    You're almost there! Please verify your email address to activate your
                    <strong style="color:#e53935;">BASKITO</strong> account.
                  </p>

                  <!-- Email Info - CENTERED -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px auto;">
                    <tr>
                      <td align="center">
                        <table width="90%" style="max-width:400px; margin:0 auto; background:#f8f9fa; border-radius:10px; overflow:hidden;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:20px; text-align:center;">
                              <p style="margin:0 0 6px; font-size:12px; color:#7f8c8d; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Verifying Email</p>
                              <p style="margin:0; font-size:15px; color:#2c3e50; font-weight:600; word-break:break-all;">${email}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <p class="mobile-text" style="font-size:15px; line-height:1.6; text-align:center; font-weight:600; margin:30px 0 20px; color:#2c3e50;">
                    Enter this verification code:
                  </p>

                  <!-- OTP Display -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="padding:20px 0;">
                        <div class="mobile-otp" style="display:inline-block; background:linear-gradient(135deg, #e53935 0%, #c62828 100%); color:#ffffff; font-size:36px; font-weight:bold; padding:24px 48px; border-radius:16px; letter-spacing:8px; box-shadow:0 6px 20px rgba(229, 57, 53, 0.3); font-family: 'Courier New', monospace;">
                          ${otp}
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Info Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;">
                    <tr>
                      <td style="padding:20px; background:#e8f5e9; border-radius:10px; border-left:4px solid #4caf50;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:12px; vertical-align:top;">
                              <span style="font-size:24px;">⏱️</span>
                            </td>
                            <td>
                              <p style="margin:0; font-size:14px; color:#2e7d32; line-height:1.6;">
                                <strong>Valid for 24 hours</strong><br>
                                <span style="font-size:13px; color:#558b2f;">This code will expire in 24 hours for security reasons.</span>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Security Notice -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                    <tr>
                      <td style="padding:18px; background:#fff3e0; border-radius:10px; border-left:4px solid #ff9800;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:12px; vertical-align:top;">
                              <span style="font-size:24px;">🔒</span>
                            </td>
                            <td>
                              <p style="margin:0; font-size:13px; color:#e65100; line-height:1.6;">
                                <strong>Security Tip:</strong> Never share this code with anyone, including BASKITO support staff.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <tr>
                <td align="center" style="background: linear-gradient(135deg, #fbeaea 0%, #ffe6e6 100%); padding:30px 20px; border-top:1px solid #f0caca;">
                  <p style="margin:0 0 12px; font-size:13px; color:#5a6c7d;">
                    Need help? Contact us at
                    <a href="mailto:majumdersoumajit09@gmail.com" style="color:#e53935; text-decoration:none; font-weight:600;">majumdersoumajit09@gmail.com</a>
                  </p>
                  <p style="margin:0; font-size:12px; color:#95a5a6;">
                    &copy; ${year} BASKITO by soumajitverse. All rights reserved.
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
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>Reset Your Password - BASKITO</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 15px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-otp { font-size: 28px !important; padding: 18px 24px !important; }
        }
      </style>
    </head>

    <body style="margin:0; padding:0; background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%); font-family:'Poppins', 'Segoe UI', Tahoma, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);">
        <tr>
          <td align="center" valign="top" style="padding:40px 15px;">

            <table width="100%" style="max-width:560px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 24px rgba(229, 57, 53, 0.12);" cellpadding="0" cellspacing="0">

              <tr>
                <td style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%); text-align:center; padding:40px 20px;">

                  <!-- Key Icon - CENTERED -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;">
                    <tr>
                      <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" valign="middle" style="width:70px; height:70px; background:rgba(255,255,255,0.2); border-radius:50%; line-height:70px; text-align:center;">
                              <span style="font-size:36px; display:inline-block; vertical-align:middle; line-height:normal;">🔑</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <h1 style="margin:0; font-size:28px; font-weight:700; color:#ffffff; letter-spacing:1.5px;">
                    BASKITO
                  </h1>
                  <p style="margin:6px 0 0; color:#ffeaea; font-size:13px; letter-spacing:0.5px;">
                    Password Reset Request
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:30px 20px 0;">
                  <div style="display:inline-block; background:#fee; color:#c62828; padding:8px 20px; border-radius:50px; font-size:12px; font-weight:600; letter-spacing:0.5px; border:2px solid #e53935;">
                    🚨 PASSWORD RESET
                  </div>
                </td>
              </tr>

              <tr>
                <td class="mobile-padding" style="padding:40px 50px; color:#2c3e50;">

                  <h2 class="mobile-heading" style="margin:0 0 20px; font-size:24px; font-weight:700; text-align:center; color:#2c3e50;">
                    Reset Your Password
                  </h2>

                  <p class="mobile-text" style="font-size:15px; line-height:1.8; margin:0 0 16px; text-align:center; color:#5a6c7d;">
                    We received a password reset request for your account associated with:
                  </p>

                  <!-- Account Info - CENTERED -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px auto;">
                    <tr>
                      <td align="center">
                        <table width="90%" style="max-width:400px; margin:0 auto; background:#f8f9fa; border-radius:10px;" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding:20px; text-align:center;">
                              <p style="margin:0 0 6px; font-size:12px; color:#7f8c8d; text-transform:uppercase; letter-spacing:1px; font-weight:600;">Account Email</p>
                              <p style="margin:0; font-size:15px; color:#2c3e50; font-weight:600; word-break:break-all;">${email}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <p class="mobile-text" style="font-size:15px; line-height:1.6; text-align:center; font-weight:600; margin:30px 0 20px; color:#2c3e50;">
                    Use this code to reset your password:
                  </p>

                  <!-- OTP Display -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="padding:20px 0;">
                        <div class="mobile-otp" style="display:inline-block; background:linear-gradient(135deg, #e53935 0%, #c62828 100%); color:#ffffff; font-size:36px; font-weight:bold; padding:24px 48px; border-radius:16px; letter-spacing:8px; box-shadow:0 6px 20px rgba(229, 57, 53, 0.3); font-family: 'Courier New', monospace;">
                          ${otp}
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Timer Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;">
                    <tr>
                      <td style="padding:20px; background:#fff3e0; border-radius:10px; border-left:4px solid #ff9800;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:12px; vertical-align:top;">
                              <span style="font-size:24px;">⏰</span>
                            </td>
                            <td>
                              <p style="margin:0; font-size:14px; color:#e65100; line-height:1.6;">
                                <strong>Expires in 15 minutes</strong><br>
                                <span style="font-size:13px; color:#f57c00;">This code is time-sensitive. Please use it soon.</span>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Security Warning -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                    <tr>
                      <td style="padding:18px; background:#ffebee; border-radius:10px; border-left:4px solid #c62828;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right:12px; vertical-align:top;">
                              <span style="font-size:24px;">⚠️</span>
                            </td>
                            <td>
                              <p style="margin:0; font-size:13px; color:#b71c1c; line-height:1.6;">
                                <strong>Didn't request this?</strong><br>
                                <span style="font-size:12px; color:#c62828;">If you didn't request a password reset, please ignore this email and secure your account immediately.</span>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <p class="mobile-text" style="font-size:13px; line-height:1.6; color:#7f8c8d; margin-top:30px; text-align:center;">
                    For security reasons, this code will expire shortly. If you need another code, please request a new password reset.
                  </p>

                </td>
              </tr>

              <tr>
                <td style="background: linear-gradient(135deg, #fbeaea 0%, #ffe6e6 100%); text-align:center; padding:30px 20px; border-top:1px solid #f0caca;">
                  <p style="margin:0 0 12px; font-size:13px; color:#5a6c7d;">
                    Need help? Contact us at 
                    <a href="mailto:majumdersoumajit09@gmail.com" style="color:#e53935; text-decoration:none; font-weight:600;">majumdersoumajit09@gmail.com</a>
                  </p>
                  <p style="margin:0; font-size:12px; color:#95a5a6;">
                    © ${year} BASKITO by soumajitverse. All rights reserved.
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


export const ORDER_CONFIRMATION_TEMPLATE = (name, orderId, total, items, paymentMethod) => {
  const year = new Date().getFullYear();

  // Calculate subtotal (total before tax)
  const subtotal = (total / 1.02).toFixed(2); // Assuming total includes 2% tax
  const tax = (subtotal * 0.02).toFixed(2);

  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>Order Confirmation - BASKITO</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .mobile-padding {
                padding: 20px 15px !important;
            }

            .mobile-text {
                font-size: 14px !important;
            }

            .mobile-heading {
                font-size: 20px !important;
            }

            .mobile-table {
                font-size: 12px !important;
            }
        }
    </style>
</head>

<body
    style="margin:0; padding:0; background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%); font-family:'Poppins', 'Segoe UI', Tahoma, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center"
        style="background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);">
        <tr>
            <td align="center" valign="top" style="padding:40px 15px;">

                <table width="100%"
                    style="max-width:620px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 24px rgba(229, 57, 53, 0.12);"
                    cellpadding="0" cellspacing="0">

                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%); text-align:center; padding:40px 20px;">

                            <!-- Package Icon - CENTERED -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:16px;">
                                <tr>
                                    <td align="center">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" valign="middle"
                                                    style="width:80px; height:80px; background:rgba(255,255,255,0.2); border-radius:50%; line-height:80px; text-align:center;">
                                                    <span
                                                        style="font-size:40px; display:inline-block; vertical-align:middle; line-height:normal;">📦</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <h1 style="margin:0; font-size:28px; font-weight:700; color:#ffffff; letter-spacing:1.5px;">
                                BASKITO</h1>
                            <p style="margin:6px 0 0; color:#ffeaea; font-size:13px; letter-spacing:0.5px;">Fresh
                                Groceries, Fast Delivery</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding:30px 20px 0;">
                            <div
                                style="display:inline-block; background:#d4edda; color:#155724; padding:10px 24px; border-radius:50px; font-size:13px; font-weight:700; letter-spacing:0.5px; border:2px solid #28a745;">
                                ✅ ORDER CONFIRMED
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td class="mobile-padding" style="padding:40px 50px; color:#2c3e50;">

                            <h2 class="mobile-heading"
                                style="margin:0 0 16px; font-size:26px; font-weight:700; color:#2c3e50; text-align:center;">
                                Thank You for Your Order! 🎉
                            </h2>

                            <p class="mobile-text"
                                style="font-size:16px; line-height:1.8; text-align:center; margin:0 0 30px; color:#5a6c7d;">
                                Hi <strong style="color:#e53935;">${name}</strong>,<br>
                                Your order has been successfully placed and will be delivered soon!
                            </p>

                            <!-- Order Details - CENTERED -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px auto;">
                                <tr>
                                    <td align="center">
                                        <table width="95%"
                                            style="max-width:500px; margin:0 auto; background:#f8f9fa; border-radius:12px; overflow:hidden; border:2px solid #e9ecef;"
                                            cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding:20px;">
                                                    <table width="100%" cellpadding="0" cellspacing="0">
                                                        <!-- Order ID Row -->
                                                        <tr>
                                                            <td style="padding-bottom:16px;">
                                                                <p
                                                                    style="margin:0; font-size:11px; color:#7f8c8d; text-transform:uppercase; letter-spacing:1px; font-weight:600;">
                                                                    Order ID</p>
                                                                <p
                                                                    style="margin:4px 0 0; font-size:14px; color:#2c3e50; font-weight:600; word-break:break-all;">
                                                                    #${orderId}</p>
                                                            </td>
                                                        </tr>
                                                        <!-- Date Row -->
                                                        <tr>
                                                            <td style="padding-top:0;">
                                                                <p
                                                                    style="margin:0; font-size:11px; color:#7f8c8d; text-transform:uppercase; letter-spacing:1px; font-weight:600;">
                                                                    Date</p>
                                                                <p
                                                                    style="margin:4px 0 0; font-size:14px; color:#2c3e50; font-weight:600;">
                                                                    ${new Date().toLocaleDateString('en-US', { month:
                                                                    'short', day: 'numeric', year: 'numeric' })}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>


                            <!-- Items Table -->
                            <table width="100%" cellpadding="12" cellspacing="0"
                                style="border-collapse:collapse; margin:25px 0; border-radius:12px; overflow:hidden;">
                                <thead>
                                    <tr style="background: linear-gradient(135deg, #e53935 0%, #c62828 100%);">
                                        <th
                                            style="padding:14px; text-align:left; color:#ffffff; font-weight:600; font-size:13px; letter-spacing:0.5px;">
                                            ITEM</th>
                                        <th
                                            style="padding:14px; text-align:center; color:#ffffff; font-weight:600; font-size:13px; letter-spacing:0.5px;">
                                            QTY</th>
                                        <th
                                            style="padding:14px; text-align:right; color:#ffffff; font-weight:600; font-size:13px; letter-spacing:0.5px;">
                                            PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${items.map((item, index) => `
                                    <tr style="background:${index % 2 === 0 ? '#ffffff' : '#f8f9fa'};">
                                        <td class="mobile-table"
                                            style="padding:14px; border-bottom:1px solid #e9ecef; font-size:14px; color:#2c3e50;">
                                            ${item.name}</td>
                                        <td class="mobile-table"
                                            style="padding:14px; border-bottom:1px solid #e9ecef; text-align:center; font-size:14px; color:#5a6c7d; font-weight:600;">
                                            ${item.quantity}</td>
                                        <td class="mobile-table"
                                            style="padding:14px; border-bottom:1px solid #e9ecef; text-align:right; font-size:14px; color:#2c3e50; font-weight:600;">
                                            ₹${item.price}</td>
                                    </tr>
                                    `).join('')}
                                </tbody>
                                <tfoot>
                                    <!-- Subtotal Row -->
                                    <tr style="background:#ffffff;">
                                        <td colspan="2"
                                            style="padding:12px 16px; text-align:right; font-size:14px; color:#5a6c7d; border-top:1px solid #dee2e6;">
                                            Subtotal:</td>
                                        <td
                                            style="padding:12px 16px; text-align:right; font-size:14px; color:#2c3e50; font-weight:600; border-top:1px solid #dee2e6;">
                                            ₹${subtotal}</td>
                                    </tr>
                                    <!-- Tax Row (2%) -->
                                    <tr style="background:#ffffff;">
                                        <td colspan="2"
                                            style="padding:12px 16px; text-align:right; font-size:14px; color:#5a6c7d;">
                                            Tax (2%):</td>
                                        <td
                                            style="padding:12px 16px; text-align:right; font-size:14px; color:#2c3e50; font-weight:600;">
                                            ₹${tax}</td>
                                    </tr>
                                    <!-- Total Row -->
                                    <tr style="background:#f8f9fa;">
                                        <td colspan="2"
                                            style="padding:16px; text-align:right; font-size:16px; font-weight:700; color:#2c3e50; border-top:2px solid #dee2e6;">
                                            TOTAL:</td>
                                        <td
                                            style="padding:16px; text-align:right; font-size:20px; font-weight:700; color:#e53935; border-top:2px solid #dee2e6;">
                                            ₹${total}</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <!-- Payment Method -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
                                <tr>
                                    <td
                                        style="padding:16px; background:#e8f5e9; border-radius:10px; border-left:4px solid #4caf50; text-align:center;">
                                        <p
                                            style="margin:0; font-size:12px; color:#2e7d32; text-transform:uppercase; letter-spacing:1px; font-weight:600;">
                                            Payment Method</p>
                                        <p style="margin:6px 0 0; font-size:15px; color:#1b5e20; font-weight:700;">
                                            ${paymentMethod === 'COD' ? '💵 Cash on Delivery' : '💳 Paid Online'}</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Delivery Info -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;">
                                <tr>
                                    <td
                                        style="padding:24px; background:#e3f2fd; border-radius:12px; border-left:4px solid #2196f3;">
                                        <p
                                            style="margin:0 0 12px; font-size:14px; color:#0d47a1; font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">
                                            📦 What's Next?</p>
                                        <ul style="margin:0; padding-left:20px; color:#1565c0; line-height:1.8;">
                                            <li style="font-size:13px; margin-bottom:8px;">We're packing your order with
                                                care</li>
                                            <li style="font-size:13px; margin-bottom:8px;">You'll receive tracking info
                                                via email</li>
                                            <li style="font-size:13px; margin-bottom:8px;">Expected delivery:
                                                <strong>within 30 minutes</strong></li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Button -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" style="padding:30px 0;">
                                        <a href="https://grocery-app-flax-five.vercel.app/my-orders"
                                            style="background:linear-gradient(135deg, #e53935 0%, #c62828 100%); color:#ffffff; text-decoration:none; padding:16px 40px; border-radius:50px; font-weight:700; font-size:15px; display:inline-block; box-shadow:0 6px 20px rgba(229, 57, 53, 0.3); letter-spacing:0.5px;">
                                            📱 Track Your Order
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <p class="mobile-text"
                                style="font-size:14px; color:#7f8c8d; text-align:center; margin:30px 0 10px; font-style:italic;">
                                "We carefully handpick each item to ensure you receive only the freshest produce."
                            </p>
                            <p
                                style="font-size:15px; color:#2c3e50; text-align:center; font-weight:600; margin-top:30px;">
                                Thank you for choosing BASKITO! 💚
                                <br>
                                <span style="color:#e53935;">— Your Friendly Neighborhood Grocer</span>
                            </p>

                        </td>
                    </tr>

                    <!-- Footer - MATCHED WITH OTHER TEMPLATES -->
                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #fbeaea 0%, #ffe6e6 100%); text-align:center; padding:30px 20px; border-top:1px solid #f0caca;">
                            <p style="margin:0 0 12px; font-size:13px; color:#5a6c7d; line-height:1.6;">
                                Need help? We're here for you!<br>
                                Contact us at <a href="mailto:majumdersoumajit09@gmail.com"
                                    style="color:#e53935; text-decoration:none; font-weight:600;">majumdersoumajit09@gmail.com</a>
                            </p>
                            <p style="margin:0; font-size:12px; color:#95a5a6;">
                                © ${year} BASKITO by soumajitverse. All rights reserved.<br>
                                <a href="https://grocery-app-flax-five.vercel.app"
                                    style="color:#e53935; text-decoration:none; font-weight:600;">baskito.vercel.app</a>
                            </p>
                            <div style="margin-top:16px;">
                                <span style="font-size:11px; color:#bdc3c7; letter-spacing:0.5px;">Made with ❤️ for
                                    fresh grocery lovers</span>
                            </div>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>
</body>

</html>`;
};
