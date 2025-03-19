import { Controller, Get, Query, Req, Post, HttpCode, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller("cats")
export class CatsController {

  @Post()
    //   @HttpCode(204)
  create(): object {
    return { message: 'This action adds a new cat' };
  }

  @Get()
  findAll(@Req() request: Request, @Query('uid') uid: number ): object {
    console.log(JSON.stringify(request.body), uid)
    return { message: "This action return all cats" };
  }


@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}


}
