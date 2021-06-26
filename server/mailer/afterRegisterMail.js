import sgMail from "@sendgrid/mail";

const afterRegisterMail = (user, standPoint) => {
  console.log("Inside after register mailer", user.email);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "prasundas115@gmail.com",
    to: user.email,
    subject: "Registered Successfully For COVID VACCINATION!!!",
    html: `<h1>You are successfully Registered for COVID Vaccination.</h1>
            <p>Your serial Number is: ${user.serialNumber}</p>
            <p>Your Stand Point Location is: ${standPoint.location}</p>
      `,
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

export default afterRegisterMail;
