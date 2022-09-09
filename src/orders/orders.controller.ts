import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import {NotFoundException} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';

@Controller('/api/v2/orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOkResponse({type: OrderEntity, isArray: true})
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':orderNumber')
  @ApiOkResponse({type: OrderEntity})
  async findOne(@Param('orderNumber') orderNumber: string) {
    const order = await this.ordersService.findOne(orderNumber);
    if(!order){
      throw new NotFoundException(`Could not find order with ${orderNumber}.`)
    }
    return order;
  }

  @Patch(':orderNumber')
  @ApiOkResponse({type: OrderEntity})
  update(@Param('orderNumber') orderNumber: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(orderNumber, updateOrderDto);
  }

}
