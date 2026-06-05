import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @Post()
  create(
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.notesService.createNote(title, content);
  }

  @Get()
  findAll() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.getNoteById(id);
  }

}