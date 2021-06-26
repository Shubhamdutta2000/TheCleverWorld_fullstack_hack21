import sgMail from "@sendgrid/mail";

const registerRequest = (user) => {
  console.log("Inside register request mailer", user.email);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "prasundas115@gmail.com",
    to: user.email,
    subject: "Register Yourself For COVID VACCINATION!!!",
    html: `<h1>You can Register For COVID Vaccination now. Register yourself in our website.</h1>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Successfully sent Email");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default registerRequest;
