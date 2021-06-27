import sgMail from "@sendgrid/mail";
import { nanoid } from "nanoid";

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
            <p>Your Vaccine id number is: ${nanoid(15)}</p>
            <p>Your Van is number is: ${nanoid(9)}</p>
            
            <h3>TIME SLOTS</h3>
            <table>
              <thead>
                <tr>
                  <th>Age-Group</th>
                  <th>Time-range</th
                </tr>
              </thead>
            
            <tr> <td>18-38</td>
                    <td>10-11</td>
                  </tr>
                  
                  <tr>
                    <td>39-58</td>
                    <td>11:05-12:05</td>
                  </tr>
                  <tr>
                  <td>59-78</td>
                    <td>12:10-1:10</td>
                  </tr>
                  <tr>
                  <td>79-100</td>
                    <td>1:15-2:15</td>
                  </tr>
            
            </tr>
         </table>
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
