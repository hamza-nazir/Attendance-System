const nodemailer = require('nodemailer');

// Setup transporter once
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'you gmail',
    pass: '16 words pass-code'
  }
});

// Export a function to send mail
const sendEmail = async (present,absent) => {
 
for(data of present){
   const mailOptions = {
    from: 'Mirza Hamza',
    to:`${data.gmail}`,
    subject:'Class Attendance',
   text: 'This is to confirm that you were present in today\'s class. Thank you for your regular attendance.'

  };

      await transporter.sendMail(mailOptions);
    console.log(`Email send to ${data.gmail}`);
  
}
 
for(data of absent){
   const mailOptions = {
    from: 'Mirza Hamza',
    to:`${data.gmail}`,
    subject:'Class Attendance',
   text: 'You have been marked absent in today\'s class. Kindly make sure to attend upcoming sessions.'

  };

      await transporter.sendMail(mailOptions);
    console.log(`Email send to ${data.gmail}`);
 
}


};

module.exports = sendEmail;
