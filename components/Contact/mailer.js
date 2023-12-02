import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.service_857o8ue,
    process.env.template_h2lnwss,
    { name, email, message },
    process.env.DIgD8UXfuvDwUQ7ad
  );
};

export default mail;
