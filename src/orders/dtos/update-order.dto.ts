import { IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger/dist/decorators"

export class UpdateOrderDto{

    @ApiProperty()
    @IsString()
    customerName: string
}