import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getHello(): string {
    return `"test"`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `test zzz ${id}`;
  }

  @Post()
  create(@Body() movieData): string {
    console.log(movieData);
    return `test zzz post`;
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() movieData): any {
    console.log(movieData);
    return {
      id: id,
      ...movieData,
    };
  }
}
