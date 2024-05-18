import config from './app/config';
import mongoose from 'mongoose';
import app from './app';
import express from 'express';
import cors from 'cors';
// Parser
app.use(express.json()); //To use json file
app.use(cors());

async function main() {
  //try catch
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `Srver is listening Example app listening on port ${config.port}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
