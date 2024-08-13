import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './test';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly TestModel: Model<Test>) {

  }

  async getAll(){
    return await this.TestModel.find().exec();
  }

  async getById(id: string){
    return await this.TestModel.findById(id).exec();
  }

  async create(test: Test){
    const createdTest = new this.TestModel(test);
    return await createdTest.save();
  }

  async update(id: string, test: Test){
    await this.TestModel.updateOne({_id: id}, test).exec();
    return this.getById(id);
  }

  async delete(id: string){
    return await this.TestModel.deleteOne({_id: id}).exec();
  }

}