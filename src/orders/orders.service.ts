import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {

    constructor(private ordersRepo: OrdersRepository){}

    findAll(){
        return this.ordersRepo.findAll()
    }

    findOne(customerId: string){
        return this.ordersRepo.findOne(customerId)
    }

    update(customerId: string, customerName: string){
        this.ordersRepo.update(customerId, customerName)
    }
}
