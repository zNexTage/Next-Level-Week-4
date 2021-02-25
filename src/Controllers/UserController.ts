import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../Models/User';

class UserController {


    async create(request: Request, reponse: Response) {
        const { name, email } = request.body;

        const usersRepository = getRepository(User);

        const user = usersRepository.create({
            name,
            email
        });

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            reponse.status(400).json({
                error:"User already exists"
            });

            return;
        }

        await usersRepository.save(user);

        reponse.json(user);
    }
}

export default UserController;