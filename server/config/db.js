import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    if (process.env.NODE_ENV === "development")
      console.info(`connected to db at ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
