// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsNotEmpty, IsString } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
