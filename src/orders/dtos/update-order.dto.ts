import { IsString } from "class-validator"

export class UpdateOrderDto{

    @IsString()
    customerName: string
}