import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersRepository {

    constructor(private prisma: PrismaService){}

  findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(orderNumber: string) {
    return this.prisma.order.findUnique({
        where:{orderNumber}
    });
  }

  update(orderNumber: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
        where: {orderNumber},
        data: updateOrderDto
    });
  }

}
