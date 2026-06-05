import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async createNote(title: string, content: string) {
    return this.prisma.note.create({
      data: {
        title,
        content,
      },
    });
  }

  async getNotes() {
    return this.prisma.note.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}