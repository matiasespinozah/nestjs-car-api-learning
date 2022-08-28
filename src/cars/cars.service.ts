import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  create(createCardDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCardDto
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...car,
          ...updateCarDto,
          id
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== carDB.id);
    return carDB;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
