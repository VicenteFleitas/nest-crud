import { Controller, Get, Query, Req, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Request } from 'express';

import { CreateCatDto } from "./create-cat.dto"

@Controller("cats")
export class CatsController {

  // @Post()
  // @HttpCode(204)
  // create(): object {
  //   return { message: 'This action adds a new cat' };
  // }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    let data = {
      success: true,
      data: createCatDto
    }
    return data;
  }


  @Get()
  async findAll(@Query('age') age: number, @Query('breed') breed: string) {
    let data = {
      success: true,
      data: {
        age: Number(age),
        breed:breed
      }
    }
    return data;
  }


  // @Get()
  // findAll(@Req() request: Request, @Query('uid') uid: number ): object {
  //   console.log(JSON.stringify(request.body), uid)
  //   return { message: "This action return all cats" };
  // }


  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }


}
