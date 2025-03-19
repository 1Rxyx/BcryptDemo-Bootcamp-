const bcrypt = require("bcrypt");

// const hashPassword = async (password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt)
//     console.log(salt);
//     console.log(hash);
//     }

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
};

const login = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  if (result) {
    console.log("Password is valid");
  } else {
    console.log("Password is invalid");
  }
};

// bcrypt.hash('123456');

login("123456", "2b$12$udRfPXF4I.xTB/KKfic6eeQtpx293rA4qsPqDeTZ.lH.O9jHZxDWy"
    );
