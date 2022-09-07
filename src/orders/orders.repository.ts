import { readFile, writeFile } from "fs/promises";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class OrdersRepository{
    
    async findAll(){
        try {
            const contents = await readFile('orders.json', 'utf-8')
            const orders = JSON.parse(contents)
            return orders
        } catch (error) {
            throw new BadRequestException('Bad request')
        }
    }

    async findOne(customerId: string){
        try {
            const contents = await readFile('orders.json', 'utf-8')
            const orders = JSON.parse(contents)
            const singleOrder = orders.find((order) => order.customerId === customerId)
            
            if(!singleOrder){
                throw new Error()
            }
            return singleOrder
        } catch (error) {
            throw new NotFoundException(`No order with customer id ${customerId}`)
        }
    }

    async update(customerId: string, customerName: string){
        const contents = await readFile('orders.json', 'utf-8')
        const orders = JSON.parse(contents)
        const newOrders = orders.map((order)=>{
            if(order.customerId === customerId){
                return {...order, customerName}
            }
            return order
        })
        await writeFile('orders.json', JSON.stringify(newOrders))
    }
}