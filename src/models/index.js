import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  adress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  coordinates: {
    type: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  maidenName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
  },
  hair: {
    type: {
      color: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  macAddress: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  bank: {
    type: {
      cardExpire: {
        type: String,
        required: true,
      },
      cardNumber: {
        type: String,
        required: true,
      },
      cardType: {
        type: String,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      iban: {
        type: String,
        required: true,
      },
    },
  },
  company: {
    type: {
      address: addressSchema,
      department: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  },
  ein: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  userAgent: {
    type: String,
    required: true,
  },
});

export default model("users", userSchema);
