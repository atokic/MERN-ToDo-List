import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {
    
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully!');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected!');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database! ', error.message);
    })
}

export default Connection;