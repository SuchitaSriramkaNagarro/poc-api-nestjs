import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dtos/update-order.dto';

@Controller('/api/v1/orders')
export class OrdersController {

    constructor(private ordersService: OrdersService){}

    @Get()
    listOrders(){
        return this.ordersService.findAll()
    }

    @Get('/:customerId')
    getOrderDetail(@Param('customerId') customerId: string){
        return this.ordersService.findOne(customerId)
    }

    @Patch('/:customerId')
    updateOrderDetail(@Param('customerId') customerId: string ,@Body() body: UpdateOrderDto){
        console.log(customerId, body);
        
        return this.ordersService.update(customerId, body.customerName)
    }
}
